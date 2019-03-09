import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { HomeTableDataSource } from './home-table-datasource';
import { Router } from '@angular/router';
import { GlobalServiceService } from '../global-service.service';

@Component({
  selector: 'app-home-table',
  templateUrl: './home-table.component.html',
  styleUrls: ['./home-table.component.css']
})
export class HomeTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: HomeTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'category','description','reportedBy','assignedTo'];

  constructor(private route:Router,
              private service: GlobalServiceService){

  }
  ngOnInit() {
    this.dataSource = new HomeTableDataSource(this.paginator, this.sort);
  }

  show(record){
    this.service.selectedRecord=record;
    this.route.navigateByUrl("record");
  }
}
