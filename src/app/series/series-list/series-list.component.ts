// src/app/series/series-list/series-list.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Serie {
  id: number;
  name: string;
  channel: string;
  seasons: number;
  description: string;
  webpage: string;
  poster: string;
}

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',

})
export class SeriesListComponent implements OnInit {
  series: Serie[] = [];
  averageSeasons: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<Serie[]>('https://gist.githubusercontent.com/josejbocanegra/8490b48961a69dcd2bfd8a360256d0db/raw/34ff30dbc32392a69eb0e08453a3fc975a3890f0/series.json')
      .subscribe((data) => {
        this.series = data;
        this.calculateAverageSeasons();
      });
  }

  calculateAverageSeasons(): void {
    const totalSeasons = this.series.reduce((sum, serie) => sum + serie.seasons, 0);
    this.averageSeasons = totalSeasons / this.series.length;
  }
}
