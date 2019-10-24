import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor() { }

  articles = [
    {
      id: 1,
      title: 'article1',
      content: 'some content',
      image: 'https://fakeimg.pl/350x200/ff0000,128/000,255',
      date: '24.10.2019'
    },
    {
      id: 2,
      title: 'article2',
      content: 'some content 2',
      image: 'https://fakeimg.pl/350x200/ffee00,128/000,255',
      date: '24.10.2019'
    },
    {
      id: 3,
      title: 'article3',
      content: 'some content 3',
      image: 'https://fakeimg.pl/350x200/ffee20,128/000,255',
      date: '24.10.2019'
    }
  ]

  getArticles() {
    return this.articles;
  }
  
}
