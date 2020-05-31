import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateWorkComponent } from './form/create-work/create-work.component';
import { WorkListComponent } from './form/work-list/work-list.component';
import { EditWorkComponent } from './form/edit-work/edit-work.component';
import { WorkDetailComponent } from './form/work-detail/work-detail.component';
import { EditUserResolver } from './form/edit-work/edit-work.resolver';
import { SendEmailComponent } from './send-email/send-email.component';
import { PracticeComponent } from './practice/practice.component';
import { ViewWorkComponent } from './form/view-work/view-work.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { UserComponent } from './authentication/user/user.component';
import { AuthGuard } from './authentication/auth.guard';
import { UserResolver } from './authentication/user.resolver';

const routes: Routes = [
  {
    path: 'form/create-work',
    component: CreateWorkComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'form/work-list',
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
    path: 'form/view-work/:id',
    component: ViewWorkComponent,
    resolve: { data: EditUserResolver }
  },
  {
    path: 'send-email',
    component: SendEmailComponent
  },
  {
    path: 'practice',
    component: PracticeComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AuthGuard]
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
