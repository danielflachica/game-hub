import useData from "./useData";
import { Platform } from "./useGames";

// https://api.rawg.io/api/platforms/lists/parents
export interface PlatformParent {
  id: number;
  name: string;
  slug: string;
  platforms: Platform[];
}

const usePlatforms = () => useData<PlatformParent>("/platforms/lists/parents");

export default usePlatforms;
