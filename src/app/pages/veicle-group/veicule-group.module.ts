import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VeiculeGroupRoutingModule } from './veicule-group-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { VeicleGroupComponent } from './veicle-group.component';


@NgModule({
  declarations: [
    VeicleGroupComponent
  ],
  imports: [
    CommonModule,
    VeiculeGroupRoutingModule,
    MatCardModule,
    MatButtonModule,
  ]
})
export class VeiculeGroupModule { }
