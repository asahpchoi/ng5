import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule }     from './app-routing.module';
import { environment } from '../environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppMaterialModule } from './app-material/app-material.module';

import { AppComponent } from './app.component';

import {GetRoomNameComponent } from './get-room-name/get-room-name.component';
import { SettingComponent } from './setting/setting.component';
import { GameComponent } from './game/game.component';
import { GameService } from './game.service';
import { UserService } from './user.service';
import { SummaryComponent } from './summary/summary.component';



@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'my-app-name'), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    AppMaterialModule
  ],
  declarations: [ AppComponent, GetRoomNameComponent, SettingComponent,GameComponent, SummaryComponent],
  entryComponents:[GetRoomNameComponent],
  bootstrap: [ AppComponent ],
  providers: [ UserService, GameService ]
})
export class AppModule {}
