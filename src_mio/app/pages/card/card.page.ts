import { Component, OnInit } from '@angular/core';
import { ApidatosService } from 'src/app/services/apidatos.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
  
})
export class CardPage implements OnInit {

  posteos:any[]=[];

  constructor(private apidatos: ApidatosService) { }

  ngOnInit() {
  }

  cargarPost(){
    this.apidatos.getPost().subscribe(resp =>{
      console.log(resp);
    })


    //mostrar datos en forma de arreglo
    this.apidatos.getPost().subscribe(
      datos => this.posteos=datos,    //almacenamos en un arreglo el parametro recibir posteos
    )
  
 }
}
