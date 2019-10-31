import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticlesService } from '../../services/articles.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent implements OnInit {

  articles: Observable<any[]>;
  title: string;
  content: string;
  image: string;

  constructor(private db: ArticlesService) {
      this.articles = db.getArticles();
   }

  ngOnInit() {
  }

  onSubmit() {
    this.db.pushArticles({title: this.title, content: this.content});
  }

}
