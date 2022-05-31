import { Component, OnInit } from '@angular/core';
import { Ofertas } from 'src/app/models/ofertas';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  public ofertas: Ofertas [] = []
  constructor(){ 
    this.ofertas = [{
        nombre:'Pata Y Muslo',
        precioa:'$390',
        oferta: '$300 Por KG',
        cantidad: 'Mínimo de compra: 1KG',
        imagen: 'https://www.res.com.ar/media/catalog/product/cache/fa1c797dc73bed0459232d1404671b73/p/a/pata-muslo.jpg'
      },
      {
        nombre:'Tapa De Asado',
        precioa:'$1.100',
        oferta: '$900 Por KG',
        cantidad: 'Mínimo de compra: 1KG',
        imagen: 'https://www.res.com.ar/media/catalog/product/cache/fa1c797dc73bed0459232d1404671b73/t/a/tapa-de-asado.jpg'
      },
      {
        nombre:'Cuadril de Cerdo',
        precioa:'$795',
        oferta: '$700 Por KG',
        cantidad: 'Mínimo de compra: 1KG',
        imagen: 'https://www.res.com.ar/media/catalog/product/cache/fa1c797dc73bed0459232d1404671b73/c/u/cuadril-cerdo_1.jpg'
      },
      {
        nombre:'Milanesa De Carne',
        precioa:'$950',
        oferta: '$800 Por KG',
        cantidad: 'Mínimo de compra: 1KG',
        imagen: 'https://www.res.com.ar/media/catalog/product/cache/fa1c797dc73bed0459232d1404671b73/m/i/milanesas-carne.jpg'
      },
      {
        nombre:'Picada Grande',
        precioa:'$695',
        oferta: '$600 Combo Por Unidad',
        cantidad: 'Mínimo de compra: 1U',
        imagen: 'https://www.res.com.ar/media/catalog/product/cache/fa1c797dc73bed0459232d1404671b73/p/i/picada-grande.jpg'
      },
      {
        nombre:'Asado',
        precioa:'$1.200',
        oferta: '$1.000 Por KG',
        cantidad: 'Mínimo de compra: 1KG',
        imagen: 'https://www.res.com.ar/media/catalog/product/cache/fa1c797dc73bed0459232d1404671b73/a/s/asado-new.jpg'
      }
      ]
    }
    

  ngOnInit(): void {
  }

}
