import { useParams } from 'react-router-dom';
import { Stack, Title, Text } from '@mantine/core';
import { USERLIST_IDS } from '../config/consts'

function List() {
  const { year } = useParams();
  if (!year || !Object.keys(USERLIST_IDS).includes(year)) {
    return (
      <Stack spacing="md">
        <Title order={1}>404 - Does not exist</Title>
        <Text>Liste non existante</Text>
      </Stack>
    );
  }

  return (
    <>
      <Stack spacing="md">
        <Title order={1}>Vu au cinéma en {year}</Title>
        <Title order={2}>Nombre de films</Title>
        <Text>Content...</Text>
        <Title order={2}>Note moyenne</Title>
        <Text>Content...</Text>
        <Title order={2}>Nombre de salles différents</Title>
        <Text>Content...</Text>
        <Title order={2}>Classement par salles</Title>
        <Text>Content...</Text>
      </Stack>
    </>
  );
}

export default List;
