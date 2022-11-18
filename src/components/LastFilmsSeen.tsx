import {
  Stack,
  Title,
  Text,
  Table,
} from "@mantine/core";
import { UserListData } from "../gql/stats";
import DateDone from "./DateDone";
import StarRating from "./StarRating";

export default function LastFilmsSeen({ data }: Props ) {
  if (!data) {
    return (
      <Stack spacing="md">
        <Title order={1}>Erreur</Title>
        <Text>Liste vide</Text>
      </Stack>
    );
  } else {
    const rows = data.userList.productsList.items.map((el) => (
      <tr key={el.product.id}>
        <td><a className="movie-title" href={`https://www.senscritique.com/${el.product.url}` } rel="noreferrer" target="_blank">{el.product.title}</a></td>
        <td><StarRating rating={el.product.otherUserInfos.rating} /></td>
        <td>
          <DateDone data={el.product.otherUserInfos.dateDone} />
        </td>
        <td>{el.annotation}</td>
      </tr>
    ));
    return (
      <>
        <Title order={3}>Liste complète</Title>
        <Table>
          <thead>
            <tr>
              <th>Titre</th>
              <th>Note</th>
              <th>Vu le</th>
              <th>Salle</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </>
    );
  }
}

interface Props {
  data: UserListData | undefined
}
