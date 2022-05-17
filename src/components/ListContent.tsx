import { useQuery } from '@apollo/client';
import { USERLIST_IDS } from '../config/consts'
import { GET_USER_LIST, UserListData } from '../gql/stats';
import QueryResult from './QueryResult'
import ContentDetail from './ContentDetail'

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

  return (
    <QueryResult loading={loading} error={error}>
      <ContentDetail data={data} />
    </QueryResult>
  );
};

interface Props {
  year: string,
}
