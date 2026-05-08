# Footer Policy Links Patterns

## Policy/Menu Source Toggle

In `blocks/footer-policy-list.liquid`, support both built-in shop policies and a custom navigation menu:

- Add `link_source` setting:
  - `policies` (default)
  - `menu`
- Add `custom_menu` (`link_list`) setting visible when `link_source == 'menu'`.

## Rendering Rules

- Render the popover trigger/list only when links exist:
  - `policies`: `shop.policies.size > 0`
  - `menu`: `custom_menu` is selected
- For menu mode, iterate `block.settings.custom_menu.links`.
- For policy mode, iterate `shop.policies`.

This preserves the same footer interaction while allowing merchant-managed menu links instead of policy links.
