import { gql } from "@apollo/client";

export const GET_LOCATIONS = gql`
  query {
    locations(first: 10) {
      nodes {
        id
        name
        address {
          address1
        }
      }
    }
  }
`;
