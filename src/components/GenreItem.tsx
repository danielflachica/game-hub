import { Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { HStack, Image, Link, Text } from "@chakra-ui/react";

interface Props {
  genre: Genre;
  size: string;
  isSelected?: boolean;
  onSelectItem: (genre: Genre) => void;
}

const GenreItem = ({
  genre,
  size,
  isSelected = false,
  onSelectItem,
}: Props) => {
  return (
    <Link
      href="#"
      onClick={(event) => {
        event.preventDefault();
        onSelectItem(genre);
      }}
      _focus={{ boxShadow: "none", outline: "none" }}
    >
      <HStack>
        <Image
          boxSize={size}
          borderRadius={8}
          src={getCroppedImageUrl(genre.image_background)}
          alt={genre.slug}
        />
        <Text fontWeight={isSelected ? "bold" : "normal"}>{genre.name}</Text>
      </HStack>
    </Link>
  );
};

export default GenreItem;
