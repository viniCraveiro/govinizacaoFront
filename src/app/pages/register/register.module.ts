import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RegisterRoutingModule } from './register-routing.module';
import { UserComponent } from './user/user.component';
import { VeicleComponent } from './veicle/veicle.component';
import { MatCardModule } from '@angular/material/card';




@NgModule({
  declarations: [
    VeicleComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCardModule

  ]
})
export class RegisterModule { }
