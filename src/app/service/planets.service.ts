import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PaginationPlanets } from '../model/planets';

@Injectable({
  providedIn: 'root',
})
export class PlanetsService {
  private url = environment.apiUrl; // URL base da API, obtida a partir das variáveis de ambiente.

  // O HttpClient é injetado através do construtor para ser usado neste serviço.
  constructor(private httpClient: HttpClient) {}

  getPlanetsDefault(): Observable<PaginationPlanets> {
    return this.httpClient.get<PaginationPlanets>(`${this.url}/planets`);
  }

  getPlanets(page: number, limit: number): Observable<PaginationPlanets> {
    let url = `${this.url}/planets?page=${page}&limit=${limit}`;
    return this.httpClient.get<PaginationPlanets>(url);
  }

  getPlanetsById(id: number): Observable<PaginationPlanets> {
    let url = `${this.url}/planets/${id}`;
    return this.httpClient.get<PaginationPlanets>(url);
  }
}
