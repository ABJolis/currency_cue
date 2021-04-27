import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ManagePage } from './manage.page';
import { AuthGuard } from '/Users/annej/CurrencyCue/src/app/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: ManagePage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagePageRoutingModule {}
