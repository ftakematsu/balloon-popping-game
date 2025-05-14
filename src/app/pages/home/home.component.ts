import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-home',
  imports: [MatSelectModule, MatFormFieldModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  nivelJogo: string = '';

  constructor(
    private router: Router,
    private service: GameService
  ) {

  }

  iniciarJogo(): void {
    // O usuário não selecionou um nível
    if (this.nivelJogo.length==0) {
      Swal.fire({
        title: "Atenção",
        text: "Selecione o nível primeiro!",
        icon: 'warning'
      });
    }
    else {
      this.service.setNivel(this.nivelJogo);
      this.router.navigate(['/game']);
    }
  }

}
