import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from "../../services/articles.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  article: any;
  id: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private articlesService: ArticlesService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.article = this.articlesService.getArticles().filter((item) => item.id == this.id)[0];
  }

}
