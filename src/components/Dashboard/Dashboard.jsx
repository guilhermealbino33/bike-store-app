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
      <Card title="Locations" sectioned>
        <TextContainer spacing="loose">
          <p> List of current shop's locations </p>
          <DisplayText>
            <TextStyle variation="strong">
              {" "}
              <p>Create a path to show the locations</p>{" "}
            </TextStyle>
          </DisplayText>
        </TextContainer>
      </Card>
    </Page>
  );
};
