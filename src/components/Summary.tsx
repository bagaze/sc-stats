import {
  Stack,
  List,
  Title,
  Text,
  Anchor,
} from '@mantine/core';
import { UserListData } from "../gql/stats";

export default function Summary({ data }: Props) {
  if (!data) {
    return (
      <Stack spacing="md">
        <Title order={1}>Erreur</Title>
        <Text>Liste vide</Text>
      </Stack>
    )
  } else {
    const { userList: { label, productCount, url, productsList: { items } } } = data;
    const sc_url = `https://www.senscritique.com${url}`;

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
      <List.Item key={filmTheater}>
        <Text component='span' style={{fontWeight: 600}}>{filmTheater}</Text>: {numberOfVisit}
      </List.Item>
    ) );

    return (
      <>
        <Stack spacing="sm">
          <Title order={1}>{label}</Title>
          <Anchor href={sc_url} target="_blank" color='dimmed' weight={500} style={{width: 'fit-content'}}>
            Accéder à la liste sur SensCritique
          </Anchor>
          <Title order={3}>Nombre de films</Title>
          <Text>{items.length}</Text>
          <Title order={3}>Note moyenne</Title>
          <Text>{avg.toFixed(2)}</Text>
          <Title order={3}>Nombre de salles différentes</Title>
          <Text>{Object.keys(sortedMovieTheatersList).length}</Text>
          <Title order={3}>Classement par salles</Title>
          <List>
            {listItems}
          </List>
        </Stack>
      </>
    );
  }
}

interface Props {
  data: UserListData | undefined
}
