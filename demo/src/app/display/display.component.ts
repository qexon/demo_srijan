import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private detailService:DetailsService) { }
  details
  ngOnInit() {
    this.detailService.details.subscribe(res =>{
      this.details = res
    })
  }

}
