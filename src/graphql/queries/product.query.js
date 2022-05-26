import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query getProduct(
    $first: Int
    $last: Int
    $after: String
    $before: String
    $reverse: Boolean
    $query: String
    $sortKey: ProductSortKeys
  ) {
    products(
      first: $first
      last: $last
      after: $after
      before: $before
      reverse: $reverse
      query: $query
      sortKey: $sortKey
    ) {
      pageInfo {
        hasPreviousPage
        hasNextPage
      }
      edges {
        cursor
        node {
          title
          id
        }
      }
    }
  }
`;

export const GET_CHOSEN_PRODUCT = gql`
  query getChosenProduct($id: ID!) {
    product(id: $id) {
      title
      descriptionHtml
    }
  }
`;

export const GET_VARIANT_BY_ID = gql`
  query getVariantById($id: ID!) {
    productVariant(id: $id) {
      id
      title
      inventoryItem {
        inventoryLevels(first: 10) {
          edges {
            node {
              id
              available
              location {
                name
              }
            }
          }
        }
      }
    }
  }
`;
