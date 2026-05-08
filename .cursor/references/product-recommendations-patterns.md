# Product Recommendations Patterns

## Heading and Intro Alignment

- To center recommendation headlines and supporting text, target the wrapper:
  - `.section-resource-list__content` in section implementations
  - `.block-resource-list .section-resource-list__content` in block implementations
- Keep heading and paragraph elements centered with:
  - `:is(h1, h2, h3, h4, h5, h6, p) { text-align: center; }`

## Scope Guidance

- Apply alignment rules in both:
  - `sections/product-recommendations.liquid`
  - `blocks/product-recommendations.liquid`
- This ensures consistent output when recommendations are rendered as either a standalone section or an embedded product-details block.
