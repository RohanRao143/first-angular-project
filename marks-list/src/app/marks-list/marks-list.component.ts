import { Component, OnInit } from '@angular/core';
import {Results} from '../mock-result';
import {CapitalizePipe} from '../capitalize.pipe';
import {MarksListService} from './marks-list.service';

@Component({
  selector: 'app-marks-list',
  templateUrl: './marks-list.component.html',
  styleUrls: ['./marks-list.component.css'],
  providers: [MarksListService]
})
export class MarksListComponent implements OnInit {
  results = Results;
  maxMarks = 50;
  minMarks = 20;

  constructor(private marksService: MarksListService) { }
  topper = this.marksService.topperMarks();

  ngOnInit() {
  }

}
