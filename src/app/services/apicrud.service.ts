import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Users } from 'src/interfaces/users';
import { Administrador } from 'src/interfaces/administrador';

@Injectable({
  providedIn: 'root'
})
export class ApicrudService {

  constructor(private httpClient: HttpClient,) { }
  


  getUsers():Observable<Users[]>{
    return this.httpClient.get<Users[]>(`${environment.apiUrl}/usuarios`); //me devuelve un arreglo

  }

  postUser(newUsuario: Users):Observable<Users>{
    return this.httpClient.post<Users>(`${environment.apiUrl}/usuarios`, newUsuario);
  }

  postAdmin(newAdministrador: Administrador):Observable<Administrador>{
    return this.httpClient.post<Administrador>(`${environment.apiUrl}/administrador`, newAdministrador);
  }


 // Método para obtener un usuario específico por su id
 getUserById(id: string): Observable<Users> {
  return this.httpClient.get<Users>(`${environment.apiUrl}/usuarios/${id}`);
}

getAdminById(id: string): Observable<Administrador> {
  return this.httpClient.get<Administrador>(`${environment.apiUrl}/administrador/${id}`);
}

 // Actualizar usuario por ID
 putUserById(id: string, usuario: any): Observable<Users> {
  return this.httpClient.put<Users>(`${environment.apiUrl}/usuarios/${id}`, usuario);
}

putAdminById(id: string, Administrador: any): Observable<Administrador> {
  return this.httpClient.put<Administrador>(`${environment.apiUrl}/administrador/${id}`, Administrador);
}

deleteUserById(id: string): Observable<void> {
  return this.httpClient.delete<void>(`${environment.apiUrl}/usuarios/${id}`);
}

deleteAdminById(id: string): Observable<void> {
  return this.httpClient.delete<void>(`${environment.apiUrl}/administrador/${id}`);
}

 
}
