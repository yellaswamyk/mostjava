import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './registercomponent.html',
  styleUrls:['../auth.styles.css']
})
export class RegisterComponent {
  frmUser:User = new User(0, "", "","")
  private toastr = inject(ToastrService)
  private userSvc = inject(UserService)

  doRegister(valid:any) {
    if(valid) {
      //console.log(this.frmUser)
      this.userSvc.addUser(this.frmUser).subscribe({
        next: (data) => {
          this.toastr.success("User Registration Success")
          //console.log("Data is ", data)
        },
        error: (err) => {
          this.toastr.error("User Registration Failed", err)
        }
      })
    } else {
      this.toastr.error("Fields are required.")
    }
  }
}
