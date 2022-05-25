import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  useClientRouting,
  useRoutePropagation,
} from "@shopify/app-bridge-react";

export const Navigation = () => {
  // Use location
  const location = useLocation();
  const navigate = useNavigate();
  useRoutePropagation(location);
  useClientRouting({
    replace(path) {
      navigate(path);
    },
  });

  const dashBoardLink = { label: "Dashboard", destination: "/" };
  const productsLink = { label: "Products", destination: "/products" };
  const createProductLink = { label: "Create", destination: "/create" };
  const locationsLink = { label: "Locations", destination: "/locations" };
  return (
    <NavigationMenu
      navigationLinks={[
        dashBoardLink,
        productsLink,
        createProductLink,
        locationsLink,
      ]}
    />
  );
};
