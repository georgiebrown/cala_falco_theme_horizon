# Product sustainability icons block

PDP block type: `product-sustainability-icons` (`blocks/product-sustainability-icons.liquid`), registered on `blocks/_product-details.liquid`.

## Data

- Product metafield: `product.metafields.custom.sustainability_icons` (list of metaobject references).
- Metaobject fields: `title` (single line text), `icon` (image / file).
- Liquid: `closest.product.metafields.custom.sustainability_icons.value` → loop; prefer `item.title.value | default: item.title` and `item.icon.value | default: item.icon` so both direct drops and `.value` shapes work.
- The block does not render if the list is empty or every row is missing a title or icon.

## Merch

Add the **Icons** block in the theme editor under the product details area after placing the metafield on products.
