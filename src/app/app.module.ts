import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlePreviewComponent } from './components/article-preview/article-preview.component';
import { ArticlePreviewListComponent } from './components/article-preview-list/article-preview-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticlePreviewComponent,
    ArticlePreviewListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
