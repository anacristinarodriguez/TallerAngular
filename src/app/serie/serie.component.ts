import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import {dataSeries} from './dataSeries';


@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  constructor() { }
  serie: Array<Serie> = [];

  getSerieList(): Array<Serie> {
    return dataSeries;
  }

  ngOnInit() {
    this.serie = this.getSerieList();
  }

}
