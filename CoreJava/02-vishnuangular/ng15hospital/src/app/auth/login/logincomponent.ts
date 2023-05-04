import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms"
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service'

@Component({
  selector: 'app-login',
  templateUrl: './logincomponent.html',
  styleUrls: ['../auth.styles.css']
})
export class LoginComponent {
  loginForm:FormGroup
  private toaster = inject(ToastrService)
  private userSvc = inject(UserService)
  private router  = inject(Router)

  constructor() {
    this.loginForm = new FormGroup({
      uname: new FormControl("", Validators.required),
      upwd : new FormControl("", Validators.required)
    })
  }

  doLogin() {
    //console.log("Form is Submitted ", this.loginForm.valid)
    if(this.loginForm.valid) {
      //console.log(this.loginForm.value)
      this.userSvc.getUsers().subscribe({
        next: (data) => {
          let user = data.find(e => e.username === this.loginForm.value.uname)
          if(user) {
            if(user.password === this.loginForm.value.upwd) {
              this.toaster.success("Login Success!!!")
              sessionStorage.setItem("user", JSON.stringify(user))
              // Navigate to Home Screen
              this.router.navigate(['/home'])
            } else {
              this.toaster.error("Invalid Password...")
            }
          } else {
            this.toaster.error("Invalid User Credentials...")
          }
        },
        error: (err) => {
          this.toaster.error("Login Error ", err)
        }
      })
    } else {
      this.toaster.error("Invalid Data Entered.")
    }
  }

}
