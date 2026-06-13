import { Button, Menu, Portal } from "@chakra-ui/react";

interface Props {
  selectedSortOrder: string;
  onSelectSortOrder: (sortOrder: string) => void;
}

const SortSelector = ({ selectedSortOrder, onSelectSortOrder }: Props) => {
  const sortOptions = [
    {
      label: "Relevance",
      value: "", // Default sort order
    },
    {
      label: "Date added",
      value: "-added", // DESC Order
    },
    {
      label: "Name",
      value: "name",
    },
    {
      label: "Release date",
      value: "-released",
    },
    {
      label: "Popularity",
      value: "-metacritic",
    },
    {
      label: "Average rating",
      value: "-rating",
    },
  ];
  const currentSortOrder = sortOptions.find(
    (opt) => opt.value === selectedSortOrder
  );

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button
          variant="outline"
          size="sm"
          _focus={{ boxShadow: "none", outline: "none" }}
        >
          Order by: {currentSortOrder?.label || "Relevance"}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {sortOptions.map((opt) => (
              <Menu.Item
                key={opt.value}
                value={opt.value}
                _hover={{ cursor: "pointer" }}
                onClick={() => {
                  onSelectSortOrder(opt.value);
                }}
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
