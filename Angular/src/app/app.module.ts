import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { SearchCustomersComponent } from './search-customers/search-customers.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { UserLandingPageComponent } from './user-landing-page/user-landing-page.component';
import { MentorLandingPageComponent } from './mentor-landing-page/mentor-landing-page.component';
import { BlockedPageComponent } from './blocked-page/blocked-page.component';
import { MentorNotificationComponent } from './mentor-notification/mentor-notification.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { RegisterMentorComponent } from './register-mentor/register-mentor.component';
import { UserNotificattionComponent } from './user-notificattion/user-notificattion.component';
import { AdminComponent } from './admin/admin.component';
import { BlockuserComponent } from './blockuser/blockuser.component';
import { ViewtechComponent } from './viewtech/viewtech.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCustomerComponent,
    CustomerDetailsComponent,
    CustomersListComponent,
    SearchCustomersComponent,
    LoginComponent,
    UserLandingPageComponent,
    MentorLandingPageComponent,
    BlockedPageComponent,
    MentorNotificationComponent,
    RegisterUserComponent,
    RegisterMentorComponent,
    UserNotificattionComponent,
    AdminComponent,
    BlockuserComponent,
    ViewtechComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
