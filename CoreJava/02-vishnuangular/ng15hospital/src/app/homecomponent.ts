import { Component } from "@angular/core"
@Component({
    selector: "app-home",
    templateUrl:"./homecomponent.html"
})
export class HomeComponent {
    constructor() {
        console.log("Home Component Created.")
    }
}