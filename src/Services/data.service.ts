import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IStudent } from './Student';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private DataSource = 'https://localhost:7061/api/MemberMasters/GetList';

  private data: any = './assets/data/StudentData.json';
  public static getStudent = () => { };
  
  constructor(private httpClient: HttpClient) {}

  public SendGetRequest(): Observable<IStudent[]> {
    return this.httpClient.get<IStudent[]>(this.data);
  }
}
