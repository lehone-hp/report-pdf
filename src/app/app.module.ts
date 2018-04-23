import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AppComponent } from './app.component';
import { OrderComponent } from './components/order/order.component';
import { ReportComponent } from './components/report/report.component';
import { ReportDetailComponent } from './components/report/report-detail/report-detail.component';
import { ReportService } from './services/report.service';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    ReportComponent,
    ReportDetailComponent
  ],
  imports: [
    BrowserModule,
    PdfViewerModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ReportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
