//Refer Component decorator from core library
import { Component } from "@angular/core"


//Use Component Decorator
@Component({
    // Specify tag name for the component
    selector: "app-root",
    // Output for component
    template: `
    <!-- <h1>My First Angular Component</h1> 
    <app-home></app-home>
    <app-login></app-login> -->
    <!-- <a routerLink="home">Home</a>&nbsp;&nbsp; <a routerLink="login">Login</a>&nbsp;&nbsp; <a routerLink="register">Register</a> -->
    <!--<router-outlet></router-outlet>-->
    `
})
//Define a class for Component
export class AppComponent {
    constructor() {
        console.log("App Component Created.")
    }
}
