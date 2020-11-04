import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon'; 

@NgModule({
  declarations: [],
  imports: [
    //Core
    CommonModule,
    RouterModule,
    //Material
    MatButtonModule,
    MatTableModule,
    MatIconModule
  ],
  exports: [
    //Core
    CommonModule,
    RouterModule,
    //Material
    MatButtonModule,
    MatTableModule,
    MatIconModule
  ]
})
export class SharedModule { }
