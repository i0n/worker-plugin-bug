import { Injectable } from '@angular/core';
const AnimalWorker = new (Worker)('./workers/animals_worker', { type: 'module' });

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  private worker: Worker;

  constructor() {
    this.worker = AnimalWorker;
  }

  public start() {
    this.worker.postMessage('');
  }

}
