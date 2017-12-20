import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';      // Add this
import { GameService } from '../game.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import {MatChipInputEvent} from '@angular/material';
import {ENTER, COMMA} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit {
  currentGameItem;
  game = {
    fan : 0,
    winner : '',
    loser : '',
    self : false,
    id: ''
  };

  getArray(num) {
    return [1,2,3,4,5,6,7,8,9,10];//Array(num).map((x,i) => i + 1));
  }

  constructor(
    private route: ActivatedRoute,
    private gs: GameService
    ) {
  }

  addGame() {
    let base;// : number = this.currentGameItem.settings.marks.split(',')[this.game.fan - 1];
    let result = [];

    var arr = this.currentGameItem.settings.marks.split(',');
    base = arr[this.game.fan - 1];
    if(this.game.self) {
      result.push({
        id: this.game.winner,
        amt: base / 2 * 3
      })
      this.currentGameItem.players.filter(
        x => x.id != this.game.winner
      ).map(
        x => {
          result.push({
            id: x.id,
            amt: - base / 2
          })
        }
      );
    }
    else {
      result.push({
        id: this.game.winner,
        amt: base * 1
      })
      result.push({
        id: this.game.loser,
        amt: -base
      })
    }
    this.game.id = this.currentGameItem.games.length;
    let gameResult = {...this.game, result};
    this.currentGameItem.games.push(gameResult);
    this.gs.updateGameItem(this.currentGameItem);
    this.game = {
      fan : 0,
      winner : '',
      loser : '',
      self : false,
      id: ''
    };
    //console.log(gameResult);
  }

  canSave() {
    console.log(this.game)
    return this.game.winner && this.game.fan && (this.game.self == true|| this.game.loser);
  }

  getUsers() {
    return this.currentGameItem.players;
  }

  ngOnInit() {
    this.getDetail();
  }

  getDetail() {
    this.gs.currentItem.subscribe(
      x =>
        {
          this.currentGameItem = x;
          if(this.currentGameItem && !this.currentGameItem.games) {
            this.currentGameItem.games = [];
            this.gs.updateGameItem(this.currentGameItem);
        }
      }
    );
  }
}
