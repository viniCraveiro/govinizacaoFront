import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';


import { AvailableVeicleRoutingModule } from './available-veicle-routing.module';
import { AvailableVeicleComponent } from './available-veicle.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AvailableVeicleComponent
  ],
  imports: [
    CommonModule,
    AvailableVeicleRoutingModule,
    MatCardModule,
    MatButtonModule,

  ]
})
export class AvailableVeicleModule { }
