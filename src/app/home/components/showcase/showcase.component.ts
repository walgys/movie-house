import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../core/movie';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {
  movieList: Movie[] = [
    {
      imdb: 1234,
      title: 'The Avengers: End Game',
      img: '',
      plot: '',
      releasedate: '',
      cast: '',
      director: '',
      genre: '',
      showcase: '',
      theaters: ['Illinois', 'Washington', 'Vancouver', 'Toronto', 'Melbourne', 'Sydney']
    },
    {
      imdb: 1235,
      title: 'Star Wars: The Rise of Skywalker',
      img: '',
      plot: '',
      releasedate: '',
      cast: '',
      director: '',
      genre: '',
      showcase: '',
      theaters: ['Illinois', 'Washington', 'Vancouver', 'Toronto', 'Melbourne', 'Sydney']
    }
  ];

  constructor() {}

  ngOnInit() {}
}
