import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/last';
import 'rxjs/add/operator/delay';
import {MatSnackBar} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { GetRoomNameComponent } from './get-room-name/get-room-name.component';
import { RouterOutlet } from '@angular/router';
import { GameService } from './game.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  currentGameItem;
  constructor(
    private gs: GameService,
    private us: UserService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {
    this.gs.currentItem.subscribe(
      x => this.currentGameItem = x
    );
  }

  openSnackBar(message: string) {
    console.log(message);
    this.snackBar.open(message, 'OK', {
      duration: 2000,
    });
  }

  pickGame(item) {
    this.gs.enterRoom(item);
  }

  updateGame() {
    this.gs.updateGameItem(this.currentGameItem);
  }

  exitRoom() {
    this.gs.exitRoom();
  }

  createGame() {
    let dialogRef = this.dialog.open(GetRoomNameComponent, {
      data: {
        roomName: ''
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.gs.addRoom(result);
    });
  }
}
