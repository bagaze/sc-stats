import { useQuery } from '@apollo/client';
import { USERLIST_IDS } from '../config/consts';
import { GET_USER_LIST, UserListData } from '../gql/stats';
import LastFilmsSeen from './LastFilmsSeen';
import QueryResult from './QueryResult';
import Summary from './Summary';

export default function ListContent({ year }: Props) {
  const options = {
    variables: {
      id: USERLIST_IDS[year],
      limit: 500,
      offset: 0,
      order: 'DESC',
      sortBy: 'BY_DEFAULT'
    }
  };
  const { loading, error, data } = useQuery<UserListData>(
    GET_USER_LIST,
    options
  );

  return (
    <>
      <QueryResult loading={loading} error={error}>
        <Summary data={data} />
        <hr />
        <LastFilmsSeen data={data} />
      </QueryResult>
    </>
  );
};

interface Props {
  year: string,
}
