# Sunshine Lake Capital — project notes

This repo holds the marketing site (`index.html`) and the two pitch decks
(`deck.html` main, `deck2.html` no-SPV variant), plus supporting assets.

## Writing conventions (apply to all user-facing copy)

These rules exist to keep the copy reading as human-written. They apply to
every text section in the site and both decks: headlines, body copy, eyebrows,
captions, pillar text, slide content, and any prose you generate or edit.

- **No em dashes.** Never use the em dash character (`—`, U+2014) in copy.
  Rewrite the sentence with a comma instead. If a comma does not carry the
  break, split it into two sentences or use parentheses. This includes copy
  you generate in JS template literals inside the decks.
- **No en dashes in prose.** Do not use `–` (U+2013) as a sentence break
  either; treat it the same as an em dash and replace it with a comma.
- **Numeric ranges use a plain hyphen.** For values like `1-5`, `2-3x`, or
  `Pre-Seed & Seed`, use a regular hyphen-minus (`-`, U+002D). Never render a
  range with an em dash or en dash.
- When in doubt, prefer the plainest punctuation: comma, period, or a plain
  hyphen. The goal is copy that looks like a person wrote it, not typeset it.

Note: existing files may still contain older em dashes. When you touch a text
section, clean up any em/en dashes in the copy you are already editing; do not
do a blind global find-and-replace across untouched sections unless asked.
