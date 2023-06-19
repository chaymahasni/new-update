import { Type } from 'src/app/models/type.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const baseUrl = 'http://localhost:8081/api/types';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  constructor(private http: HttpClient) { }

  
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
  update(id: number, data: Type): Observable<Type> {
    return this.http.put<Type>(`${baseUrl}/${id}`, data);
  }

  get(id: any): Observable<Type> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  getAll(): Observable<Type[]> {
    return this.http.get<Type[]>(baseUrl);
  }
  create(data: any , id_type:any): Observable<any> {
    return this.http.post(`http://localhost:8081/api/addTypeAndTutorial`, data);
  }


  findByNom(nom: string): Observable<Type[]> {
    return this.http.get<Type[]>(`${baseUrl}?nom=${nom}`);
  }
  


  
}
