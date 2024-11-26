import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from 'src/interfaces/users';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { Administrador } from 'src/interfaces/administrador';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuario: any;



  constructor(private httpclient: HttpClient,
             private router: Router,

  ) { }

  // Obtener todos los usuarios
  getAllUsers(): Observable<Users[]>{
    return this.httpclient.get<Users[]>(`${environment.apiUrl}/usuarios`);
  }
  
  // Obtener usuario por emai
  getByEmail(email: any): Observable<Users> {
    return this.httpclient.get<Users>(`${environment.apiUrl}/usuarios/?email=${email}`);
  }

  getByEmailAdmin(email: any): Observable<Administrador> {
    return this.httpclient.get<Administrador>(`${environment.apiUrl}/administrador/?email=${email}`);
  }

  // Comprobar si está logueado
  IsLoggedIn(){
    return sessionStorage.getItem('username')!=null;
  }
 


  setSesionAdmin(administrador: any) {
    sessionStorage.setItem('id', administrador.id);
    sessionStorage.setItem('rut', administrador.rut);
    sessionStorage.setItem('username', administrador.username);
    sessionStorage.setItem('email', administrador.email);
    sessionStorage.setItem('password', administrador.password);
    return 'Sesión Iniciada '+ administrador.username;

     // Almacenar en sessionStorage

  }
  

  getSesionAdmin() {
    const getAdmin = {
      id: sessionStorage.getItem('id'),
      rut: sessionStorage.getItem('rut'),
      username: sessionStorage.getItem('username'),
      email: sessionStorage.getItem('email'),
      password: sessionStorage.getItem('password'),
    };

    return getAdmin;
  }
  

  cerrarSesionAdmin() {
    //  para limpiar todo
     sessionStorage.clear();
     this.router.navigateByUrl('/login', { replaceUrl: true });
     
     return 'Sesión Cerrada';
  }

  
}



  