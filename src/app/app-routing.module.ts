import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingComponent } from './setting/setting.component';
import { GameComponent } from './game/game.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  { path: 'setting/:roomId', component: SettingComponent },
  { path: 'game/:roomId', component: GameComponent },
  { path: 'summary/:roomId', component: SummaryComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
