# Section Intro Pattern

## Goal
Add an optional centered heading and description above section content without creating a new section type.

## Implementation
- Add section-level settings in `sections/section.liquid`:
  - `show_intro` (`checkbox`)
  - `intro_heading` (`text`)
  - `intro_description` (`richtext`)
- In `snippets/section.liquid`, render intro markup before the content container when enabled and non-empty.
- Keep intro styling scoped to `.custom-section__intro` and centered with a readable max width.

## Notes
- Liquid conditionals in theme files should avoid grouped boolean expressions with parentheses for better theme-check compatibility.
- Use nested `if` statements for combined checks (`show_intro` + non-blank heading/description).
