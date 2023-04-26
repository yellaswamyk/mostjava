import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MathService } from '../services/math.service';

@Component({
  selector: 'app-math',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h4>Math Component
    <button (click)="increaseCountData()" class="btn btn-warning">+</button>
    </h4>
  `,
  styles: [
  ]
})
export class MathComponent {
  // DI
  private mathSvc = inject(MathService)

  mathCounter = 300

  increaseCountData() {
    let num = this.mathSvc.getCountData()
    num = num + 1
    this.mathSvc.setCountData(num)
  }

}
