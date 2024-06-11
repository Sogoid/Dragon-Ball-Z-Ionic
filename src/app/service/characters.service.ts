import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CharacterListResponse, Characters } from '../model/characters';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private url = environment.apiUrl; // URL base da API, obtida a partir das variáveis de ambiente.

  // O HttpClient é injetado através do construtor para ser usado neste serviço.
  constructor(private httpClient: HttpClient) {}

  // Método para buscar todos os personagens. Retorna um Observable que emite um array de personagens.
  getCharacters(): Observable<Characters[]> {
    return this.httpClient.get<Characters[]>(`${this.url}/characters`); // Faz uma requisição GET para a URL da API.
  }

  // getCharacters(): Observable<CharacterListResponse<Characters[]>> {
  //     return this.httpClient.get<CharacterListResponse<Characters[]>>(`${this.url}/characters`);
  // }

  // Método para buscar os detalhes de um personagem específico. Recebe o ID do personagem como parâmetro.
  getCharactersDetail(userId: number): Observable<Characters[]> {
    // Faz a chamada à API com o ID convertido
    return this.httpClient.get<Characters[]>(
      `${this.url}/characters/${userId}`
    );
  }

  // Método para buscar uma página de personagens. Recebe o número da página e o limite de itens por página como parâmetros.
  getData(page: number, itemsPerPage: number) {
    return this.httpClient.get<CharacterListResponse>(
      `${this.url}/characters?page=${page}&limit=${itemsPerPage}`
    );
  }
}
