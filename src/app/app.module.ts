import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { ArticlePreviewComponent } from './components/article-preview/article-preview.component';
import { ArticlePreviewListComponent } from './components/article-preview-list/article-preview-list.component';
import { ArticleComponent } from './components/article/article.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ResumePageComponent } from './components/resume-page/resume-page.component';


const appRoutes = [
  { path: 'articles', component: ArticlePreviewListComponent },
  { path: 'articles/:id', component: ArticleComponent },
  { path: '', component: HomePageComponent },
  { path: 'resume', component: ResumePageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ArticlePreviewComponent,
    ArticlePreviewListComponent,
    ArticleComponent,
    HomePageComponent,
    ResumePageComponent
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
