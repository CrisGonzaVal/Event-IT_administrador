import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IAnimalitos } from 'src/interfaces/IAnimalitos';

@Component({
  selector: 'app-detalle-mascota',
  templateUrl: './detalle-mascota.page.html',
  styleUrls: ['./detalle-mascota.page.scss'],
})
export class DetalleMascotaPage implements OnInit {

  unaMascota: any;

  constructor(private activated: ActivatedRoute,
              private router: Router) { 
                //recuperar objeto recibido por url
                this.activated.queryParams.subscribe(param => {
                  this.unaMascota = JSON.parse (param['mascota']);
                })
              }

  ngOnInit() {
  }

  actualizarMascota(Observable:IAnimalitos){
    this.router.navigate(['/actualizar', this.unaMascota.id],
      {queryParams: {mascota:JSON.stringify(Observable)}})
  }

}
