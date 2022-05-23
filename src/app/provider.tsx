import { ClientApplication } from "@shopify/app-bridge";

export type LocationOrHref =
  | string
  | { search: string; hash: string; pathname: string };

export interface Props {
  location: LocationOrHref;
}
