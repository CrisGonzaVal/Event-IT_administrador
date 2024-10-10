import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAnimalito, IAnimalitos } from 'src/interfaces/IAnimalitos';

@Injectable({
  providedIn: 'root'
})
export class ApicrudService {

  constructor(private httpClient: HttpClient) { }


  getMascotas():Observable<IAnimalitos[]>{
    return this.httpClient.get<IAnimalitos[]>(`${environment.apiUrl}/mascotas`); //me devuelve un arreglo

  }

  postMascotas(newAnimalito: IAnimalito):Observable<IAnimalito>{
    return this.httpClient.post<IAnimalito>(`${environment.apiUrl}/mascotas`, newAnimalito); //me devuelve un arreglo
  }

  putMascotas(animalito:any):Observable<IAnimalitos>{
    return this.httpClient.put<IAnimalitos>(`${environment.apiUrl}/mascotas/${animalito.id}`, animalito);
 }

 deleteMascotas(animalito:any):Observable<IAnimalitos>{
  return this.httpClient.delete<IAnimalitos>(`${environment.apiUrl}/mascotas/${animalito.id}`);
 }
}
