export interface Characters {
  id: number;
  name: string;
  ki: string;
  maxKi: string;
  race: string;
  gender: string;
  description: string;
  image: string;
  affiliation: string;
  deletedAt: null | string; // Pode ser null ou uma string
  originPlanet: {
    id: number;
    name: string;
    isDestroyed: boolean;
    description: string;
    image: string;
    deletedAt: null | string;
  };
  transformations: {
    id: number;
    name: string;
    image: string;
    ki: string;
    deletedAt: null | string;
  }[];
}

export interface CharacterListResponse {
  items: Characters[]; // Array de personagens
  meta: {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  };
  links: {
    first: string;
    previous: string;
    next: string;
    last: string;
  };
}

//*****************************************************************************
// Outra maneira de especificar a interface.
// ferramenta que facilita a criação https://transform.tools/json-to-typescript
// ****************************************************************************

// export interface Characters {
//   id: number;
//   name: string;
//   ki: string;
//   maxKi: string;
//   race: string;
//   gender: string;
//   description: string;
//   image: string;
//   affiliation: string;
//   deletedAt: null | string;
//   originPlanet: OriginPlanet;
//   transformations: Transformation[];
// }

// export interface OriginPlanet {
//   id: number;
//   name: string;
//   isDestroyed: boolean;
//   description: string;
//   image: string;
//   deletedAt: null | string;
// }

// export interface Transformation {
//   id: number;
//   name: string;
//   image: string;
//   ki: string;
//   deletedAt: null | string;
// }
