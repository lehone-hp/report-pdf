import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import {ReportDetailComponent} from './components/report/report-detail/report-detail.component';

const routes: Routes = [
  { path: 'report/report-detail/:uuid', component: ReportDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule { }
