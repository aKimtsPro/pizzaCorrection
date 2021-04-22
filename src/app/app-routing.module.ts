import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path:'', redirectTo:'accueil', pathMatch: 'full' },
  { path:'accueil', component: AccueilComponent },
  { path:'menu', component: MenuComponent },
  { path:'contact', component: ContactComponent },
  { path:'**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
