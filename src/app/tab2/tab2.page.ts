import { Component, OnInit } from '@angular/core';
import { ApiusersService } from '../services/apiusers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  usuarios: any[]=[]
  
  constructor(private apiuser: ApiusersService, 
             private route: Router) {}

  ngOnInit(){
    this.Users();
  }

  Users(){
    this.apiuser.getUsers().subscribe(
      datos => this.usuarios = datos,
    )
  }

  buscarUser(Observable:any){
    this.route.navigate(['/detalle'], 
    {queryParams:{user: JSON.stringify(Observable)}}) //enviamos objeto seleccionado

  }

}
