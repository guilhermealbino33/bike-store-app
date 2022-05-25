import React from "react";
import { useState, useCallback, useEffect } from "react";
import { Page, Layout, TextField, Button, TextStyle } from "@shopify/polaris";
import { useLocation, useNavigate } from "react-router-dom";
import {
  useAppBridge,
  useClientRouting,
  useRoutePropagation,
} from "@shopify/app-bridge-react";
import { useMutation } from "@apollo/client";

import { PRODUCTS_QUERY } from "../graphql/requestString";
import { userLoggedInFetch } from "../App";

export const CreateProduct = () => {
  const [titleValue, setTitleValue] = useState("");
  const [populateProduct, { loading }] = useMutation(PRODUCTS_QUERY);
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    updateProductCount();
  }, []);

  // Use location
  const location = useLocation();
  const navigate = useNavigate();
  useRoutePropagation(location);
  useClientRouting({
    replace(path) {
      navigate(path);
    },
  });

  // For Rest-request to server
  const app = useAppBridge();
  const fetch = userLoggedInFetch(app);
  async function updateProductCount() {
    const { count } = await fetch("/products/count").then((res) => res.json());
    setProductCount(count);
  }

  // Input onchange function
  const handleChangeTitle = useCallback(
    (newValue) => setTitleValue(newValue),
    []
  );
  const handleCreateProductButton = useCallback(() => {
    populateProduct({
      variables: {
        input: {
          title: titleValue,
        },
      },
    }).then(() => {
      updateProductCount();
      setTitleValue("");
    });
  }, [titleValue]);

  // Render
  return (
    <Page>
      <Layout>
        <Layout.Section>
          <TextField
            label="Product name"
            value={titleValue}
            onChange={handleChangeTitle}
            autoComplete="off"
          />
        </Layout.Section>
        <Layout.Section>
          <TextStyle variation="strong">
            Total products count: {productCount}
          </TextStyle>
        </Layout.Section>
        <Layout.Section>
          <Button
            disabled={titleValue ? false : true}
            loading={loading}
            onClick={handleCreateProductButton}
            primary
          >
            Create product
          </Button>
        </Layout.Section>
      </Layout>
    </Page>
  );
};
