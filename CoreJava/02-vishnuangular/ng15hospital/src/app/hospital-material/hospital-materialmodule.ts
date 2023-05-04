import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card'
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button'
import {MatSelectModule} from '@angular/material/select'
import {MatToolbarModule} from '@angular/material/toolbar'
@NgModule({
  
  exports: [ MatCardModule, MatInputModule, MatButtonModule, MatSelectModule, MatToolbarModule ]
})
export class HospitalMaterialModule{

}

