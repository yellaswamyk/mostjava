import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MathService } from 'src/app/services/math.service';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit,OnDestroy{
  mathCountValue :number=0
  constructor(private mathSvc:MathService) {
    //let obj:any = document.getElementById("hc")
    //obj.style.color="red"
  }
  
  ngOnInit() :void{
    let obj:any = document.getElementById("hc")
    obj.style.color = "blue"
   // this.mathCountValue = this.mathSvc.getCountData()
   this.mathSvc.currentCountData.subscribe({
    next: (data) => this.mathCountValue = data
  })

 }
 
   ngOnDestroy(){
      console.log("Destroy..")
   }
   
   count:number=0
   mynumbers = [10, 40, 30, 20]
   incrementCount() :void{
    this.count++

   }
   decrementCount():void{
    this.count--
   }
  
  
}
