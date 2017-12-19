import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';      // Add this

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
