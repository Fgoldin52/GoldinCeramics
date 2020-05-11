import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateWorkComponent } from './form/create-work/create-work.component';
import { WorkListComponent } from './form/work-list/work-list.component';
import { EditWorkComponent } from './form/edit-work/edit-work.component';
import { WorkDetailComponent } from './form/work-detail/work-detail.component';
import { EditUserResolver } from './form/edit-work/edit-work.resolver';
import { SendEmailComponent } from './send-email/send-email.component';
import { PracticeComponent } from './practice/practice.component';
import { VasesListComponent } from './form/vases-list/vases-list.component';
import { DreidelsListComponent } from './form/dreidels-list/dreidels-list.component';
import { PlatesListComponent } from './form/plates-list/plates-list.component';
import { CandlesticksListComponent } from './form/candlesticks-list/candlesticks-list.component';
import { MezuzahsListComponent } from './form/mezuzahs-list/mezuzahs-list.component';
import { MirrorsListComponent } from './form/mirrors-list/mirrors-list.component';
import { Under100Component } from './form/under100/under100.component';
import { Under250Component } from './form/under250/under250.component';
import { Under500Component } from './form/under500/under500.component';
import { Over500Component } from './form/over500/over500.component';


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
  },
  {
    path: 'practice',
    component: PracticeComponent
  },
  {
    path: 'form/vases-list',
    component: VasesListComponent
  },
  {
    path: 'form/dreidels-list',
    component: DreidelsListComponent
  },
  {
    path: 'form/plates-list',
    component: PlatesListComponent
  },
  {
    path: 'form/candlesticks-list',
    component: CandlesticksListComponent
  },
  {
    path: 'form/mezuzahs-list',
    component: MezuzahsListComponent
  },
  {
    path: 'form/mirrors-list',
    component: MirrorsListComponent
  },
  {
    path: 'form/under100',
    component: Under100Component
  },
  {
    path: 'form/under250',
    component: Under250Component
  },
  {
    path: 'form/under500',
    component: Under500Component
  },
  {
    path: 'form/over500',
    component: Over500Component
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
