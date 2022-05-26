import { useQuery } from "@apollo/client";
import { Page, Layout, Banner, Card } from "@shopify/polaris";
import { Loading } from "@shopify/app-bridge-react";

import { GET_LOCATIONS } from "../graphql";
import { Location } from "../components/Location";
import { useState } from "react";
import { useParams } from "react-router-dom";

export function LocationsPage() {
  const [idNumber] = useState(useParams().id);
  const { loading, error, data, refetch } = useQuery(GET_LOCATIONS, {
    variables: { id: "gid://shopify/Location/" + idNumber },
  });

  if (loading) return <Loading />;

  if (error) {
    console.warn(error);
    return (
      <Banner status="critical">There was an issue loading locations.</Banner>
    );
  }

  return (
    <Page>
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <Location data={data} />
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
