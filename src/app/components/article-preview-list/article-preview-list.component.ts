import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article-preview-list',
  templateUrl: './article-preview-list.component.html',
  styleUrls: ['./article-preview-list.component.scss']
})
export class ArticlePreviewListComponent implements OnInit {

  list: Observable<any[]>;

  constructor(private articlesServices: ArticlesService) { }

  ngOnInit() {
    this.list = this.articlesServices.getArticles();
  }

}
