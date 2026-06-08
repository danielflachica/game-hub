import useData from "./useData";

// https://api.rawg.io/docs/#operation/genres_list
export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count?: number;
  image_background: string;
}

const useGenres = () => useData<Genre>("/genres");

export default useGenres;
