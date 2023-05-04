import { NgModule  } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ToastrModule } from "ngx-toastr";
import { HospitalMaterialModule } from "../hospital-material/hospital-materialmodule";
import { LoginComponent } from './login/logincomponent';
import { RegisterComponent} from './register/registercomponent';
import { LogoutComponent } from './logoutcomponent'

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LogoutComponent
  ],
  exports: [ LoginComponent ],
  imports: [ HospitalMaterialModule, RouterModule, ReactiveFormsModule, ToastrModule.forRoot(),
    FormsModule]
})
export class AuthModule {
    constructor() {
        console.log("Auth Module Created.")
    }
}