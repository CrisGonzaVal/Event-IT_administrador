import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAnimalito, IAnimalitos } from 'src/interfaces/Ianimalitos';

@Injectable({
  providedIn: 'root'
})
export class ApicrudService {

  constructor(private httpclient: HttpClient) { }

  getMascotas():Observable<IAnimalitos[]>{
    return this.httpclient.get<IAnimalitos[]>(`${environment.apiUrl}/mascotas`);
  }

  postMascotas(newMascota: IAnimalito):Observable<IAnimalito>{
    return this.httpclient.post<IAnimalito>(`${environment.apiUrl}/mascotas`, newMascota);
  }

  getMascotaID(id:number):Observable<IAnimalitos>{
    return this.httpclient.get<IAnimalitos>(`${environment.apiUrl}/mascotas/?id=${id}`);
  }

  putMascotas(animalito:any):Observable<IAnimalitos>{
    return this.httpclient.put<IAnimalitos>(`${environment.apiUrl}/mascotas/${animalito.id}`, animalito);
  }

  deleteMascota(animalito:any):Observable<IAnimalitos>{
    return this.httpclient.delete<IAnimalitos>(`${environment.apiUrl}/mascotas/${animalito.id}`);
  }
  
}
