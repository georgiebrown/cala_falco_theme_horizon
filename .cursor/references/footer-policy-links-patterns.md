# Footer Policy Links Patterns

## Single-Section Footer Links

Use `sections/footer.liquid` as the single source of truth for policy/menu links in the frame footer row.

- Do not rely on a separate `footer-utilities` section.
- Render links at the bottom of `.footer-shell__frame` inside a dedicated wrapper.

## Footer Settings

Add these settings on the footer section:

- `footer_link_source` (`policies` | `menu`)
- `footer_links_menu` (`link_list`) shown when source is `menu`
- `footer_links_font_size`
- `footer_links_case`

## Rendering Rules

- Render link row only when links exist:
  - `policies`: `shop.policies.size > 0`
  - `menu`: `footer_links_menu` is selected
- For menu mode iterate `section.settings.footer_links_menu.links`.
- For policy mode iterate `shop.policies`.

## Layout Rules

- Place links row after main `.footer-content` and inside `.footer-shell__frame`.
- Add top divider and spacing (`.footer-shell__policy-links-wrap`).
- Render links as always-visible inline/wrapping list (no hover popover interaction).
