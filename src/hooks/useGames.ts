import { GameQuery } from "@/App";
import useData from "./useData";
import { Genre } from "./useGenres";
import { PlatformParent } from "./usePlatforms";

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

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
      },
    },
    [gameQuery]
  );

export default useGames;
