import { useEffect, useState } from "react";
import { Box, Grid, GridItem, HStack } from "@chakra-ui/react";
import { Genre } from "./hooks/useGenres";
import { PlatformParent } from "./hooks/usePlatforms";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: PlatformParent | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  useEffect(() => {
    const parts = [gameQuery.platform?.name, gameQuery.genre?.name].filter(
      Boolean
    );
    document.title =
      parts.length > 0 ? `GameHub: ${parts.join(" ")} Games` : "GameHub";
  }, [gameQuery]);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
        marginBottom={{ base: 4, lg: 6 }}
      >
        <GridItem area="nav">
          <NavBar
            onSearch={(searchText) => {
              setGameQuery({ ...gameQuery, searchText });
            }}
          />
        </GridItem>
        <GridItem hideBelow="lg" area="aside" paddingX={5}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => {
              setGameQuery({ ...gameQuery, genre });
            }}
          />
        </GridItem>
        <GridItem area="main">
          <Box paddingLeft={4} marginBottom={6}>
            <GameHeading gameQuery={gameQuery} />
            <HStack gap={4}>
              <PlatformSelector
                selectedPlatform={gameQuery.platform}
                onSelectPlatform={(platform) => {
                  setGameQuery({ ...gameQuery, platform });
                }}
              />
              <SortSelector
                selectedSortOrder={gameQuery.sortOrder}
                onSelectSortOrder={(sortOrder) => {
                  setGameQuery({ ...gameQuery, sortOrder });
                }}
              />
            </HStack>
          </Box>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
