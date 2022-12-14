import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        AuthComponent,
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        RouterModule.forChild([{
            path: '',
            component: AuthComponent
        }])
    ],
    exports: [
        AuthComponent,
    ]
})
export class AuthModule { }