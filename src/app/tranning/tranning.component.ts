import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tranning',
  templateUrl: './tranning.component.html',
  styleUrls: ['./tranning.component.css']
})
export class TranningComponent implements OnInit {
  ongoingTraining = false;
  constructor() { }

  ngOnInit(): void {
  }

}
