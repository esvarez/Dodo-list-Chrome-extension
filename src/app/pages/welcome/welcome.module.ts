import { NgModule } from '@angular/core';
import { NzSelectModule, NzIconModule, NzBreadCrumbModule, NzGridModule, NzListModule, NzButtonModule  } from  'ng-zorro-antd'

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  imports: [
    WelcomeRoutingModule, 
    FormsModule, 
    ChartsModule,
    NzListModule,
    NzGridModule, 
    NzIconModule,
    NzButtonModule,
    NzSelectModule, 
    NzBreadCrumbModule,
  ],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
