import { useParams } from 'react-router-dom';
import { Stack, Title, Text } from '@mantine/core';
import { USERLIST_IDS } from '../config/consts';
import ListContent from '../components/ListContent';

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
    <ListContent year={year} />
  );
}

export default List;
