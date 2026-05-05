# Content Cards Section Pattern

- Use a dedicated section (`sections/content-cards.liquid`) for numbered/icon cards with a centered heading and intro text.
- Provide per-card visibility toggles (`show_number`, `show_icon`, `show_text`) so merchants can simplify cards without code changes.
- Render uploaded icons at a fixed visual size (28x28) and use `object-fit: contain` so SVG uploads remain sharp and uncropped.
- Alternate card backgrounds with subtle opacity tints to create rhythm while preserving color scheme context.
