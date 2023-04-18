import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AdminModule } from "src/app/admin/adminmodule";
import { AuthModule } from "src/app/auth/authmodule";
import { DoctorModule } from "src/app/doctor/doctormodule";
import { AppComponent } from "./appcomponent";
import { HomeComponent } from "./homecomponent";
@NgModule({
  imports  :[AuthModule,AdminModule,DoctorModule,BrowserModule],
  declarations :[AppComponent,HomeComponent]
})
export class AppModule{
    constructor() {
        console.log("in app constructor")
        console.log("Tet message")
       }
     
}