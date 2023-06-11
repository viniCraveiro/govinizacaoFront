import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { VeicleComponent } from './veicle/veicle.component';

const routes: Routes = [
  { path: 'usuario', component: UserComponent },
  { path: 'veiculo', component: VeicleComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
