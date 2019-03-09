import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { GlobalServiceService } from '../global-service.service';

@Component({
  selector: 'app-details-component',
  templateUrl: './details-component.component.html',
  styleUrls: ['./details-component.component.css']
})
export class DetailsComponentComponent implements OnInit {

  selectedRecord:any;
  constructor(private route:Router,private service:GlobalServiceService) { }

  ngOnInit() {
  }

  goBack(){
    this.route.navigateByUrl("home");
  }
}
