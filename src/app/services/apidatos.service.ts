import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //accede a cualquier api rest
import { Observable } from 'rxjs'; //para observar datos del json

@Injectable({
  providedIn: 'root'
})
export class ApidatosService {

  apiUrl='https://jsonplaceholder.typicode.com/posts'

  constructor(private httpclient: HttpClient) { }


  //peticion get a un recurso rest
  getPost():Observable<any>{
  //Any es un observable que lee cualquier tipo de datos
  
    return this.httpclient.get<any>(this.apiUrl);
  }
}
