import { Card, EmptyState, Page } from "@shopify/polaris";


export function HomePage() {
  return (
    <Page fullWidth>
      <Layout>
        <Layout.Section>      
          <Card sectioned>
            <p>Hello</p>            
          </Card>
        </Layout.Section>
     </Layout>
    </Page>
  );
}
