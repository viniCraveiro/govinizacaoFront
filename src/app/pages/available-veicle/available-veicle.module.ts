import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';


import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AvailableVeicleRoutingModule } from './available-veicle-routing.module';
import { AvailableVeicleComponent } from './available-veicle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MomentDateModule } from '@angular/material-moment-adapter';

@NgModule({
  declarations: [
    AvailableVeicleComponent
  ],
  imports: [
    CommonModule,
    AvailableVeicleRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MomentDateModule,
  ]
})
export class AvailableVeicleModule { }
