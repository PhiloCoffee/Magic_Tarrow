# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the app

No build step. Open `index.html` directly in a browser, or serve the folder:

```
npx serve .
# or
python -m http.server
```

There are no dependencies, no package.json, no bundler, and no test suite.

## Architecture

Three files, no framework:

- **`app.js`** — all logic. Module-level state (`currentTone`, `currentSpread`, `language`, `activeCards`, `aiFeeling`, `aiSubjects`) is mutated directly. DOM refs are captured once at module scope. The file is structured as: data → state → DOM refs → pure functions → event listeners → initial `drawCards()` call.
- **`index.html`** — layout and a `<template id="cardTemplate">` element that `renderCards()` clones per card via `cloneNode(true)`.
- **`styles.css`** — CSS custom properties at `:root` for the color palette, CSS Grid for the two-panel layout, and `data-count` attribute on `.cards-stage` to switch column layouts (1, 3, or 5 cards).

## Key data shapes

`deck` — array of 22 objects `{ name, keyword, glyph, meaning, index }` (Major Arcana only, coffee/philosophy themed).

`translations` — `{ en: {...}, zh: {...}, it: {...} }` — all UI strings per language, including tone texts (`coffee`, `philosophy`, `community`, `future`), spread position labels, and AI panel copy.

`spreadLabels` — `{ 1: ["Signal"], 3: ["Cup","Question","Action"], 5: ["Ground","Tension","Insight","Practice","Next"] }` — position names used in card rendering and the reading text.

## Card flip mechanic

Cards animate via CSS `rotateY` transitions. `.tarot-card` starts face-down; toggling `.is-revealed` flips both `.card-back` and `.card-front` via `backface-visibility: hidden`. `renderCards()` auto-reveals cards with staggered `setTimeout` (160ms + 170ms × position), and click toggles `.is-revealed` again.

## Language toggle

`language` is `"en"`, `"zh"`, or `"it"`. The toggle cycles through all three via `languageOrder`. Switching re-calls `buildReading()` if cards are active, updates all `[data-i18n]` elements, and re-renders tone/feeling/subject chip labels. The question textarea placeholder is set in HTML (English); it is not re-rendered on toggle — only the reading output text changes.

## AI oracle panel

`buildAIPrompt()` assembles a prompt from the active cards, the question input, `aiFeeling` (single string), `aiSubjects` (a `Set`), and the free-text context field. The prompt instructs the model to speak as a quiet oracle — no bullet points, no numbered lists, ending with one unresolved line. Language detection appends `Respond in Chinese / Italian / English` so the reply matches the current UI language.

Two buttons call `callOracle(model)`: a fast path (`claude-haiku-4-5`) and a slower, more considered path (`claude-sonnet-4-6`). The API key is stored in `localStorage` under `"philo-api-key"` and optionally pre-loaded from `config.local.json` (gitignored) on first visit.

## TODO (from README)

- Auto card-dealing program
- Visualization
- More agentic actions
