import { Button, Menu, Portal } from "@chakra-ui/react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { useState } from "react";
import usePlatforms from "@/hooks/usePlatforms";

const PlatformSelector = () => {
  const [open, setOpen] = useState(false);
  const { data, error, isLoading } = usePlatforms();

  if (error) return null;

  return (
    <Menu.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
      <Menu.Trigger asChild>
        {!isLoading ? (
          <Button
            variant="outline"
            size="sm"
            _focus={{ boxShadow: "none", outline: "none" }}
          >
            Platforms
            {open ? <FaAngleUp /> : <FaAngleDown />}
          </Button>
        ) : (
          <Button
            loading
            loadingText="Platforms"
            spinnerPlacement="end"
            variant="outline"
            size="sm"
          ></Button>
        )}
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data.map((platform) => (
              <Menu.Item key={platform.id} value={platform.slug}>
                {platform.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformSelector;
