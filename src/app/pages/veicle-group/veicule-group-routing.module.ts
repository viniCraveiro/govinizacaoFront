import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VeicleGroupComponent } from './veicle-group.component';

const routes: Routes = [
  {path: '', component: VeicleGroupComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeiculeGroupRoutingModule { }
