# Header Mobile Drawer Troubleshooting

## Symptom
- Mobile hamburger drawer (`.header__drawer`) is missing from rendered HTML.
- Search/cart actions appear on the left instead of right in mobile layout.

## Cause Pattern
- Reusing the same static block id in `content_for 'block'` calls for multiple header menu variants can cause one variant render path to be missing.

## Fix Pattern
- In `sections/header.liquid`, use distinct ids for each captured `_header-menu` variant:
  - Desktop menu: `header-menu`
  - Mobile drawer: `header-menu-mobile`
  - Navigation bar: `header-menu-navigation`
- Explicitly map mobile grid areas:
  - `.header__drawer` -> `leftA`
  - `.search-action` -> `rightA`
  - `header-actions` -> `rightB`

## Desktop Overflow Removal
- If desktop navigation should never collapse into a "More" item:
  - Replace `overflow-list` usage in `blocks/_header-menu.liquid` with a plain `<ul class="menu-list__list">`.
  - Remove the `slot="more"` menu item markup.
  - Update `assets/header-menu.js` so `requiredRefs` does not require `overflowMenu`.
  - Remove any `findMenuItem()` handling specific to `[slot="more"]`.

## Notes
- Theme-check warning for `@starting-style` is pre-existing and unrelated to drawer markup rendering.
