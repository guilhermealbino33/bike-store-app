import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
    query getProduct($first: Int, 
                     $last: Int, 
                     $after: String, 
                     $before: String, 
                     $reverse: Boolean, 
                     $query: String,
                     $sortKey: ProductSortKeys
                     ) {
        products(
                 first: $first, 
                 last: $last, 
                 after: $after, 
                 before: $before, 
                 reverse: $reverse, 
                 query: $query,
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

export const PRODUCTS_QUERY = gql`
  mutation populateProduct($input: ProductInput!) {
    productCreate(input: $input) {
      product {
        title
      }
    }
  }
`;

export const GET_CHOOSEN_PRODUCT = gql`
  query getChoosenProduct($id: ID!) {
    product(id: $id) {
      title
      descriptionHtml
  }
}
`;

export const UPDATE_CHOOSEN_PRODUCT = gql`
mutation productUpdate($input: ProductInput!) {
    productUpdate(input: $input) {
        product {
            id
            title
            descriptionHtml
        }
    }
}
`;
