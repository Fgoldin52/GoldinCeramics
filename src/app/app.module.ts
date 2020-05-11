import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateWorkComponent } from './form/create-work/create-work.component';
import { WorkListComponent } from './form/work-list/work-list.component';
import { EditWorkComponent } from './form/edit-work/edit-work.component';
import { WorkDetailComponent } from './form/work-detail/work-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatSelectModule,
  MatSidenavModule,
  MatIconModule,
  MatIcon
} from '@angular/material';
import { AngularFirestore } from 'angularfire2/firestore';
import { EditUserResolver } from './form/edit-work/edit-work.resolver';
import { SendEmailComponent } from './send-email/send-email.component';
import { PracticeComponent } from './practice/practice.component';
import { VasesListComponent } from './form/vases-list/vases-list.component';
import { DreidelsListComponent } from './form/dreidels-list/dreidels-list.component';
import { AngularFireStorage } from '@angular/fire/storage';
import { FilterMenuComponent } from './form/filter-menu/filter-menu.component';
import { PlatesListComponent } from './form/plates-list/plates-list.component';
import { CandlesticksListComponent } from './form/candlesticks-list/candlesticks-list.component';
import { UpdateString } from './update-string.pipe';
import { ListComponent } from './form/list/list.component';
import { MezuzahsListComponent } from './form/mezuzahs-list/mezuzahs-list.component';
import { MirrorsListComponent } from './form/mirrors-list/mirrors-list.component';
import { Under100Component } from './form/under100/under100.component';
import { Under250Component } from './form/under250/under250.component';
import { Under500Component } from './form/under500/under500.component';
import { Over500Component } from './form/over500/over500.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateWorkComponent,
    WorkListComponent,
    EditWorkComponent,
    WorkDetailComponent,
    SendEmailComponent,
    PracticeComponent,
    VasesListComponent,
    DreidelsListComponent,
    FilterMenuComponent,
    PlatesListComponent,
    CandlesticksListComponent,
    UpdateString,
    ListComponent,
    MezuzahsListComponent,
    MirrorsListComponent,
    Under100Component,
    Under250Component,
    Under500Component,
    Over500Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSidenavModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [AngularFirestore, EditUserResolver, AngularFireStorage, UpdateString],
  bootstrap: [AppComponent]
})
export class AppModule { }
