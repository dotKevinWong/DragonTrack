import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertExamplePage } from './alert-example.page';

const routes: Routes = [
  {
    path: '',
    component: AlertExamplePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlertExamplePageRoutingModule {}
