import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnumArrayPipe } from './enum-array.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EnumArrayPipe],
  exports: [EnumArrayPipe]
})
export class SharedModule { }
