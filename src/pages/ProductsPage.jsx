import { useQuery } from "@apollo/client";
import { Page, Layout, Banner, Card } from "@shopify/polaris";
import { Loading } from "@shopify/app-bridge-react";

import { Product } from "../components/Product";
import { GET_VARIANT_BY_ID } from "../graphql/requestString";

export function ProductsPage({ productId }) {
  const { loading, error, data, refetch } = useQuery(GET_VARIANT_BY_ID, {
    variables: { id: productId },
  });

  if (loading) return <Loading />;

  if (error) {
    console.warn(error);
    return (
      <Banner status="critical">There was an issue loading products.</Banner>
    );
  }

  return (
    <Page>
      <Layout>
        <Layout.Section>
          <Card>
            <Product data={data} />
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
