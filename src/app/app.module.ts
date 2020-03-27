import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { ApiService } from './services/api.service';
import { ToolsService } from './services/tools.service';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { SolutionsComponent } from './solutions/solutions.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    PostsComponent,
    UsersComponent,
    SolutionsComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    ApiService,
    ToolsService,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
