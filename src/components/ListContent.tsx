import { Stack, Title, Text, List, Skeleton } from '@mantine/core';
import { useQuery } from '@apollo/client';
import { USERLIST_IDS } from '../config/consts'
import { GET_USER_LIST, UserListData } from '../gql/stats';

export default function ListContent({ year }: Props) {
  const options = {
    variables: {
      id: USERLIST_IDS[year],
      limit: 500,
      offset: 0,
      order: 'ASC',
      sortBy: 'BY_DEFAULT'
    }
  };
  const { loading, error, data } = useQuery<UserListData>(
    GET_USER_LIST,
    options
  );

  if (loading) {
    return (
      <Stack spacing="md">
        <Title order={1}>Vu au cinéma en ...</Title>
        <Skeleton height={8} radius="xl" />
        <Skeleton height={8} radius="xl" />
        <Skeleton height={8} radius="xl" />
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

  if (!data) {
    return (
      <>
        <Stack spacing="md">
          <Title order={1}>Erreur</Title>
          <Text>Liste vide</Text>
        </Stack>
      </>
    )
  } else {
    const { userList: { label, productCount, productsList: { items } } } = data;

    // Calculate the average rating
    const sum = items.reduce((total, item) => {
      total += item.product.otherUserInfos.rating;
      return total
    }, 0);
    const avg = sum / productCount;

    // Retrieve the list of movie theaters (sorted)
    const sortedMovieTheatersList: {[k: string]: number} = Object.entries(
      items.reduce( (prev: {[k: string]: number}, item) => {
        prev[item.annotation] = (prev[item.annotation] || 0) + 1;
        return prev;
      }, {})
    )
      .sort(([,a],[,b]) => b - a)
      .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

    const listItems = Object.entries(sortedMovieTheatersList).map( ([filmTheater, numberOfVisit]) => (
      <List.Item>
        <Text component='span' style={{fontWeight: 600}}>{filmTheater}</Text>: {numberOfVisit}
      </List.Item>
    ) );

    return (
      <>
        <Stack spacing="sm">
          <Title order={1}>{label}</Title>
          <Title order={2}>Nombre de films</Title>
          <Text>{productCount}</Text>
          <Title order={2}>Note moyenne</Title>
          <Text>{avg.toFixed(2)}</Text>
          <Title order={2}>Nombre de salles différents</Title>
          <Text>{Object.keys(sortedMovieTheatersList).length}</Text>
          <Title order={2}>Classement par salles</Title>
          <List>
            {listItems}
          </List>
        </Stack>
      </>
    );
  }
};

interface Props {
  year: string,
}