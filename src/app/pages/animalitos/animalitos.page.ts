import { Component, OnInit } from '@angular/core';
import { ApicrudService } from 'src/app/services/apicrud.service';
import { IAnimalitos } from 'src/interfaces/IAnimalitos';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-animalitos',
  templateUrl: './animalitos.page.html',
  styleUrls: ['./animalitos.page.scss'],
})
export class AnimalitosPage implements OnInit {  //OnInit carga la info al momento de abrir

  mascotas: IAnimalitos[]=[];


  constructor(private apicrud: ApicrudService, private router: Router) { }

  ngOnInit() {
    this.apicrud.getMascotas().subscribe(data =>{
      this.mascotas = data;
    })
  }

  agregarAnimalito(){
    this.router.navigate(['/agregar']); //ir al page agregar
  }

  buscarMascota(Observable:any){
    this.router.navigate(['/detalle-mascota'], 
      {queryParams: {mascota:JSON.stringify(Observable)}}
    )
  }
}
