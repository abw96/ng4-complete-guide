import { Component, ComponentFactoryResolver, OnDestroy, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { AuthService, AuthResponseData } from "./auth.service";
import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceholderDirective } from "../shared/placeholder/placeholder.directive";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent implements OnDestroy{
    isLoginMode: boolean = true;
    isLoading: boolean = false;
    error: string = null;
    @ViewChild(PlaceholderDirective, {static: false}) alertHost: PlaceholderDirective;
    private sub: Subscription;

    constructor(
        private authService: AuthService,
        private router: Router,
        private componentFactoryResolver: ComponentFactoryResolver
    ) { }

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit(form: NgForm) {
        this.isLoading = true;
        if (!form.valid) return;
        const email = form.value.email;
        const password = form.value.password;

        let authObs: Observable<AuthResponseData>;

        if (this.isLoginMode) {
            authObs = this.authService.login(email, password);
        }
        else {
            authObs = this.authService.signup(email, password);
        }

        authObs.subscribe(res => {
            this.isLoading = false;
            this.error = null;
            this.router.navigate(['/recipes']);
        }, errorMessage => {
            this.error = errorMessage;
            this.showErrorAlert(errorMessage);
            this.isLoading = false;
        }
        );

        form.reset();
    }

    onHandleError() {
        this.error = null;
    }

    private showErrorAlert(message: string) {
        // won't work:  const alertComp = new AlertComponent();
        const alertCmpFactory = this.componentFactoryResolver
            .resolveComponentFactory(AlertComponent);
        const hostViewContainerRef = this.alertHost.viewContainerRef;
        hostViewContainerRef.clear();

        const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);

        componentRef.instance.message = message;
        this.sub = componentRef.instance.close.subscribe(() => {
            this.sub.unsubscribe();
            hostViewContainerRef.clear();
        });
    }

    ngOnDestroy(): void {
        if(this.sub) {
            this.sub.unsubscribe();
        }        
    }
}