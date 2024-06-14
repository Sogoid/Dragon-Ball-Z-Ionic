import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PaginationPlanets } from '../model/planets';

@Injectable({
  providedIn: 'root',
})
export class PlanetsService {
  private url = `${environment.apiUrl}/planets`; // URL base da API, obtida a partir das variáveis de ambiente.

  // O HttpClient é injetado através do construtor para ser usado neste serviço.
  constructor(private httpClient: HttpClient) {}

  getPlanetsDefault(): Observable<PaginationPlanets> {
    return this.httpClient.get<PaginationPlanets>(this.url);
  }

  getPlanets(page: number, limit: number): Observable<PaginationPlanets> {
    return this.httpClient.get<PaginationPlanets>(
      `${this.url}?page=${page}&limit=${limit}`
    );
  }

  getPlanetsById(id: number): Observable<PaginationPlanets> {
    return this.httpClient.get<PaginationPlanets>(`${this.url}/${id}`);
  }
}
// INICIO DO RESOLVER

export const PlanetResolveDefaultList: ResolveFn<PaginationPlanets> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(PlanetsService).getPlanetsDefault();
};

export const PlanetResolvePagination: ResolveFn<PaginationPlanets> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  let parametros = route.queryParams;
  return inject(PlanetsService).getPlanets(
    Number(parametros['page']),
    Number(parametros['limit'])
  );
};

export const PlanetsResolveByid: ResolveFn<PaginationPlanets> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(PlanetsService).getPlanetsById(
    Number(route.paramMap.get('id')!)
  );
};
