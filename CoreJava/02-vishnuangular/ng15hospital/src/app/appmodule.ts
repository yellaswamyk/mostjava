import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AdminModule } from "src/admin/adminmodule";
import { AuthModule } from "src/auth/authmodule";
import { DoctorModule } from "src/doctor/doctormodule";
import { AppComponent } from "./appcomponent";
@NgModule({
  imports  :[AuthModule,AdminModule,DoctorModule,BrowserModule],
  declarations :[AppComponent]
})
export class AppModule{
    constructor() {
        console.log("in app constructor")
        console.log("Tet message")
       }
     
}