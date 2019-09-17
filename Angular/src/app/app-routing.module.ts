import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { SearchCustomersComponent } from './search-customers/search-customers.component';
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

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component:LoginComponent },
    //{ path: '', redirectTo: 'customer', pathMatch: 'full' },
    {path:'user-landing-page',component: UserLandingPageComponent},
    {path:'mentor-landing-page',component: MentorLandingPageComponent},
    {path:'blocked-page',component:BlockedPageComponent},
    {path:'mentor-notification',component:MentorNotificationComponent},
     {path:'registerUser',component:RegisterUserComponent},
     {path:'registerMentor',component:RegisterMentorComponent},
     {path:'notificationsList',component:UserNotificattionComponent},
     {path:'admin-landing-page',component:AdminComponent},
     {path:'blockUser',component:BlockuserComponent},
     {path:'view-technologies',component:ViewtechComponent}
   //{ path: 'customer', component: CustomersListComponent },
    //{ path: 'add', component: CreateCustomerComponent },
    //{ path: 'findbyage', component: SearchCustomersComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
