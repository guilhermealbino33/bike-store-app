import {
  Heading,
  Layout,
  Page,
  ResourceList,
  Stack,
  TextStyle,
} from "@shopify/polaris";

export function Location({ data }) {
  const locations = data.locations.nodes;

  return (
    <Page fullWidth>
      <Layout>
        <Layout.Section>
          <Stack alignment="center">
            <Stack.Item fill>
              <Stack alignment="center">
                <Heading>Locations List</Heading>
              </Stack>
            </Stack.Item>
          </Stack>
        </Layout.Section>

        <Layout.Section>
          <ResourceList
            resourceName={{ singular: "Location", plural: "Locations" }}
            items={locations}
            renderItem={(location) => {
              console.log("location", location);
              const { id, name, address } = location;
              return (
                <ResourceList.Item id={id}>
                  <Stack>
                    <Stack.Item fill>
                      <h3>
                        <TextStyle variation="strong">{name}</TextStyle>
                      </h3>
                    </Stack.Item>
                    <Stack.Item>
                      <p>{address.address1}</p>
                    </Stack.Item>
                  </Stack>
                </ResourceList.Item>
              );
            }}
          />
        </Layout.Section>
      </Layout>
    </Page>
  );
}
