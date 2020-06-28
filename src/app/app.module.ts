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
  MatDividerModule,
  MatIconModule,
  MatToolbarModule,
  MatMenuModule
} from '@angular/material';
import { AngularFirestore, AngularFirestoreModule } from 'angularfire2/firestore';
import { EditUserResolver } from './form/edit-work/edit-work.resolver';
import { PracticeComponent } from './practice/practice.component';
import { AngularFireStorage, AngularFireStorageModule } from '@angular/fire/storage';
import { FilterMenuComponent } from './form/filter-menu/filter-menu.component';
import { UpdateString } from './update-string.pipe';
import { ListComponent } from './form/list/list.component';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ViewWorkComponent } from './form/view-work/view-work.component';
import { ShareButtonModule } from '@ngx-share/button';
import { ShareButtonsModule } from '@ngx-share/buttons';
import { ShareModule } from '@ngx-share/core';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { UserComponent } from './authentication/user/user.component';
import { AuthGuard } from './authentication/auth.guard';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from './authentication/user.service';
import { AuthService } from './authentication/auth.service';
import { UserResolver } from './authentication/user.resolver';
import { AboutComponent } from './about/about.component';

import { AngularFireAuthModule } from 'angularfire2/auth';

import { PathLocationStrategy, LocationStrategy } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CreateWorkComponent,
    WorkListComponent,
    EditWorkComponent,
    WorkDetailComponent,
    PracticeComponent,
    FilterMenuComponent,
    UpdateString,
    ListComponent,
    ViewWorkComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    AboutComponent
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
    MatDividerModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    InfiniteScrollModule,
    ShareButtonModule,
    ShareButtonsModule,
    ShareModule,
    AngularFireStorageModule
  ],
  providers: [AngularFirestore,
    EditUserResolver,
    AngularFireStorage,
    UpdateString,
    AngularFireAuth,
    AuthGuard,
    UserService,
    AuthService,
    UserResolver,
    AngularFirestoreModule,
    AngularFireModule,
    { provide: LocationStrategy, useClass: PathLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
