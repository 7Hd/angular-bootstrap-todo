import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnumArrayPipe } from './enum-array.pipe';
import { TodoDataService } from './todo-data.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EnumArrayPipe],
  exports: [EnumArrayPipe],
  providers: [TodoDataService]
})
export class SharedModule { }
