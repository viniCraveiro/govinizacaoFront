import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { VeicleComponent } from './veicle/veicle.component';
import { UserComponent } from './user/user.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    VeicleComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    MatButtonModule

  ]
})
export class RegisterModule { }
