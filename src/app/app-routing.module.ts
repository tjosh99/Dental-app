import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',redirectTo: 'login',pathMatch: 'full'},
  {path: 'folder/:id',loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)},
  {path: 'login',loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)},
  {path: 'register',loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)},
  {
    path: 'appointment',
    loadChildren: () => import('./pages/appointment/appointment.module').then( m => m.AppointmentPageModule)
  },
  {
    path: 'patient',
    loadChildren: () => import('./pages/patient/patient.module').then( m => m.PatientPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
