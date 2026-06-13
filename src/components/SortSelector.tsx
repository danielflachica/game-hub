import { Button, Menu, Portal } from "@chakra-ui/react";

const SortSelector = () => {
  const sortOptions = [
    {
      label: "Relevance",
      slug: "xxx",
    },
    {
      label: "Date added",
      slug: "added",
    },
    {
      label: "Name",
      slug: "name",
    },
    {
      label: "Release date",
      slug: "released",
    },
    {
      label: "Popularity",
      slug: "rating",
    },
    {
      label: "Average rating",
      slug: "metacritic",
    },
  ];
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button
          variant="outline"
          size="sm"
          _focus={{ boxShadow: "none", outline: "none" }}
        >
          Order by: Relevance
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {sortOptions.map((opt) => (
              <Menu.Item
                key={opt.slug}
                value={opt.slug}
                _hover={{ cursor: "pointer" }}
              >
                {opt.label}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
