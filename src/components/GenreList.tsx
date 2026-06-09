import useGenres, { Genre } from "@/hooks/useGenres";
import { List } from "@chakra-ui/react";
import GenreItem from "./GenreItem";
import GenreItemSkeleton from "./GenreItemSkeleton";

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  const skeletons = Array.from({ length: 20 }, (_, i) => i + 1);
  const sizes = {
    padding: "5px",
    image: "32px",
  };

  if (error) return null;

  return (
    <List.Root>
      {isLoading &&
        skeletons.map((skeleton) => (
          <List.Item
            key={skeleton}
            paddingY={sizes.padding}
            listStyleType="none"
          >
            <GenreItemSkeleton size={sizes.image} />
          </List.Item>
        ))}
      {data.map((genre) => (
        <List.Item key={genre.id} paddingY={sizes.padding} listStyleType="none">
          <GenreItem
            genre={genre}
            size={sizes.image}
            isSelected={genre.id === selectedGenre?.id}
            onSelectItem={(genre) => {
              onSelectGenre(genre);
            }}
          />
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
