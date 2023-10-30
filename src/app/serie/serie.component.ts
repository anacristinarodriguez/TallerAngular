import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SerieService } from './serie.service';
import { dataSeries } from './dataSeries';


@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  series: Array<Serie> = [];
  promedio = 0;
  
  constructor(private serieService: SerieService) { }
  

  getSeries() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;  

      let totalTemporadas=0;
      for (let i = 0; i < series.length; i++) {
        totalTemporadas += series[i].seasons;
      }
      this.promedio = totalTemporadas/series.length;
    });
  }
  
  ngOnInit() {
    this.getSeries();
  }

}
