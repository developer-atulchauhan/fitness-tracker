import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { TrainingService } from './training.service';

@Component({
  selector: 'app-tranning',
  templateUrl: './tranning.component.html',
  styleUrls: ['./tranning.component.css']
})
export class TranningComponent implements OnInit {
  ongoingTraining = false;
  exerciseSubscription!: Subscription;

  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.exerciseSubscription = this.trainingService.exerciseChanged.subscribe(
      exercise => {
        if (exercise?.id) {
          this.ongoingTraining = true;
        } else {
          this.ongoingTraining = false;
        }
      }
    );
  }

}
