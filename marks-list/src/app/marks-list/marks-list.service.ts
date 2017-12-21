import { Injectable } from '@angular/core';
import {Results} from '../mock-result';
import {StudentResults} from '../studentresults';

@Injectable()
export class MarksListService {
topperMarks() {
  const totalMarks = Results.map(function(result) {
    return result.marks.English + result.marks.Science + result.marks.Maths;
  });
  const max = totalMarks.reduce(function (a, b) {
    return Math.max(a, b);
  });
  return max;
}
  constructor() { }

}
