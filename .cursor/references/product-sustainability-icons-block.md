# Product sustainability icons block

PDP block type: `product-sustainability-icons` (`blocks/product-sustainability-icons.liquid`), registered on `blocks/_product-details.liquid`.

## Data

- Product metafield: `product.metafields.custom.sustainability_icons` (list of metaobject references).
- Metaobject fields: `title` (single line text), `icon` (image / file).
- Liquid: `closest.product.metafields.custom.sustainability_icons.value` → loop; prefer `item.title.value | default: item.title` and `item.icon.value | default: item.icon` so both direct drops and `.value` shapes work.
- The block does not render if the list is empty or every row is missing a title or icon.

## Theme editor

- On the storefront, an empty metafield yields no output (by design).
- When `request.design_mode` or `request.visual_preview_mode` is true and there is nothing to render, the block still outputs a **placeholder row** (sample labels + dashed circles) and **`content.sustainability_icons_editor_hint`** so the layout is visible and the block stays easy to select in the product details column.
- **Editor picker:** the block must define at least one **`presets`** entry in its schema (see Shopify theme block presets); otherwise it does not appear under Add block.

## Merch

Add the **Icons** block in the theme editor under the product details area after placing the metafield on products.
