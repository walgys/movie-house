import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../core/movie';
import { Observable } from 'rxjs';

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
      img:
        'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
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
      img:
        'https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SX300.jpg',
      plot: '',
      releasedate: '',
      cast: '',
      director: '',
      genre: '',
      showcase: '',
      theaters: ['Illinois', 'Washington', 'Vancouver', 'Toronto', 'Melbourne', 'Sydney']
    },
    {
      imdb: 1236,
      title: 'Dolittle',
      img:
        'https://m.media-amazon.com/images/M/MV5BMDNkODA5ZGQtODczOS00OTQxLThhMTItMjk0ZmNhMDM0YjNmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg',
      plot: '',
      releasedate: '',
      cast: '',
      director: '',
      genre: '',
      showcase: '',
      theaters: ['Illinois', 'Washington', 'Vancouver', 'Toronto', 'Melbourne', 'Sydney']
    },
    {
      imdb: 1237,
      title: 'Jumanji: The Next Level',
      img:
        'https://m.media-amazon.com/images/M/MV5BOTVjMmFiMDUtOWQ4My00YzhmLWE3MzEtODM1NDFjMWEwZTRkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
      plot: '',
      releasedate: '',
      cast: '',
      director: '',
      genre: '',
      showcase: '',
      theaters: ['Illinois', 'Washington', 'Vancouver', 'Toronto', 'Melbourne', 'Sydney']
    },
    {
      imdb: 1238,
      title: 'The Angry Birds Movie 2',
      img:
        'https://m.media-amazon.com/images/M/MV5BYzdkNGJhNzQtMjY1OC00MDI3LTk0ZDUtNzU0MGZiY2YwZGUxXkEyXkFqcGdeQXVyNzMxNjQxMTk@._V1_SX300.jpg',
      plot: '',
      releasedate: '',
      cast: '',
      director: '',
      genre: '',
      showcase: '',
      theaters: ['Illinois', 'Washington', 'Vancouver', 'Toronto', 'Melbourne', 'Sydney']
    },
    {
      imdb: 1239,
      title: 'Jojo Rabbit',
      img:
        'https://m.media-amazon.com/images/M/MV5BZjU0Yzk2MzEtMjAzYy00MzY0LTg2YmItM2RkNzdkY2ZhN2JkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SX300.jpg',
      plot: '',
      releasedate: '',
      cast: '',
      director: '',
      genre: '',
      showcase: '',
      theaters: ['Illinois', 'Washington', 'Vancouver', 'Toronto', 'Melbourne', 'Sydney']
    }
  ];
  delta = 0;
  $panValue = 0;
  constructor() {}

  ngOnInit() {}

  onPan(event) {}
  onPanEnd(event) {
    if (event.deltaX > 100) {
      this.$panValue += 300;
    }
    if (event.deltaX < -100) {
      this.$panValue += -300;
    }
  }
}
