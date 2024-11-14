import { Component, OnInit } from '@angular/core';
import { ApicrudService } from '../services/apicrud.service';
import { Router } from '@angular/router';
import { IAnimalito } from 'src/interfaces/Ianimalitos';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  mascota:IAnimalito={
    nombre:"",
    tipo:"",
    color:""
  }
  constructor(private apicrud: ApicrudService, 
              private router: Router) { }

  ngOnInit() {
  }

  CrearMascota(){
    this.apicrud.postMascotas(this.mascota).subscribe();
    this.router.navigate(['/tabs/tab3']);
  }

}
