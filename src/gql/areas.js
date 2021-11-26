import { gql } from '@apollo/client';

export const GET_AREAS = gql`
  query GetAreas {
    areas(query: { deletedAt_exists: false }) {
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
