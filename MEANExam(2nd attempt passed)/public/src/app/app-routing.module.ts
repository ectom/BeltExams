import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateComponent } from './create/create.component';
import { ShowComponent } from './show/show.component';

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
        path: 'create',
        pathMatch: 'full',
        component: CreateComponent,
        children: []
    },
    {
        path: 'show/:id',
        pathMatch: 'full',
        component: ShowComponent,
        children: []
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
