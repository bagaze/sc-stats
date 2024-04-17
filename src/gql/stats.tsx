import { gql } from "@apollo/client";

export const GET_USER_LIST = gql`
  query UserList(
    $id: Int!
    $limit: Int
    $offset: Int
    $sortBy: ListProductsSortBis
    $order: ListProductsOrder
  ) {
    userList(id: $id) {
      ...UserListMinimal
      productsList(
        limit: $limit
        offset: $offset
        sortBy: $sortBy
        order: $order
      ) {
        items {
          annotation
          position
          product {
            ...ProductMinimal
            otherUserInfos {
              ...ProductUserInfos
            }
          }
        }
      }
    }
  }

  fragment ProductMinimal on Product {
    ...ProductNano
    dateCreation
    dateLastUpdate
    dateRelease
    dateReleaseUS
    duration
    frenchReleaseDate
    countries {
      name
    }
    directors {
      name
      person_id
    }
    distributors {
      name
      person_id
    }
    genresInfos {
      id
      label
      slug
    }
  }

  fragment ProductNano on Product {
    id
    rating
    title
    universe
    url
    medias {
      picture
    }
  }

  fragment UserListMinimal on UserList {
    commentCount
    dateCreation
    dateLastEdit
    id
    label
    productCount
    universe
    url
    author {
      ...UserMinimal
    }
  }

  fragment UserMinimal on User {
    id
    username
  }

  fragment ProductUserInfos on ProductUserInfos {
    dateDone
    rating
  }
`;

/*
 * TypeScript interfaces
 */

interface ProductUserInfosData {
  dateDone: string;
  rating: number;
}

interface AuthorData {
  id: number;
  username: string;
}

interface ProductNanoData {
  id: number;
  rating: number;
  title: string;
  url: string;
  universe: number;
  medias: {
    picture: string;
  };
}

interface CountryData {
  name: string;
}

interface PersonData {
  name: string;
  person_id: number;
}

interface GenreInfoData {
  id: number;
  label: string;
  slug: string;
}

interface ProductData extends ProductNanoData {
  dateCreation: string;
  dateLastUpdate: string;
  dateRelease: string;
  dateReleaseUS: string;
  duration: number;
  frenchReleaseDate: string;
  countries: CountryData[];
  directors: PersonData[];
  distributors: PersonData[];
  genresInfos: GenreInfoData[];
  otherUserInfos: ProductUserInfosData;
}

interface ItemData {
  annotation: string;
  position: number;
  product: ProductData;
}

export interface UserListData {
  userList: {
    commentCount: number;
    dateCreation: string;
    dateLastEdit: string;
    id: number;
    label: string;
    productCount: number;
    universe: number;
    url: string;
    author: AuthorData;
    productsList: {
      items: ItemData[];
    };
  };
}
