import { HStack, Skeleton, Stack } from "@chakra-ui/react";

interface Props {
  size: string;
}

const GenreItemSkeleton = ({ size }: Props) => {
  return (
    <HStack gap={3}>
      <Skeleton height={size} width={size} borderRadius={8} />
      <Stack flex="1">
        <Skeleton height={4} />
      </Stack>
    </HStack>
  );
};

export default GenreItemSkeleton;
