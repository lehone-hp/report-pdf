import { Component, OnInit } from '@angular/core';
import {Report} from '../../models/report';
import {ReportService} from '../../services/report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  results: Result;
  reports: Report[];
  selectedReport: Report;
  filter: Filter = {fromDate: null, toDate: null, status: ''};

  constructor(private reportService: ReportService) { }

  ngOnInit() {
    this.getReports();
  }


  getReports(): void {
    this.reportService.getReports(this.filter)
      .subscribe(results => {this.results = results;
      console.log(this.results.results); });
  }
  selectReport(report: Report): void {
    this.selectedReport = report;
    console.log(this.selectedReport);
  }

}

export class Result {
  results: Report[];
}

export class Filter {
  fromDate: Date;
  toDate: Date;
  status: string;
}

