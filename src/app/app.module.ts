import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ArticlePreviewComponent } from './components/article-preview/article-preview.component';
import { ArticlePreviewListComponent } from './components/article-preview-list/article-preview-list.component';
import { ArticleComponent } from './components/article/article.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ResumePageComponent } from './components/resume-page/resume-page.component';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';


import { AuthGuard } from './guards/auth/auth.guard';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';






const appRoutes = [
  { path: 'articles', component: ArticlePreviewListComponent },
  { path: 'articles/:id', component: ArticleComponent },
  { path: '', component: HomePageComponent },
  { path: 'resume', component: ResumePageComponent },
  { path: 'add', component: AddArticleComponent },
  { path: 'admin', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ArticlePreviewComponent,
    ArticlePreviewListComponent,
    ArticleComponent,
    HomePageComponent,
    ResumePageComponent,
    AddArticleComponent,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
