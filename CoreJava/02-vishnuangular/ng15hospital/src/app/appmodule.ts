// Refer NgModule decorator from core library
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import { AdminModule } from "./admin/adminmodule";
import { AppComponent } from "./appcomponent";
import { AuthModule } from "./auth/authmodule";
import { LoginComponent } from "./auth/login/logincomponent";
import { RegisterComponent } from "./auth/register/registercomponent";
import { DoctorModule } from "./doctor/doctormodule";
import { HomeComponent } from "./homecomponent";
//import { NotFoundComponent } from './not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { HospitalMaterialModule } from "./hospital-material/hospital-materialmodule";
import { LogoutComponent } from "./auth/logoutcomponent";

// Route Mappings
const appRoutes:Routes = [
    {path: "home", component: HomeComponent},
    {path: "login", component: LoginComponent},
    {path: "register", component: RegisterComponent},
    {path: "logout", component: LogoutComponent},
    {path:"", redirectTo:"login", pathMatch:'full'},
   // {path:"**", component: NotFoundComponent}
]

// Use NgModule decorator
@NgModule({
    // Module Dependencies
    imports: [AuthModule, AdminModule, DoctorModule, BrowserModule, 
        RouterModule.forRoot(appRoutes), BrowserAnimationsModule, HttpClientModule, HospitalMaterialModule],
    // Register Component Classes
    declarations: [AppComponent, HomeComponent],
    // Startup Component Class
    bootstrap: [AppComponent]
})
// Define a class for App Module
export class AppModule {
    constructor() {
        console.log("App Module Created.")
    }
}