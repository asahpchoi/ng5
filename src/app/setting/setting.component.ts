import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';      // Add this

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.getDetail();
  }

  getDetail() {
    const id = this.route.snapshot.paramMap.get('roomId');
    console.log(id);
  }

}
