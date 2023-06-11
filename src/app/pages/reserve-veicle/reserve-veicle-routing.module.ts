import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReserveVeicleComponent } from './reserve-veicle.component';

const routes: Routes = [
  { path: '', component: ReserveVeicleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReserveVeicleRoutingModule { }
