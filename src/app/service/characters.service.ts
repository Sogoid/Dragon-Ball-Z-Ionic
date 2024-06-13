import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Characters, PaginationCharacter } from '../model/characters';
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
    let url = `${this.url}/characters?page=${page}&limit=${limit}`;
    return this.httpClient.get<PaginationCharacter>(url);
  }

  getCharactersName(name: string): Observable<PaginationCharacter> {
    let dataName = `${this.url}/characters?name=${name}`;
    return this.httpClient.get<PaginationCharacter>(dataName);
  }

  getCharacterById(id: number): Observable<PaginationCharacter> {
    let url = `${this.url}/characters/${id}`;
    return this.httpClient.get<PaginationCharacter>(url);
  }

  get filteredItems(): PaginationCharacter[] {
    return this._filteredItems;
  }

  set filteredItems(value: PaginationCharacter[]) {
    this._filteredItems = value;
  }
}
