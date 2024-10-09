import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiusersService {
  apiUrl='https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }


  getUser():Observable<any>{
    //Any es un observable que lee cualquier tipo de datos
    
      return this.http.get<any>(this.apiUrl);
    }
}
