import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UstomersHostComponent } from './ustomers-host/ustomers-host.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UstomersHostComponent,
    CustomersListComponent,
    CustomerDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
