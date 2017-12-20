import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';      // Add this
import { GameService } from '../game.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import {MatChipInputEvent} from '@angular/material';
import {ENTER, COMMA} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  currentGameItem;

  orderForm: FormGroup;
  items: any[] = [];

  constructor(
    private gs: GameService,
    private route: ActivatedRoute,
  ) {

    //console.log(gs.itemsCollection)
  }

  getKeys() {
    return Object.keys(this.currentGameItem.settings.marks);
  }
  ngOnInit() {
    this.getDetail();
  }

  update() {
    this.gs.updateGameItem(this.currentGameItem);
  }

  fillPlayers() {
    this.gs.fillPlayers(4);
  }

  changeUser(user) {
    console.log(user)
  }

  removeUser(user) {
    this.gs.removeUser(user);
  }
  getDetail() {
    //const id = this.route.snapshot.paramMap.get('roomId');
    //this.gs.enterRoom({id: id});
    this.gs.currentItem.subscribe(
      x =>
        {
          this.currentGameItem = x;
          console.log(this.currentGameItem)
          if(this.currentGameItem && !this.currentGameItem.settings) {
            this.currentGameItem.settings = {
              'marks': "0,0,4,8,16,32,64,128,192,256",
              'startAt': 3
            }
            this.gs.updateGameItem(this.currentGameItem);
        }
      }
    );
  }

}
