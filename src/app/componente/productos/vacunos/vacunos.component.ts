import { Component, OnInit } from '@angular/core';
import { Pagina } from 'src/app/models/paginas';

@Component({
  selector: 'app-vacunos',
  templateUrl: './vacunos.component.html',
  styleUrls: ['./vacunos.component.css']
})
export class VacunosComponent implements OnInit {

  public ofertas: Pagina [] = []
  constructor(){ 
    this.ofertas = [{
        nombre:'Vacio',
        precioa:'$1.690',
        cantidad: 'Mínimo de compra: 1KG',
        imagen: 'https://www.res.com.ar/media/catalog/product/cache/fa1c797dc73bed0459232d1404671b73/v/a/vacio_2.jpg'
      },
      {
        nombre:'Asado',
        precioa:'$1.200',
        cantidad: 'Mínimo de compra: 1KG',
        imagen: 'https://www.res.com.ar/media/catalog/product/cache/fa1c797dc73bed0459232d1404671b73/a/s/asado-new.jpg'
      },
      {
        nombre:'Bife Ancho',
        precioa:'$1.390',
        cantidad: 'Mínimo de compra: 1KG',
        imagen: 'https://www.res.com.ar/media/catalog/product/cache/fa1c797dc73bed0459232d1404671b73/c/u/cuadril-cerdo_1.jpg'
      },
      {
        nombre:'Milanesa De Carne',
        precioa:'$1.100',
        cantidad: 'Mínimo de compra: 0.5KG',
        imagen: 'https://www.res.com.ar/media/catalog/product/cache/fa1c797dc73bed0459232d1404671b73/m/i/milanesas-carne.jpg'
      },
      {
        nombre:'Colita De Cuadril',
        precioa:'$2.100',
        cantidad: 'Mínimo de compra: 1U',
        imagen: 'https://www.res.com.ar/media/catalog/product/cache/fa1c797dc73bed0459232d1404671b73/c/o/colita_4.jpg'
      },
      {
        nombre:'Matambre',
        precioa:'$1.100',
        cantidad: 'Mínimo de compra: 1U',
        imagen: 'https://www.res.com.ar/media/catalog/product/cache/fa1c797dc73bed0459232d1404671b73/p/e/peceto_5.jpg'
      },
      {
        nombre:'Peceto',
        precioa:'$2.100',
        cantidad: 'Mínimo de compra: 1KG',
        imagen: 'https://www.res.com.ar/media/catalog/product/cache/fa1c797dc73bed0459232d1404671b73/a/s/asado-new.jpg'
      },
      {
        nombre:'Tapa De Asado',
        precioa:'$1.100',
        cantidad: 'Mínimo de compra: 1U',
        imagen: 'https://www.res.com.ar/media/catalog/product/cache/fa1c797dc73bed0459232d1404671b73/t/a/tapa-de-asado.jpg'
      },
      {
        nombre:'Hamburguesas De Carne',
        precioa:'$1.490',
        cantidad: 'Mínimo de compra: 1KG',
        imagen: 'https://www.res.com.ar/media/catalog/product/cache/fa1c797dc73bed0459232d1404671b73/h/a/hamburguesas-de-carne.jpg'
      },
      {
        nombre:'Nalga',
        precioa:'$1.850',
        cantidad: 'Mínimo de compra: 0.5KG',
        imagen: 'https://www.res.com.ar/media/catalog/product/cache/fa1c797dc73bed0459232d1404671b73/n/a/nalga_1.jpg'
      },
      {
        nombre:'Milanesa De Peceto',
        precioa:'$1.600',
        cantidad: 'Mínimo de compra: 0.5KG',
        imagen: 'https://www.res.com.ar/media/catalog/product/cache/fa1c797dc73bed0459232d1404671b73/m/i/milanesas-peceto.jpg'
      }
      ]
    }

  ngOnInit(): void {
  }

}
