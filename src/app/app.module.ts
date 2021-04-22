import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { PateComponent } from './menu/pate/pate.component';
import { PizzaComponent } from './menu/pizza/pizza.component';
import { ContactComponent } from './contact/contact.component';
import { InfoComponent } from './contact/info/info.component';
import { FormComponent } from './contact/form/form.component';

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
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
