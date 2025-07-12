import { Component } from '@angular/core';
import { Saludo } from './saludo/saludo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Saludo],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  titulo: string = 'Mi Primera App en Angular SUBO A github';
}

