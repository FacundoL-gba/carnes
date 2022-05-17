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
        oferta: '$390 Por KG',
        cantidad: 'Mínimo de compra: 1KG',
        imagen: 'https://statics.dinoonline.com.ar/imagenes/large_460x460/3300039_l.jpg'
      },
      {
        nombre:'Tapa De Asado',
        oferta: '$1.100 Por KG',
        cantidad: 'Mínimo de compra: 1KG',
        imagen: 'https://raffe.com.ar/wp-content/uploads/2019/06/Tapa-Asado-Raffe.jpg'
      },
      {
        nombre:'Cuadril de Cerdo',
        oferta: '$795 Por KG',
        cantidad: 'Mínimo de compra: 1KG',
        imagen: 'https://jumboargentina.vtexassets.com/arquivos/ids/666115/Cuadril-De-Cerdo-1-31587.jpg?v=637672522427230000'
      },
      {
        nombre:'Milanesas',
        oferta: '$950 Por KG',
        cantidad: 'Mínimo de compra: 1KG',
        imagen: 'https://d1on8qs0xdu5jz.cloudfront.net/webapp/images/productos/b/0000000000/741.jpg'
      },
      {
        nombre:'Fiambres',
        oferta: '$695 Combo Por Unidad',
        cantidad: 'Mínimo de compra: 1U',
        imagen: 'http://cdn.shopify.com/s/files/1/0003/6801/7418/products/Picadas5-1118-prev_1024x.jpg?v=1604956841'
      },
      {
        nombre:'Asado Con Hueso',
        oferta: '$1.200 Por KG',
        cantidad: 'Mínimo de compra: 1KG',
        imagen: 'https://d1on8qs0xdu5jz.cloudfront.net/webapp/images/productos/b/0000002000/2336.jpg'
      }
      ]
    }
    

  ngOnInit(): void {
  }

}
