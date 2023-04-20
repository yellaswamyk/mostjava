import {Component} from "@angular/core"
import { CounterComponent } from "../components/counter/counter.component";
@Component({
    standalone: true,
    selector: "app-root",
    template: `My First Angular Application`,
    imports :[CounterComponent]
})
export class AppComponent{
    
}