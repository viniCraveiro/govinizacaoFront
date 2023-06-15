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
import { HttpClientModule } from '@angular/common/http';
import { AvailableVeicleService } from './available-veicle.service';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    AvailableVeicleComponent
  ],
  imports: [
    CommonModule,
    AvailableVeicleRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MomentDateModule,
    MatTableModule,

  ],
  providers: [AvailableVeicleService]
})
export class AvailableVeicleModule { }
