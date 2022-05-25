import {
  Avatar,
  Card,
  Heading,
  Layout,
  Page,
  ResourceList,
  Stack,
  Subheading,
  TextStyle,
} from "@shopify/polaris";

export function Product({ data }) {
  const variant = data.productVariant;

  return (
    <Page fullWidth>
      <Layout>
        <Layout.Section>
          <Stack alignment="center">
            <Stack.Item fill>
              <Stack alignment="center">
                <Avatar></Avatar>
                <Heading>{variant.title}</Heading>
              </Stack>
            </Stack.Item>
            <Stack.Item>
              <p>{variant.id}</p>
            </Stack.Item>
          </Stack>
        </Layout.Section>

        <Layout.Section>
          <Subheading>Locations</Subheading>
          <ResourceList
            resourceName={{
              singular: "InventoryLevel",
              plural: "InventoryLevels",
            }}
            items={variant.inventoryItem.inventoryLevels.edges}
            renderItem={(inventoryLevel) => {
              const inventory = inventoryLevel.node;
              return (
                <ResourceList.Item
                  id={inventory.id}
                  // media={media}
                >
                  <Stack>
                    <Stack.Item fill>
                      <h3>
                        <TextStyle variation="strong">
                          {inventory.location.name}
                        </TextStyle>
                      </h3>
                    </Stack.Item>
                    <Stack.Item>
                      <p>{inventory.available}</p>
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
