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

import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCqM80hAt2AtpVgW_ImxkTkpZZ0eGA9hWA",
  authDomain: "angular-blog-9b7e8.firebaseapp.com",
  databaseURL: "https://angular-blog-9b7e8.firebaseio.com",
  storageBucket: "angular-blog-9b7e8.appspot.com"
};
firebase.initializeApp(firebaseConfig);
let database = 	firebase.database().ref();
console.log(database);



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
