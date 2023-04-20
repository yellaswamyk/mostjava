import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
   count:number=0
   mynumbers = [10, 40, 30, 20]
   incrementCount() :void{
    this.count++

   }
   decrementCount():void{
    this.count--
   }
}
