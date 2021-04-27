import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { PateComponent } from './menu/pate/pate.component';
import { PizzaComponent } from './menu/pizza/pizza.component';
import { ContactComponent } from './contact/contact.component';
import { InfoComponent } from './contact/info/info.component';
import { FormComponent } from './contact/form/form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavComponent } from './nav/nav.component';
import { PlatFormatPipe } from './pipes/plat-format.pipe';
import { FilterPlatPipe } from './pipes/filter-plat.pipe';
import { PanierComponent } from './menu/panier/panier.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    MenuComponent,
    PateComponent,
    PizzaComponent,
    ContactComponent,
    InfoComponent,
    FormComponent,
    NotFoundComponent,
    NavComponent,
    PlatFormatPipe,
    FilterPlatPipe,
    PanierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
