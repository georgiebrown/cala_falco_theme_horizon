# Section Inner Frame Pattern

## Goal
Allow any `section.liquid` instance to render an inset border frame inside the section bounds.

## Settings
- `show_inner_frame` (`checkbox`)
- `inner_frame_inset` (`range`, px)
- `inner_frame_radius` (`range`, px)
- `show_image_border` (`checkbox`)
- `image_border_color` (`color`)

## Implementation
- In `snippets/section.liquid`, apply `custom-section-content--inner-frame` when enabled.
- Set CSS variables on the wrapper from section settings:
  - `--inner-frame-inset`
  - `--inner-frame-radius`
- Render frame with `::after`:
  - `border: 1px solid #F4C077`
  - inset and radius from variables
  - `pointer-events: none` to avoid interaction issues.
- For image-specific framing, apply `custom-section-content--image-inner-frame` and target `.image-block`:
  - fixed `1px` border
  - fixed `16px` border radius
  - fixed `16px` inset to create spacing between image and border
  - border color from `image_border_color`
  - optional via `show_image_border`.
