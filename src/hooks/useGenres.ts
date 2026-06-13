import genres from "@/data/genres";

// https://api.rawg.io/docs/#operation/genres_list
export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count?: number;
  image_background: string;
}

const useGenres = () => ({
  data: genres,
  isLoading: false,
  error: null,
});

export default useGenres;
