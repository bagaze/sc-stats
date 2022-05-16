import { useParams } from 'react-router-dom';
import { Stack, Title, Text } from '@mantine/core';

function List() {
  const { year } = useParams();

  return (
    <>
      <Stack spacing="md">
        <Title order={1}>Vu au cinéma en {year}</Title>
        <Text>Content...</Text>
      </Stack>
    </>
  );
}

export default List;
