import { Injectable } from '@angular/core';
const FruitWorker = new (Worker)('./workers/fruit_worker', { type: 'module' });

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  private worker: Worker;

  constructor() {
    this.worker = FruitWorker;
  }

  public start() {
    this.worker.postMessage('');
  }

}
