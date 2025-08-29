import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HijoComponent } from '../hijo/hijo.component';

interface Producto{
  id:number;
  nombre:string;
  marca:string;
  precio:number;
  stock:number;
}

@Component({
  selector: 'app-productos',
  imports: [CommonModule, FormsModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})

export class ProductosComponent {

    productos:Producto[] = [
    {
      id:1,
      nombre: "Computadora",
      marca: "Dell",
      precio: 1000,
      stock: 10
    },
    {
      id:2,
      nombre: "Radio",
      marca: "Sony",
      precio: 800,
      stock: 5
    },
    {
      id:3,
      nombre: "Impresora",
      marca: "Lenovo",
      precio: 600,
      stock: 8
    }
  ]

mostrarProductos=true;

  mostrar=() => {
    this.mostrarProductos=!this.mostrarProductos
}

nuevoProducto ={

  nombre:'',
  marca: '',
  precio:0,
  stock:0
}

agregar=()=>{
  this.productos.push({
    id: this.productos.length + 1,
    nombre: this.nuevoProducto.nombre,
    marca: this.nuevoProducto.marca,
    precio: this.nuevoProducto.precio,
    stock: this.nuevoProducto.stock
  });

  this.nuevoProducto = { nombre: '', marca: '', precio: 0, stock: 0 };

}


}
