import { Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { HStack, Image, Link } from "@chakra-ui/react";

interface Props {
  genre: Genre;
  size: string;
  onSelectItem: (genre: Genre) => void;
}

const GenreItem = ({ genre, size, onSelectItem }: Props) => {
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
        {genre.name}
      </HStack>
    </Link>
  );
};

export default GenreItem;
