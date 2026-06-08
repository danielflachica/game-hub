import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// https://api.rawg.io/docs/#operation/games_list
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = () => useData<Game>("/games");

export default useGames;
