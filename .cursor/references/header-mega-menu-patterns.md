# Header Mega Menu Patterns

- Use a dedicated snippet for complex submenu layouts to avoid branching and regressions in `snippets/mega-menu-list.liquid`.
- For a featured-collections mega menu variant, render two columns:
  - left: stacked submenu links (plus optional CTA below)
  - right: fixed featured collection cards chosen from block settings
- Keep cards merchant-configurable using block-level collection pickers (`featured_collection_1` through `featured_collection_3`) and CTA settings.
- Route layout selection from `blocks/_header-menu.liquid` using `menu_style` so existing submenu modes (`text`, `collection_images`, `featured_products`) remain unchanged.

## Resource cards in the mega menu

- Collection cards use **default** `resource-card` layout (not `overlay`) so titles and images sit in normal flow and are not clipped by submenu `overflow`.
- `blocks/_header-menu.liquid` scopes layout: CSS grid on `.mega-menu .resource-card`, `position: static` on `.resource-card__link` spanning rows for a full-card hit target, **16px** radius on images, flexible `minmax(0, 1fr)` columns for featured collection grids.
