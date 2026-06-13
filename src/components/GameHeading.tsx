import { GameQuery } from "@/App";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;

  return (
    <Heading
      as="h1"
      fontSize={{ base: "2xl", md: "3xl", lg: "4xl", xl: "5xl" }}
      fontWeight="bold"
      marginBottom={5}
    >
      {heading}
    </Heading>
  );
};

export default GameHeading;
