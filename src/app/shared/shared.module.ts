import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AlertComponent } from "./alert/alert.component";
import { DropdownDirective } from "./dropdown.directive";
import { PlaceholderDirective } from "./placeholder/placeholder.directive";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";

@NgModule({
    declarations: [
        AlertComponent,
        DropdownDirective,
        PlaceholderDirective,
        LoadingSpinnerComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        CommonModule,
        AlertComponent,
        DropdownDirective,
        PlaceholderDirective,
        LoadingSpinnerComponent,
    ]
})
export class SharedModule {}