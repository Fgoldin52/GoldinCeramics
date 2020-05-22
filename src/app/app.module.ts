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
import { AngularFireStorage } from '@angular/fire/storage';
import { FilterMenuComponent } from './form/filter-menu/filter-menu.component';
import { UpdateString } from './update-string.pipe';
import { ListComponent } from './form/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateWorkComponent,
    WorkListComponent,
    EditWorkComponent,
    WorkDetailComponent,
    SendEmailComponent,
    PracticeComponent,
    FilterMenuComponent,
    UpdateString,
    ListComponent
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
