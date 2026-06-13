import { Platform } from "./useGames";
import platforms from "@/data/platforms";

// https://api.rawg.io/api/platforms/lists/parents
export interface PlatformParent {
  id: number;
  name: string;
  slug: string;
  platforms: Platform[];
}

const usePlatforms = () => ({
  data: platforms,
  isLoading: false,
  error: null,
});

export default usePlatforms;
