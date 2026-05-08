# Featured Blog Posts Patterns

## Width Settings

- `sections/featured-blog-posts.liquid` supports section width via `section.settings.section_width`.
- Include `small` as an option alongside `page-width` and `full-width`.

## Small Width Sizing

- For consistent theme behavior, apply:
  - `width: min(100%, calc(1280px + (var(--page-margin) * 2)));`
  - `max-width: 100%;`
  - `margin-inline: auto;`
  - `padding-inline: var(--page-margin);`

This matches the established small-width behavior used by other list-style sections.
