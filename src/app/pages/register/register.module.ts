import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {
  MatSnackBarModule
} from '@angular/material/snack-bar';
import { RegisterRoutingModule } from './register-routing.module';
import { UserComponent } from './user/user.component';
import { VeicleComponent } from './veicle/veicle.component';
import { RegisterService } from './register.service';
import { HttpClientModule } from '@angular/common/http';




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
    MatCardModule,
    MatSnackBarModule,
    MatFormFieldModule,
    HttpClientModule
  ],
  providers: [RegisterService]
})
export class RegisterModule { }
