import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { RecipesComponent } from './recipes.component';
import { SharedModule } from "../shared/shared.module";
import { RecipesRoutingModule } from "./recipes-routing.module";
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';
import { RecipeItemComponent } from './recipes-list/recipe-item/recipe-item.component';

@NgModule({
    declarations: [
        RecipesComponent,
        RecipeItemComponent,
        RecipeEditComponent,
        RecipeStartComponent,
        RecipesListComponent,
        RecipesDetailComponent,
    ],
    exports: [
        RecipesComponent,
        RecipeItemComponent,
        RecipeEditComponent,
        RecipeStartComponent,
        RecipesListComponent,
        RecipesDetailComponent,
    ],
    imports: [
        SharedModule,
        RouterModule,
        ReactiveFormsModule,
        RecipesRoutingModule,
    ]
})
export class RecipesModule { }