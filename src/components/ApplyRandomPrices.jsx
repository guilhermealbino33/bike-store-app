import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { Layout, Button, Banner, Toast, Stack, Frame } from "@shopify/polaris";
import { Loading } from "@shopify/app-bridge-react";

// GraphQL mutation that updates the prices of products
const UPDATE_PRICE = gql`
  mutation productVariantUpdate($input: ProductVariantInput!) {
    productVariantUpdate(input: $input) {
      product {
        title
      }
      productVariant {
        id
        price
      }
    }
  }
`;
