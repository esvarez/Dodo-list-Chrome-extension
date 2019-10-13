import { NgModule } from '@angular/core';
import { NzSelectModule, NzIconModule, NzBreadCrumbModule, NzGridModule, NzListModule, NzButtonModule, NzDividerModule  } from  'ng-zorro-antd'

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { AccountsComponent } from 'src/app/components/accounts/accounts.component';
import { AccountResumeComponent } from 'src/app/components/account-resume/account-resume.component';
import { LastMovementsComponent } from 'src/app/components/last-movements/last-movements.component';

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
    NzDividerModule,
    NzBreadCrumbModule,
  ],
  declarations: [
    WelcomeComponent, 
    AccountsComponent,
    AccountResumeComponent,
    LastMovementsComponent
  ],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
