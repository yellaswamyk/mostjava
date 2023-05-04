import { Injectable } from '@angular/core';
import { map } from "rxjs/operators"
import { User } from '../models/user.model';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private restUrl = "http://localhost:3000/wsusers"
  constructor(private ds:DataService) { }

  getUsers() {
    return this.ds.readData(this.restUrl).pipe(map(resp => resp as User[]))
  }
  addUser(newuser:User) {
    return this.ds.createData(this.restUrl, newuser).pipe(map(resp => resp as User))
  }
  updateUser(modifiedUser:User) {
    return this.ds.updateData(this.restUrl, modifiedUser).pipe(map(resp => resp as User))
  }
  deleteUser(id:number) {
    return this.ds.deleteData(this.restUrl, id)
  }
}
