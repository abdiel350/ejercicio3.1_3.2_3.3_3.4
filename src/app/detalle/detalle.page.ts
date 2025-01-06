import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as datospeli from '../videoclub/peliculas.json';

interface Movie {
  id: number;
  title: string;
  director: string;
  year: string;
  synopsis: string;
  poster: string;
  
}

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  id: number = 0;
  movie: Movie | undefined; // Declara el tipo de movie

  datapeli: Movie[] = (datospeli as any).default.datapeli; 

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    const idParam = this.activatedRoute.snapshot.paramMap.get('id');
    if (idParam !== null) {
      this.id = +idParam;
      console.log('ID de la película:', this.id);
      this.movie = this.datapeli.find((movie: Movie) => movie.id == this.id);
      
      if (!this.movie) {
        console.error('No se encontró ninguna película con el ID proporcionado.');
      }

    } else {
      console.error('ID de película no proporcionado en la ruta.');
    }
  }
}
