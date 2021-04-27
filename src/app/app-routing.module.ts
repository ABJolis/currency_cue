import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthPage } from './auth/auth.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'currencies',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    component: AuthPage,
    pathMatch: 'full',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'currencies',
    loadChildren: () => import('./currencies/currencies.module').then( m => m.CurrenciesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
