import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateWorkComponent } from './form/create-work/create-work.component';
import { WorkListComponent } from './form/work-list/work-list.component';
import { EditWorkComponent } from './form/edit-work/edit-work.component';
import { WorkDetailComponent } from './form/work-detail/work-detail.component';
import { EditUserResolver } from './form/edit-work/edit-work.resolver';
import { SendEmailComponent } from './send-email/send-email.component';


const routes: Routes = [
  {
    path: 'form/create-work',
    component: CreateWorkComponent,
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
    path: 'send-email',
    component: SendEmailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
