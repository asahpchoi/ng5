import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';      // Add this
import { GameService } from '../game.service';
import {MatTableDataSource} from '@angular/material';

import * as SVG from 'svg.js';
import * as c3 from 'c3';
import * as crossfilter from 'crossfilter2';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  currentGameItem;
  displayedColumns;
  dataSource;
  ELEMENT_DATA: Element[];

  constructor(
    private gs: GameService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getDetail();
  }

  getDetail() {
    this.gs.currentItem.subscribe(
        x =>
          {
            this.currentGameItem = x;
          }
      );
  }

  getUserSummary(uid) {
    let games = this.currentGameItem.games;
    let rs = games.map(
      x => x.result.filter(
        r => r.id == uid
      )
    ).reduce(
      (total, val) => {
        let amt = val[0]?val[0].amt:0;
        return (amt * 1 + total);
      }, 0);

    return rs;
  }

  getUserName(uid) {
    let players = this.currentGameItem.players;

    return players.filter(
      p => p.id == uid
    )[0].name;
  }

  getResults() {
    let games = this.currentGameItem.games;
    let results = [];
    let players = this.currentGameItem.players;
    let playerRecords = [];

    games.forEach(
      x => {
        let obj = {};

        players.forEach(
          p => {
            let m = x.result.filter(
              r => r.id == p.id
            )

            let amt = (m.length == 0) ? 0 : m[0].amt;

            obj[p.id] = amt;
          }
        )
        results.push(obj);
      }
    );


    players.forEach(
      p => {
        let arr = results.map(r => r[p.id])
        arr = this.totalTransform(arr);

        playerRecords.push([p.name, ...arr]);
        console.log(playerRecords)
      }
    );


    //['position', 'name', 'weight', 'symbol'];
   this.displayedColumns = players.map(x=>x.id);
   this.dataSource = new MatTableDataSource<any>(results);

   var chart = c3.generate({
    bindto: '#chart',
    data: {
      columns: playerRecords
    }
  });

  }

  totalTransform(arr) {
    let total = 0;
    let newArr = [];

    arr.forEach(
      function(m) {
        total += m;
        newArr.push(total);
      }
    );
    return newArr;
  }

}
