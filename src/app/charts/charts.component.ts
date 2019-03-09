import { Component, OnInit } from '@angular/core';

const data = {
  "chart": {
    "caption": "Android Distribution for our app",
    "subcaption": "For all users in 2017",
    "showpercentvalues": "1",
    "defaultcenterlabel": "Android Distribution",
    "aligncaptionwithcanvas": "0",
    "captionpadding": "0",
    "decimals": "1",
    "plottooltext": "<b>$percentValue</b> of our Android users are on <b>$label</b>",
    "centerlabel": "# Users: $value",
    "theme": "fusion"
  },
  "data": [
    {
      "label": "Ice Cream Sandwich",
      "value": "1000"
    },
    {
      "label": "Jelly Bean",
      "value": "5300"
    },
    {
      "label": "Kitkat",
      "value": "10500"
    },
    {
      "label": "Lollipop",
      "value": "18900"
    },
    {
      "label": "Marshmallow",
      "value": "17904"
    }
  ]
};


@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  
  width = 600;
  height = 350;
  type = 'doughnut2d';
  dataFormat = 'json';
  dataSource = data;

  constructor() { }

  ngOnInit() {
  }

}
