import React, { useState } from "react";
import { useCallback, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  useRoutePropagation,
  useClientRouting,
} from "@shopify/app-bridge-react";
import { useLazyQuery, useMutation } from "@apollo/client";
import {
  Button,
  ButtonGroup,
  Card,
  Frame,
  Layout,
  Loading,
  Page,
  TextField,
  Banner,
} from "@shopify/polaris";
import {
  GET_CHOSEN_PRODUCT,
  UPDATE_CHOSEN_PRODUCT,
} from "../graphql/requestString";

export const ProductsItem = () => {
  const [idNumber] = useState(useParams().id);

  const [getProduct, { data, loading, error }] = useLazyQuery(
    GET_CHOSEN_PRODUCT,
    { variables: { id: "gid://shopify/Product/" + idNumber } }
  );
  const [mutateFunction, { loading: mutationLoading, error: mutationError }] =
    useMutation(UPDATE_CHOSEN_PRODUCT);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    getProduct();
    if (data) {
      setTitle(data.product.title);
      setDescription(data.product.descriptionHtml);
    }
  }, [data]);

  // Use location
  const location = useLocation();
  const navigate = useNavigate();
  useRoutePropagation(location);
  useClientRouting({
    replace(path) {
      navigate(path);
    },
  });
  // For handle edit field value
  const handleChangeTitle = useCallback((newValue) => setTitle(newValue), []);
  const handleChangeDescription = useCallback(
    (newValue) => setDescription(newValue),
    []
  );

  // For navigate useCallback
  const backToAllProducts = useCallback(() => {
    navigate("/products");
  }, []);
  // For update our product
  const updateProduct = useCallback(() => {
    mutateFunction({
      variables: {
        input: {
          id: `gid://shopify/Product/${idNumber}`,
          title: title,
          descriptionHtml: description,
        },
      },
    }).then(() => {
      getProduct();
    });
  }, [title, description, idNumber]);

  if (error || mutationError) {
    return (
      <Banner status="critical">There was an issue loading product.</Banner>
    );
  }

  if (loading || !data) {
    return (
      <Frame>
        <Loading />
      </Frame>
    );
  }

  return (
    <Page title={data.product.title} subtitle={data.product.descriptionHtml}>
      <Card title="Change fields" sectioned>
        <Layout>
          <Layout.Section>
            <TextField
              requiredIndicator
              label="Title"
              value={title}
              onChange={handleChangeTitle}
              autoComplete="off"
            />
          </Layout.Section>
          <Layout.Section>
            <TextField
              label="Description"
              value={description}
              onChange={handleChangeDescription}
              autoComplete="off"
            />
          </Layout.Section>
          <Layout.Section>
            <ButtonGroup>
              <Button
                loading={mutationLoading}
                disabled={
                  title
                    ? (title === data.product.title &&
                        description === data.product.descriptionHtml) ||
                      loading
                    : true
                }
                onClick={updateProduct}
                primary
              >
                Save
              </Button>
              <Button onClick={backToAllProducts} primary>
                Back to all products
              </Button>
            </ButtonGroup>
          </Layout.Section>
        </Layout>
      </Card>
    </Page>
  );
};
