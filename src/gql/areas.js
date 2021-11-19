import { gql } from '@apollo/client';

export const GET_AREAS = gql`
  query GetAreas {
    areas {
      _id
      color
      createdAt
      deletedAt
      imageUrl
      name
      note
      updatedAt
    }
  }
`;
