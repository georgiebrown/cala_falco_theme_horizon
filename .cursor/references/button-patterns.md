# Button Patterns

- Primary buttons (`.button`, excluding `.button-secondary` and `.button-unstyled`) can use a shared trailing arrow icon via CSS pseudo-element for consistent CTA styling.
- When applying global button icons, exclude buttons that already render inline SVG/icons using `:not(:has(.svg-wrapper, svg))` to avoid duplicate icons.
- Use an inline SVG data URI for stable rendering without introducing a new asset request.
