import { Component } from "@angular/core";

@Component({
   selector :"app-root",
   template: "<h3>My Hospital app</h3>"
})
export class AppComponent{
    constructor() {
        console.log("App Component Constructor..")
       }
     
}