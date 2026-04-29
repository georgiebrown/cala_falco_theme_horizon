# Hero Module Frame Pattern

- Use a section-level toggle to enable an inset framed hero card:
  - `enable_module_frame`
  - `module_frame_padding`
  - `module_frame_radius`
  - `module_frame_border_width`
  - `module_frame_border_opacity`
- Apply inset spacing on the hero root container (`padding`) so the module sits inside the section.
- Apply border radius and border on `.hero__container` in a modifier class (`.hero--module-frame`) so media and overlays clip correctly.
- Keep styles variable-driven in the section `style` attribute for per-instance customization.

## Reusable Footer Variation

- For a framed footer treatment, wrap content in a dedicated frame element (for example, `.footer-shell__frame`) rather than applying border directly to the section root.
- Add a section-level `image_picker` setting for a footer-specific logo (for example, `footer_logo`) so merchants can use a different asset than the global theme logo.
- Position the uploaded logo above the frame border using an absolutely positioned wrapper on a relative parent (`.footer-shell`), with `transform: translateY(...)` to overlap the top border.
- When reusing the email signup block inside framed footer layouts, prefer integrated-button input styles with transparent background and absolute button positioning to create an "inside-input" appearance.
