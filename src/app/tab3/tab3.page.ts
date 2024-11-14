import { Component, OnInit } from '@angular/core';
import { ApicrudService } from '../services/apicrud.service';
import { IAnimalitos } from 'src/interfaces/Ianimalitos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  mascotas: IAnimalitos[]=[];

  constructor(private apicrud: ApicrudService,
              private router: Router) {}

  ngOnInit() {
    this.apicrud.getMascotas().subscribe(data=>{
      this.mascotas=data;
    })
  }

  buscarMascota(Observable:any){
    this.router.navigate(['/detalle-mascota'],
      {queryParams:{mascota: JSON.stringify(Observable)}}
    )
  }

  agregarMascota(){
    this.router.navigate(['/agregar']);
  }

}
