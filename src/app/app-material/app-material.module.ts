import { NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule, MatCheckboxModule, MatCardModule, MatInputModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTableModule} from '@angular/material/table';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
@NgModule({
  imports: [
    MatButtonModule, MatCheckboxModule, MatCardModule,MatExpansionModule,MatFormFieldModule,MatInputModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatDialogModule,
    MatGridListModule,
    MatChipsModule,
    MatIconModule,
    MatTabsModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatTableModule,
    MatSlideToggleModule,
  ],
  exports: [
    MatButtonModule, MatCheckboxModule, MatCardModule,MatExpansionModule,MatFormFieldModule,MatInputModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatDialogModule,
    MatGridListModule,
    MatChipsModule,
    MatIconModule,
    MatTabsModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatTableModule,
    MatSlideToggleModule,
  ],
  declarations: []
})
export class AppMaterialModule { }
