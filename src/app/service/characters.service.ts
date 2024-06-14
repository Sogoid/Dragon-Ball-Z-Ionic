import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PaginationCharacter } from '../model/characters';
import { PaginationPlanets } from '../model/planets';
import { PlanetsService } from './planets.service';
@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private url = environment.apiUrl; // URL base da API, obtida a partir das variáveis de ambiente.

  private _filteredItems: PaginationCharacter[] = [];

  // O HttpClient é injetado através do construtor para ser usado neste serviço.
  constructor(private httpClient: HttpClient) {}

  getCharactersDefault(): Observable<PaginationCharacter> {
    return this.httpClient.get<PaginationCharacter>(`${this.url}/characters`);
  }

  getCharacters(page: number, limit: number): Observable<PaginationCharacter> {
    return this.httpClient.get<PaginationCharacter>(
      `${this.url}/characters?page=${page}&limit=${limit}`
    );
  }

  getCharactersName(name: string): Observable<PaginationCharacter> {
    return this.httpClient.get<PaginationCharacter>(
      `${this.url}/characters?name=${name}`
    );
  }

  getCharacterById(id: number): Observable<PaginationCharacter> {
    return this.httpClient.get<PaginationCharacter>(
      `${this.url}/characters/${id}`
    );
  }

  get filteredItems(): PaginationCharacter[] {
    return this._filteredItems;
  }

  set filteredItems(value: PaginationCharacter[]) {
    this._filteredItems = value;
  }
}

