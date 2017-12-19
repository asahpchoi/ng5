import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule, MatCheckboxModule, MatCardModule, MatInputModule} from '@angular/material';



import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AppRoutingModule }     from './app-routing.module';
import {GetRoomNameComponent } from './get-room-name/get-room-name.component';
import { SettingComponent } from './setting/setting.component';
import { GameComponent } from './game/game.component';
import { GameService } from './game.service';
import { UserService } from './user.service';


@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'my-app-name'), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatCardModule,MatExpansionModule,MatFormFieldModule,MatInputModule,
    MatSnackBarModule,
    MatToolbarModule,
    FormsModule,
    MatDialogModule,
    AppRoutingModule
  ],
  declarations: [ AppComponent, GetRoomNameComponent, SettingComponent,GameComponent],
  entryComponents:[GetRoomNameComponent],
  bootstrap: [ AppComponent ],
  providers: [GameService, UserService]
})
export class AppModule {}
