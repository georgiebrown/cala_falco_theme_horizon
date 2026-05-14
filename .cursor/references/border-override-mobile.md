# Border override (mobile)

- Snippet: `snippets/border-override.liquid` — optional settings emit `--border-*-mobile` custom properties only when set.
- CSS: `assets/base.css` — `.border-style` at `max-width: 749px` uses `var(--*-mobile, var(--*))` so each property can override independently.
- Add matching schema fields to a block/section (`border_width_mobile`, `border_mobile`, `border_opacity_mobile`, `border_radius_mobile`). No schema change is required for existing blocks until you want editor controls.
