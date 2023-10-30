import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerieComponent } from '.serie-list/serie-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SerieComponent],
  exports: [SerieComponent]
})
export class SerieModule { }
