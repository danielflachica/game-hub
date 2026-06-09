import useData from "./useData";

// https://api.rawg.io/api/platforms/lists/parents
interface Platform {
  id: number;
  name: string;
  slug: string;
}

interface PlatformParent {
  id: number;
  name: string;
  slug: string;
  platforms: Platform[];
}

const usePlatforms = () => useData<PlatformParent>("/platforms/lists/parents");

export default usePlatforms;
