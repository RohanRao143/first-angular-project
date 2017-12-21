import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import {CapitalizePipe} from '../capitalize.pipe';
import { SortInAlphabeticalOrderPipe } from './sort-in-alphabetical-order.pipe';

@NgModule({
  declarations: [
    CapitalizePipe,
    SortInAlphabeticalOrderPipe],
  imports: [CommonModule],
  exports: [CapitalizePipe, SortInAlphabeticalOrderPipe]
})

export class MainPipe { }
