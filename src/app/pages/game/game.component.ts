import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-game',
  imports: [],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit {
  nivel: string = '';
  constructor(private service: GameService) {

  }

  ngOnInit(): void {
    this.nivel = this.service.getNivel();
    Swal.fire("Você selecionou o nível " +this.nivel)
  }
  
}
