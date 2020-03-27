import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostsComponent } from './posts/posts.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'solutions'
  },
  {
    path: 'solutions',
    component: SolutionsComponent,
  },
  {
    path: 'posts',
    component: PostsComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'solutions'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
