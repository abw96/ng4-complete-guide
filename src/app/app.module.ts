import { NgModule } from '@angular/core';
import { CoreModule } from './core.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RecipesModule } from './recipes/recipes.module';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingListModule } from './shopping-list/shopping-list.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    AuthModule,
    CoreModule,
    FormsModule,
    SharedModule,
    BrowserModule,
    RecipesModule,
    AppRoutingModule,
    HttpClientModule,
    ShoppingListModule,
    ReactiveFormsModule,
  ],
  providers: [CoreModule],
  bootstrap: [AppComponent],
})
export class AppModule { }
