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

export const GET_AREAS_CHORES = gql`
  query GetAreasChores {
    areas(query: { deletedAt_exists: false }) {
      _id
      color
      createdAt
      deletedAt
      imageUrl
      iconUrl
      name
      note
      updatedAt
      chores {
        _id
        name
      }
    }
  }
`;
