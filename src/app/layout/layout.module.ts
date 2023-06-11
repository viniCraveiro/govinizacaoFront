import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';



@NgModule({
  declarations: [
    MenuComponent,
    LayoutComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule
  ]
})
export class LayoutModule { }
