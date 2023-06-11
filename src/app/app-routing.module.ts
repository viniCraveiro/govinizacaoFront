import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'home', loadChildren: () => import('./pages/veicle-group/veicule-group.module').then(r => r.VeiculeGroupModule) },
      { path: 'agendamento', loadChildren: () => import('./pages/reserve-veicle/reserve-veicle.module').then(r => r.ReserveVeicleModule) },
      { path: 'reserva', loadChildren: () => import('./pages/available-veicle/available-veicle.module').then(r => r.AvailableVeicleModule) },
    ]
  },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(r => r.LoginModule) },
  // { path: '**' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
