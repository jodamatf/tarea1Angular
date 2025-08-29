import { ProductosComponent } from './productos/productos.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HijoComponent } from "./hijo/hijo.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductosComponent, CommonModule, HijoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'tarea1';

  date = new Date()

}
