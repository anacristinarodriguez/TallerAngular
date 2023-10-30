import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SerieService } from './serie.service';


@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  series: Array<Serie> = [];
  
  constructor(private serieService: SerieService) { }
  

  getSeries(): void {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
      let totalTemporadas = 0;
  
      for (let i = 0; i < series.length; i++) {
        totalTemporadas += series[i].seasons;
      }
    });
  }

  ngOnInit() {
    this.getSeries();
  }

}
