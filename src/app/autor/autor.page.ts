import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.page.html',
  styleUrls: ['./autor.page.scss'],
})
export class AutorPage implements OnInit {

  constructor() { }

    // Se ejecuta una vez al inicializar la página
    ngOnInit() {
      console.log('ngOnInit AutorPage');
    }
  
    // Antes de que la página entre y sea visible
    ionViewWillEnter() {
      console.log('ionViewWillEnter AutorPage');
    }
  
    // Después de que la página esté completamente visible
    ionViewDidEnter() {
      console.log('ionViewDidEnter AutorPage');
    }
  
    // Antes de que la página deje de ser visible
    ionViewWillLeave() {
      console.log('ionViewWillLeave AutorPage');
    }
  
    // Después de que la página ha dejado de ser visible
    ionViewDidLeave() {
      console.log('ionViewDidLeave AutorPage');
    }
  
    // Antes de destruir la instancia de la página
    ngOnDestroy() {
      console.log('ngOnDestroy AutorPage');
    }
}