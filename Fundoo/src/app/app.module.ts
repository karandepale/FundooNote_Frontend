import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Components/login/login.component';


import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { RegisterComponent } from './Components/register/register.component';

import { MatDialogModule } from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import {NgIf, NgFor} from '@angular/common';
import {MatListModule} from '@angular/material/list';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FormsModule } from '@angular/forms';

import { AuthService } from './Services/AUTH/auth.service';
// GOOGLE LOGIN
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { DashBoardComponent } from './Components/dash-board/dash-board.component';
import { DisplayNotesComponent } from './Components/display-notes/display-notes.component';
import { CraeteNoteComponent } from './Components/craete-note/craete-note.component';
import { CollabComponent } from './Components/collab/collab.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashBoardComponent,
    DisplayNotesComponent,
    CraeteNoteComponent,
    CollabComponent
  ],
  imports: [
    FormsModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatListModule,
    NgIf, NgFor,
    MatMenuModule,
    MatDialogModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule , 
    MatIconModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('262275583605-kunacf1c4h49hh7t06tb0q8hr0tjk1it.apps.googleusercontent.com'),
          },
        ],
      } as SocialAuthServiceConfig,
    },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
