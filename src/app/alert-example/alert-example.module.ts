import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertExamplePageRoutingModule } from './alert-example-routing.module';

import { AlertExamplePage } from './alert-example.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlertExamplePageRoutingModule
  ],
  declarations: [AlertExamplePage]
})
export class AlertExamplePageModule {}
