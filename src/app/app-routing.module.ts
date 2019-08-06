import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerlistComponent } from './components/customerlist/customerlist.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { AddcustomerComponent } from './components/addcustomer/addcustomer.component';
import { UpdatecustomerComponent } from './components/updatecustomer/updatecustomer.component';
import { AddreactiveComponent } from './addreactive/addreactive.component';
import { LoginComponent } from './login/login.component';
import {AuthGuard} from './auth.guard';
import { SearchComponent } from './search/search.component';
import { ShowsearcheddataComponent } from './showsearcheddata/showsearcheddata.component';

const routes: Routes = [
  {path:'', redirectTo:'listcustomer',pathMatch:'full'},//default page
  {path:'home', redirectTo:'listcustomer',pathMatch:'full'},
  {path:'listcustomer', component:CustomerlistComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'add', component:AddcustomerComponent, },
  {path: 'listcustomer/update/:id',component:UpdatecustomerComponent},
  {path: 'addreactive', component:AddreactiveComponent, canActivate:[AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'search', component: SearchComponent},
  {path: 'showsearch', component:ShowsearcheddataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
