import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { HStack, Image, Text, List } from "@chakra-ui/react";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();

  return (
    <List.Root>
      {data.map((genre) => (
        <List.Item key={genre.id} paddingY="5px" listStyleType="none">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
              alt={genre.slug}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
