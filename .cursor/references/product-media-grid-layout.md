# Product Media Grid Layout Pattern

## Goal
Create a desktop-only editorial product media sequence for grid presentation:
1. First media full width
2. Next two media at half width
3. Optional headline block from product metafield
4. Remaining media full width

## Data Source
- Headline is read from `product.metafields.custom.product_media_headline`.

## Implementation
- File: `snippets/product-media-gallery-content.liquid`
- Add class markers per media index:
  - `product-media-container--hero`
  - `product-media-container--half`
  - `product-media-container--full-width`
- Inject a headline `<li>` after the third item (or after last item if fewer than three).
- Keep mobile unchanged by applying layout overrides only under desktop media query.

## CSS Notes
- Use two-column grid for the custom desktop sequence.
- Span full width for hero/remaining/headline rows.
- Keep headline spacing with section tokens (`--padding-lg`) for consistency.
