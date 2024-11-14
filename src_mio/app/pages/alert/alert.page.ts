import { Component, OnInit } from '@angular/core'; //metodo que permite implementar arg, variables al cargar el page
import { ApiusersService } from 'src/app/services/apiusers.service';
import { Router } from '@angular/router'; //metodo que permite redireccionar a otra pagina

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  usuarios:any[]=[];

  constructor(private apiUser: ApiusersService,
              private router:Router) { }

  ngOnInit() {
    this.Users();
  }

  Users(){
    this.apiUser.getUser().subscribe(
      datos => this.usuarios = datos,
    
    )
  }

  buscarUser(Obserbable:any){
    this.router.navigate(['/detalle'],
      {queryParams:{user: JSON.stringify(Obserbable)}} //metodo que permite enviar parametros en angular 18

    )

  }

}
