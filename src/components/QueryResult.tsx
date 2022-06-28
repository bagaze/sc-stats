import {
  Stack,
  Title,
  Skeleton,
  Text
} from "@mantine/core";
import { ApolloError } from "@apollo/client"

export default function QueryResult({loading, error, children}: Props) {
  if (loading) {
    return (
      <Stack spacing="md">
        <Title order={1}>Vu au cinéma en ...</Title>
        <Skeleton height={8} radius="xl" width="50%" />
        <Skeleton height={8} radius="xl" width="70%" />
        <Skeleton height={8} radius="xl" width="90%" />
        <Skeleton height={8} radius="xl" width="70%" />
        <Skeleton height={8} radius="xl" width="50%" />
        <Skeleton height={8} radius="xl" width="70%" />
        <Skeleton height={8} radius="xl" width="90%" />
        <Skeleton height={8} radius="xl" width="70%" />
        <Skeleton height={8} radius="xl" width="50%" />
      </Stack>
    );
  }

  if (error) {
    return (
      <Stack spacing="md">
        <Title order={1}>Erreur</Title>
        <Text>{error.name} - {error.message}</Text>
      </Stack>
    );
  }

  return (
    <>
      { children }
    </>
  );
}

interface Props {
  loading: boolean
  error: ApolloError | undefined
  children: React.ReactNode
}
