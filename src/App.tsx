import { Button, HStack } from "@chakra-ui/react";

function App() {
  return (
    <>
      <HStack wrap="wrap" gap="6">
        <Button disabled size="xs">
          Button (xs)
        </Button>
        <Button size="sm" loading loadingText="Saving">
          Button (sm)
        </Button>
        <Button size="md" colorScheme="blue">
          Button (md)
        </Button>
        <Button size="lg">Button (lg)</Button>
        <Button size="xl">Button (xl)</Button>
      </HStack>
    </>
  );
}

export default App;
