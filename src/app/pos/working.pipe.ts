import { Pipe, PipeTransform } from '@angular/core';
import { Bartender } from '../bartender.model';

@Pipe({
  name: 'working',
  pure: false
})
export class WorkingPipe implements PipeTransform {

  transform(input: Bartender[], desiredWorking) {
    var output: Bartender[] = [];
    if (desiredWorking === "working") {

    for (var i =0; i < input.length; i++) {
      if (input[i].working === true) {
        output.push(input[i]);
      }
    }
    return output;
  } else if (desiredWorking === "notWorking") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].working === true) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
