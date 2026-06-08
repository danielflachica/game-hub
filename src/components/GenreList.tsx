import useGenres from "@/hooks/useGenres";
import { HStack, Image, VStack, Text } from "@chakra-ui/react";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();

  return (
    <VStack align="left">
      {data.map((genre) => (
        <HStack key={genre.id}>
          <Image
            src={genre.image_background}
            height={5}
            width={5}
            borderRadius={4}
            alt={genre.slug}
          />
          <Text>{genre.name}</Text>
        </HStack>
      ))}
    </VStack>
  );
};

export default GenreList;
