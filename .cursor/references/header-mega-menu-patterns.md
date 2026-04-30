# Header Mega Menu Patterns

- Use a dedicated snippet for complex submenu layouts to avoid branching and regressions in `snippets/mega-menu-list.liquid`.
- For a featured-collections mega menu variant, render two columns:
  - left: stacked submenu links (plus optional CTA below)
  - right: fixed featured collection cards chosen from block settings
- Keep cards merchant-configurable using block-level collection pickers (`featured_collection_1` through `featured_collection_3`) and CTA settings.
- Route layout selection from `blocks/_header-menu.liquid` using `menu_style` so existing submenu modes (`text`, `collection_images`, `featured_products`) remain unchanged.
