import { Component } from '@angular/core';
import * as datospeli from './peliculas.json';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-videoclub',
  templateUrl: './videoclub.page.html',
  styleUrls: ['./videoclub.page.scss'],
})
export class VideoclubPage{

  datapeli: any = (datospeli as any).default.datapeli;
  
  constructor(private navCtrl: NavController, private router: Router) {}

  verPaginaDetalle(id: number) {
    this.router.navigate(['/detalle', id]);
  }
  
 // Se ejecuta una vez al inicializar la página
 ngOnInit() {
  console.log('ngOnInit VideoclubPage');
}

// Antes de que la página entre y sea visible
ionViewWillEnter() {
  console.log('ionViewWillEnter VideoclubPage');
}

// Después de que la página esté completamente visible
ionViewDidEnter() {
  console.log('ionViewDidEnter VideoclubPage');
}

// Antes de que la página deje de ser visible
ionViewWillLeave() {
  console.log('ionViewWillLeave VideoclubPage');
}

// Después de que la página ha dejado de ser visible
ionViewDidLeave() {
  console.log('ionViewDidLeave VideoclubPage');
}

// Antes de destruir la instancia de la página
ngOnDestroy() {
  console.log('ngOnDestroy VideoclubPage');
}
 
}

