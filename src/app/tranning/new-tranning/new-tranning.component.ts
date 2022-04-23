import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-new-tranning',
  templateUrl: './new-tranning.component.html',
  styleUrls: ['./new-tranning.component.css']
})
export class NewTranningComponent implements OnInit {
  //exerciseSubscription!: Subscription;
  @Output() trainingStart = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }
  onStartTraining() {
    this.trainingStart.emit();
  }
}
