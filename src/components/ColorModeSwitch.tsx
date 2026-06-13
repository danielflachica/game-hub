import { HStack, Switch, Text } from "@chakra-ui/react";
import { ColorModeButton, useColorMode } from "./ui/color-mode";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      {/* <ColorModeButton /> */}
      <Switch.Root
        checked={colorMode === "dark"}
        colorPalette="cyan"
        onCheckedChange={toggleColorMode}
      >
        <Switch.HiddenInput />
        <Switch.Control />
        <Switch.Label>
          <Text whiteSpace="nowrap">Dark Mode</Text>
        </Switch.Label>
      </Switch.Root>
    </HStack>
  );
};

export default ColorModeSwitch;
