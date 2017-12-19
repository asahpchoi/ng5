import { Component,  Inject } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-get-room-name',
  templateUrl: './get-room-name.component.html',
  styleUrls: ['./get-room-name.component.css']
})

export class GetRoomNameComponent {
  constructor(
    public dialogRef: MatDialogRef<GetRoomNameComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    }
}
