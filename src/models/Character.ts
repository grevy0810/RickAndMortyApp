export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  type: string;
  origin: Location;
  location: Location;
  episode: string[];
  url: string;
  created: string;
}

interface Location {
  name: string;
  url: string;
}