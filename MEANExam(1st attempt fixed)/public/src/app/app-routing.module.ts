import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewComponent } from './new/new.component';
import { ShowComponent } from './show/show.component';
import { AnswerComponent } from './answer/answer.component';


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
        component: DashboardComponent
    },
    {
        path: 'newQuestion',
        pathMatch: 'full',
        component: NewComponent
    },
    {
        path: 'show/:id',
        component: ShowComponent
    },
    {
        path: 'answer/:id',
        component: AnswerComponent
    },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
