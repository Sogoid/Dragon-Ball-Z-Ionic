import { Characters } from './characters';

export interface Planets {
  id?: number;
  name: string;
  isDestroyed: boolean;
  description: string;
  image: string;
  deletedAt: null;
  characters: Characters;
}

export interface PlanetsMeta {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}
export interface Link {
  first: string;
  previous: string;
  next: string;
  last: string;
}

export interface PaginationPlanets {
  items: Planets[];
  meta: PlanetsMeta;
  links: Link;
}
