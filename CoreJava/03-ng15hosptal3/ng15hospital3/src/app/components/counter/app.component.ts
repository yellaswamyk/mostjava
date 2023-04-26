import {Component} from "@angular/core"
import { CounterComponent } from "./counter.component";
import { CommonModule } from "@angular/common";
import { MathService } from "src/app/services/math.service";
@Component({
    standalone: true,
    selector: "app-root",
    template: `<h4>{{appTitle}}</h4>
    <h3 [innerHTML]="appTitle"></h3>
    <button (click)="handleButton()">Show/Hide</button>
    <app-counter *ngIf="show"></app-counter>
`,
    imports :[CounterComponent,CommonModule],
    providers:[MathService]
})

export class AppComponent{
    appTitle:string="My <u> first angular </u>application"
    show=false
    
    handleButton() {
        // if(this.show == true) {
        //     this.show = false
        // } else {
        //     this.show = true
        // }
        this.show = !this.show
    }
}