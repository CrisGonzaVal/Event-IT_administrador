import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  usuario:any;

  constructor(private activated : ActivatedRoute,
              private router:Router) {  //expresion lamda
                this.activated.queryParams.subscribe(params =>{
                  this.usuario = JSON.parse(params['user']); //llamada user de alert.page.ts
                })
               }

  ngOnInit() {
  }

  regresar(){
    this.router.navigate(['/alert'])
  }

}
