import React from "react";
import { useEffect } from "react";
import {
  Page,
  Card,
  Heading,
  TextContainer,
  DisplayText,
  TextStyle,
  EmptyState,
} from "@shopify/polaris";
import {
  useClientRouting,
  useRoutePropagation,
} from "@shopify/app-bridge-react";
import { useLocation, useNavigate } from "react-router-dom";

export const Dashboard = ({
  totalProductCount,
  getAllCountProduct,
  getPublishedCountProduct,
  getAllLocations,
}) => {
  // Use location
  const location = useLocation();
  const navigate = useNavigate();
  useRoutePropagation(location);
  useClientRouting({
    replace(path) {
      navigate(path);
    },
  });
  console.log("getAllLocations from Dashboard", getAllLocations);

  useEffect(() => {
    getAllCountProduct(), getPublishedCountProduct();
  }, []);

  return (
    <Page>
      <Card sectioned>
        <EmptyState
          heading="Manage your inventory transfers"
          action={{ content: "Add transfer" }}
          secondaryAction={{
            content: "Learn more",
            url: "https://help.shopify.com",
          }}
          image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
        >
          <p>Track and receive your incoming inventory from suppliers.</p>
        </EmptyState>
      </Card>
      <Card title="All count products" sectioned>
        <TextContainer spacing="loose">
          <p> Number of Existing Products </p>
          <DisplayText>
            <TextStyle variation="strong">{totalProductCount}</TextStyle>
          </DisplayText>
        </TextContainer>
      </Card>
    </Page>
  );
};
