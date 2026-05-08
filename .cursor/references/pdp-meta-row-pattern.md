# PDP Meta Row Pattern

Use this pattern in `blocks/_product-details.liquid` when merchandising requires contextual meta above the product title.

## Structure

- Add a meta wrapper before `{% content_for 'blocks' %}`.
- Render breadcrumbs with:
  - `Home` -> `routes.root_url`
  - `Shop` -> `routes.all_products_collection_url`
  - Optional collection crumb -> `closest.product.collections.first`
- Render a second row with:
  - Uppercase collection title on the left
  - Share button on the right

## Data Source

- Collection source: `closest.product.collections.first`
- Guard all collection-dependent UI with `{% if featured_collection %}`.

## Share Behavior

- Use a lightweight JS click handler on `[data-share-product]`.
- Prefer `navigator.share({ title, url })` when available.
- Fallback to `navigator.clipboard.writeText(url)`.
- Final fallback: `window.prompt('Copy this link:', url)`.

## Accessibility

- Breadcrumbs in `<nav aria-label="Breadcrumb">`.
- Share control should be a real `<button type="button">` with `aria-label`.
- Keep icon decorative (`aria-hidden="true"`).
