# Sunshine Lake — Brand System

Paste this in as context, then say: **"Use this as the brand system."**
Editorial, understated, confident — *a warm sun over a deep, cool lake.*
Public voice is **thesis-only**: no performance figures, no "global founders" phrasing.

---

## Design tokens (copy directly)

```css
:root{
  /* dark / structural */
  --abyss:#02041F;      /* deepest backgrounds, cosmic sections, footer */
  --navy:#0B1275;       /* = --ink; primary text on light, brand base */
  --ink:#0B1275;
  --ink-2:#1d2a4d;      /* secondary body text */
  --mid-lake:#0A3DAE;   /* subheads, mid-tone fills */
  --cobalt:#155EE8;     /* PRIMARY ACCENT — links, interactive, big numbers */

  /* signature warm — use SPARINGLY, one accent per view */
  --sun:#F2D831;        /* THE signature: eyebrows, highlights, the star */
  --sun-soft:#FFF1B6;
  --cream:#FFFBEB;      /* warm light surface (definition card) */
  --pill:#F6ECC0;

  /* supporting / category tags only */
  --light-blue:#19BDE8;
  --green:#2f9d6f;      /* tag: social / DPI */
  --gold:#BE922A;       /* tag: economic */
  --teal:#2ed9c3; --coral:#f68d6c;

  /* neutrals */
  --muted:#5a6685;      /* labels, captions, tertiary */
  --line:#e7eaf3;       /* hairline borders on light */
  --card:#f6f8fd;       /* light card fill */

  --serif:'DomaineDisp','Times New Roman',Times,serif;  /* display */
  --sans:'Segoe UI',system-ui,-apple-system,sans-serif; /* body */
  --ease:cubic-bezier(0.22,1,0.36,1);
}
```

**Color logic:** navy + cobalt do the work; **sun-yellow is the single signature**, used like a scalpel (eyebrows, one highlighted word, the star) — never more than one accent per section. Green/gold are *only* content tags.

---

## Typography

Display face is **Domaine Display** (a high-contrast editorial serif; substitute a similar serif like *Canela, GT Sectra, Ivar, Playfair* if unavailable). Everything functional is a clean **system sans**.

| Role | Family | Spec |
|---|---|---|
| Display / hero | serif 500 | `clamp(2.6rem,6vw,5rem)`, line-height 1.02, letter-spacing **-0.02em** |
| Section title | serif 500 | ~2–2.4rem, letter-spacing -0.01em |
| Pull-quote | serif 500 | 1.4–2.3rem, line-height 1.3 |
| Big number / stat | serif | 2.4–3.4rem, color **cobalt or sun** |
| **Eyebrow** | sans 700 | **12px, letter-spacing .2em, UPPERCASE**, color cobalt (on light) or sun (on dark) |
| Body | sans 400 | 1–1.2rem, line-height 1.55, color ink-2 |
| Caption / label | sans 600–800 | 11–13px, muted |

The serif carries all the emotion (headlines, quotes, big numbers, names). Short declarative headlines; concrete nouns over adjectives.

---

## Surfaces & gradients

```css
/* cosmic radial — hero / galaxy */      radial-gradient(120% 90% at 50% -10%, #123a86, #0a2258 38%, #050d34 72%, #02041F)
/* testimonial cobalt band */            radial-gradient(120% 100% at 50% 0%, #163a86, #0c2560 46%, #060f30)
/* card panel on dark */                 linear-gradient(158deg, #0c2560, #081a45 52%, #05122f)
/* photo-tile duotone (cobalt) */        linear-gradient(160deg, #22345f, #101f3e)  + multiply cobalt veil
/* light card */                         #f6f8fd
```

- **Radii:** 12–26px (bigger surface → bigger radius).
- **Shadows (soft, low):** dark `0 20px 50px rgba(0,0,0,.3)`; light `0 8px 22px rgba(11,18,117,.07)`.
- **Borders on dark:** `rgba(255,255,255,.12–.16)`; on light: `--line`.
- Pages are light & editorial; feature sections go **deep cosmic navy**.

---

## Signature components

- **Eyebrow + serif title** pairing opens most sections.
- **Buttons:** primary = solid **sun pill** (`background:#F2D831; color:#0a1740; border-radius:999px; font-weight:700`); secondary = outline pill (`1px solid rgba(255,255,255,.4)`).
- **Tags:** small uppercase pills — sun (default), green (social), gold (economic).
- **Quote card:** translucent panel on dark, big sun **"** quotemark, serif quote, then **name (serif) + COMPANY (sun, 800, .15em uppercase)** + role muted. This is the hero pattern for testimonials.
- **Stat block:** giant serif number in cobalt/sun + small uppercase sans label; numbers count up sequentially on reveal.
- **The star / sun mark:** the logo is a sun over lake ripples; as a graphic it's a glowing radial `#fff8d6→#F2D831→#b9791a` orb with a soft yellow halo — used as the "central star."
- **Photo tiles:** candid photos rendered in a **cobalt duotone** with an animated water-caustics shimmer at rest; full color + caption on hover.
- **Light card:** cobalt serif heading + hairline divider + ink-2 body (program cards, LP columns, definitions).

---

## Motion

- **Transitions:** 0.3–0.6s on `cubic-bezier(0.22,1,0.36,1)`. Fades + small translate (8–28px); scale ≤ 1.05.
- **Ambient loops:** slow 6–14s `ease-in-out alternate` — star pulse/nova ring, water caustics, twinkling stars, sequential stat count-ups.
- **Carousels:** page fades to the next; sun progress bar + dots; auto-advance ~6–7s, pause on hover.
- Always respect `prefers-reduced-motion` (drop loops/turbulence).

---

## Voice & guardrails

**Do:** lead with a short serif line + one sans paragraph · use sun-yellow as one accent per view · let whitespace and deep navy breathe · name real people/companies, let quotes be the proof. Recurring motifs: *forged by extreme origins, the spark / the star, out with the old, the aperture, the lake.*

**Don't (public site):** no performance figures / multiples (no "19×", DPI, fund returns) · no "global founders" phrasing or pre-fund seed track record · no more than one accent color per section · no stock-photo gloss (imagery is candid + duotoned).
