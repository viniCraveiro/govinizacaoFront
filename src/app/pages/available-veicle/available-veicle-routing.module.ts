import { CommonModule } from '@angular/common';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvailableVeicleComponent } from './available-veicle.component';

const routes: Routes = [
  { path: '', component: AvailableVeicleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvailableVeicleRoutingModule { }
