import { Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { HStack, Image, Text } from "@chakra-ui/react";

interface Props {
  genre: Genre;
  size: string;
}

const GenreItem = ({ genre, size }: Props) => {
  return (
    <HStack>
      <Image
        boxSize={size}
        borderRadius={8}
        src={getCroppedImageUrl(genre.image_background)}
        alt={genre.slug}
      />
      <Text fontSize="lg">{genre.name}</Text>
    </HStack>
  );
};

export default GenreItem;
