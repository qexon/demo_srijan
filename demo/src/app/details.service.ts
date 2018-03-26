import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DetailsService {
  details:Subject<any> = new Subject();
  constructor() { 


  }
  broadcastObjectChange(text:any) {
    this.details.next(text);
    
  }
}
