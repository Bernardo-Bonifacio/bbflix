// Projeto BBFLIX

// Livro
export interface Volume {
  name?: string;
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: number[] | null;
  id?: number;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  release_date?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}

// VolumeInfo
export interface VolumeInfo {
  name: string;
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[] | null;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

// Item
export interface VolumeItem {
  volume: VolumeInfo;
}

// LivrosResultado
export interface VolumesResultado {
  page: number;
  results: VolumeInfo[] | null;
  total_pages: number;
  total_results: number;
}
