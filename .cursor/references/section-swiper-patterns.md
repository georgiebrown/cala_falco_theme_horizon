# Section Swiper Patterns

## Ingredient-style carousel with next-image preview

- For section-based carousels where each slide is a block, render blocks directly in the section with a `data-slide` wrapper and translate a `data-track` container.
- To show a faded preview of the next slide image, compute the next block in Liquid:
  - `next_index = forloop.index0 + 1`
  - wrap to `0` when `next_index >= section.blocks.size`
  - render `next_block.settings.image` in a third visual column with low opacity.
- Keep the preview image `aria-hidden="true"` so assistive tech does not announce duplicate media.
- For theme editor behavior, listen to `shopify:block:select` and jump to the selected slide index.
