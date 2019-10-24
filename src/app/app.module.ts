import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlePreviewComponent } from './components/article-preview/article-preview.component';
import { ArticlePreviewListComponent } from './components/article-preview-list/article-preview-list.component';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './components/article/article.component';


const appRoutes = [
  { path: '', component: ArticlePreviewListComponent },
  { path: 'articles/:id', component: ArticleComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ArticlePreviewComponent,
    ArticlePreviewListComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
