import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map, Subject } from 'rxjs';

import { Exercise } from './exercise.model';

@Injectable()
export class TrainingService {
  exerciseChanged = new Subject<Exercise>();
  exercisesChanged = new Subject<Exercise[]>();
  finishedExercisesChanged = new Subject<Exercise[]>();
  private availableExercises!: Exercise[];
  //  = [
  //  { id: 'crunches', name: 'Crunches', duration: 1, calories: 8 },
  //  { id: 'touch-toes', name: 'Touch Toes', duration: 2, calories: 15 },
  //  { id: 'side-lunges', name: 'Side Lunges', duration: 3, calories: 18 },
  //  { id: 'burpees', name: 'Burpees', duration: 4, calories: 8 }
  //];
  private runningExercise!: Exercise;
  private exercises: Exercise[] = [];

  constructor(private db: AngularFirestore) { }

  fetchAvailableExercises(): void {
    this.db.collection("availableExercises")
      .snapshotChanges().pipe(
        map(
          docArray => {
            return docArray.map(
              doc => {
                let data = <object>(typeof doc.payload.doc.data() === 'object' ? doc.payload.doc.data() : {})
                return <Exercise>{
                  id: doc.payload.doc.id,
                  ...data
                }
              })
          }
        )).subscribe((exercises: Exercise[]) => {
          this.availableExercises = exercises;
          this.exercisesChanged.next([ ...this.availableExercises ]);
        });
  }

  startExercise(selectedId: string) {
    this.runningExercise = <Exercise>this.availableExercises.find(
      ex => ex.id === selectedId
    );
    this.exerciseChanged.next({ ...this.runningExercise });
  }

  completeExercise() {
    this.addDataToDatabase({
      ...this.runningExercise,
      date: new Date(),
      state: 'completed'
    });
    this.runningExercise = <Exercise>{};
    this.exerciseChanged.next(<Exercise>{});
  }

  cancelExercise(progress: number) {
    this.addDataToDatabase({
      ...this.runningExercise,
      duration: this.runningExercise.duration * (progress / 100),
      calories: this.runningExercise.calories * (progress / 100),
      date: new Date(),
      state: 'cancelled'
    });
    this.runningExercise = <Exercise>{};
    this.exerciseChanged.next(<Exercise>{});
  }

  getRunningExercise() {
    return { ...this.runningExercise };
  }

  getCompletedOrCancelledExercises() {
    return this.exercises.slice();
  }
  fetchCompletedOrCancelledExercises() {
   this.db
      .collection('finishedExercises')
      .valueChanges()
      .subscribe(exercises => {
        this.finishedExercisesChanged.next(<Exercise[]>exercises);
      });
  }
  private addDataToDatabase(exercise: Exercise) {
    this.db.collection('finishedExercises').add(exercise);
  }
}
