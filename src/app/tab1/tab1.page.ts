import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ApidatosService } from '../services/apidatos.service';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  posteos:any[]=[]        //arreglo que contiene la información de json
  usuario:any;

  constructor(private menucontroller: MenuController,
    private apidatos: ApidatosService) {
  }

  ngOnInit(): void {
    this.usuario = sessionStorage.getItem('username');
    console.log(this.usuario);
  }
  mostrarMenu(){
    this.menucontroller.enable(true);
    this.menucontroller.open('first');
  }

  CargarApi(){
    this.apidatos.getPosts().subscribe(resp =>{
      console.log(resp);
    })

    this.apidatos.getPosts().subscribe(
      datos => this.posteos = datos       //convertimos lo recibido en un arreglo llamado posteos
    )
  }
}
