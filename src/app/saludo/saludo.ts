import { Component } from '@angular/core';

@Component({
  selector: 'app-saludo',
  imports: [],
  templateUrl: './saludo.html',
  styleUrl: './saludo.css'
})
export class Saludo {
  mensaje: string = '¡Hola desde el componente hijo!';
}
