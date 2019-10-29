import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class ArticlesService {


  constructor(public db: AngularFireDatabase) { }

  

  getArticles() {
    return this.db.list("articles").valueChanges();
  }

  pushArticles(info) {
    this.db.list('articles').push(info);
  }
  
}

