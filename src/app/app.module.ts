import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { CustomerlistComponent } from './components/customerlist/customerlist.component';
import { AddcustomerComponent } from './components/addcustomer/addcustomer.component';
import { UpdatecustomerComponent } from './components/updatecustomer/updatecustomer.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {CustomerService} from './service/customer.service';
import { AddreactiveComponent } from './addreactive/addreactive.component';
import { LoginComponent } from './login/login.component';
import { ChangetextDirective } from './changetext.directive';
import { MultiplierPipe } from './multiplier.pipe';
import { SearchComponent } from './search/search.component';
import { ShowsearcheddataComponent } from './showsearcheddata/showsearcheddata.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CustomerlistComponent,
    AddcustomerComponent,
    UpdatecustomerComponent,
    ContactComponent,
    AddreactiveComponent,
    LoginComponent,
    ChangetextDirective,
    MultiplierPipe,
    SearchComponent,
    ShowsearcheddataComponent,

  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],

  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
