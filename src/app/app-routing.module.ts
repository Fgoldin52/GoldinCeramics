import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateWorkComponent } from './form/create-work/create-work.component';
import { WorkListComponent } from './form/work-list/work-list.component';
import { EditWorkComponent } from './form/edit-work/edit-work.component';
import { WorkDetailComponent } from './form/work-detail/work-detail.component';
import { EditUserResolver } from './form/edit-work/edit-work.resolver';
import { ViewWorkComponent } from './form/view-work/view-work.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { UserComponent } from './authentication/user/user.component';
import { AuthGuard } from './authentication/auth.guard';
import { UserResolver } from './authentication/user.resolver';
import { AboutComponent } from './about/about.component';
import { ModifyListComponent } from './form/modify-list/modify-list.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreateWorkComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'purchase',
    component: WorkListComponent
  },
  {
    path: 'form/edit-work',
    component: EditWorkComponent
  },
  {
    path: 'form/work-detail/:id',
    component: WorkDetailComponent,
    resolve: { data: EditUserResolver }
  },
  {
    path: 'view-work/:id',
    component: ViewWorkComponent,
    resolve: { data: EditUserResolver }
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'modify',
    component: ModifyListComponent
  },
  {
    path: 'user',
    component: UserComponent,
    resolve: { data: UserResolver }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
