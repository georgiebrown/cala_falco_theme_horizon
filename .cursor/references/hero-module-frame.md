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
