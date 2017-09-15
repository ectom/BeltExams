import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewComponent } from './new/new.component';
import { AnswerComponent } from './answer/answer.component';
import { ShowComponent } from './show/show.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: LoginComponent,
        children: []
    },
    {
        path: 'dashboard',
        pathMatch: 'full',
        component: DashboardComponent,
        children: []
    },
    {
        path: 'show/:id',
        pathMatch: 'full',
        component: ShowComponent,
        children: []
    },
    {
        path: 'answer',
        pathMatch: 'full',
        component: AnswerComponent,
        children: []
    },
    {
        path: 'new',
        pathMatch: 'full',
        component: NewComponent,
        children: []
    },
    {
        path: '**',
        component: NotFoundComponent
    },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
