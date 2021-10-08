import { Component, OnInit } from '@angular/core';
import { RestauranteService } from '../../services/restaurante/restaurante.service';
import { Restaurante } from 'src/app/models/restaurante';

@Component({
  selector: 'app-home-res',
  templateUrl: './home-res.component.html',
  styleUrls: ['./home-res.component.css']
})
export class HomeResComponent implements OnInit {
  restaurantes: Restaurante[] = [];
  constructor(public restauranteService: RestauranteService) { }

  ngOnInit(): void {
    console.log('Inicio vista')
    this.loadRestaurante()
  }
  loadRestaurante(){
    this.restauranteService.getAllRestaurante().subscribe((restaurantes: Restaurante[]) => {
      console.log(restaurantes)
      this.restaurantes = restaurantes
    })
  }

}
