import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private nivel: string = '';

  setNivel(nivel: string) {
    this.nivel = nivel;
  }

  getNivel() {
    return this.nivel;
  }

  constructor() { }
}
