import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';

@Component({
  selector: 'app-article-preview-list',
  templateUrl: './article-preview-list.component.html',
  styleUrls: ['./article-preview-list.component.scss']
})
export class ArticlePreviewListComponent implements OnInit {

  list: any[];

  constructor(private articlesServices: ArticlesService) { }

  ngOnInit() {
    this.list = this.articlesServices.getArticles();
  }

}
