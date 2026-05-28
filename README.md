# Magic_Tarot_Agent

Maybe this repo can bring some luck to our club.

## PhiloCoffee Tarot Studio

Live demo:

```text
https://philocoffee.github.io/Magic_Tarot_Agent/
```

This repo includes a dependency-free interactive website for PhiloCoffee Club:

- asks a club question
- draws 1, 3, or 5 tarot-inspired cards
- randomly reads cards as upright or reversed
- connects the spread to coffee, philosophy, and community action
- supports English, Chinese, and Italian
- supports light, dark, and system display modes
- can be installed to a phone home screen as a lightweight PWA
- uses responsive PhiloCoffee background art with translucent interface panels
- copies a session summary for club notes
- AI oracle reading via Anthropic API — two depths (quick / deep), responds in the current UI language

Open `index.html` directly in a browser, or host the folder with GitHub Pages.

## Local Preview

For desktop development, serve the folder with any static server. One quick option:

```powershell
python -m http.server 4173
```

Then open:

```text
http://localhost:4173/
```

## GitHub Pages Deployment

The app is packaged for GitHub Pages:

- `.nojekyll` disables Jekyll processing.
- `.github/workflows/pages.yml` deploys the static site when `main` changes.
- `manifest.webmanifest` and `service-worker.js` provide installable PWA behavior.
- All asset paths are relative, so the app works under `/Magic_Tarot_Agent/`.
- PhiloCoffee card and background PNGs have lighter JPEG delivery copies; the deploy workflow removes the unreferenced source PNGs from the Pages artifact.

To enable the workflow deployment in GitHub:

1. Open `Settings -> Pages`.
2. Set `Source` to `GitHub Actions`.
3. Push to `main` or run the workflow manually.

Expected public URL:

```text
https://philocoffee.github.io/Magic_Tarot_Agent/
```

The service worker caches the app shell first. Large tarot card images are cached only after they are requested, which keeps the first mobile visit lighter.

## Phone Preview On Local Wi-Fi

For quick phone testing, connect the phone and computer to the same Wi-Fi, then run:

```powershell
.\serve-mobile.ps1
```

The script prints one or more LAN URLs like:

```text
http://192.168.x.x:4173/index.html
```

Open that URL in the phone browser. To use another port:

```powershell
.\serve-mobile.ps1 8080
```

## Background And Display Modes

Responsive light/night backgrounds live in:

```text
assets/backgrounds/philocoffee/
```

Desktop uses the wide images. Mobile uses the portrait images. Dark mode uses the night set.

The page background is composed in `styles.css` as:

1. a soft readability wash
2. the selected background artwork
3. the fallback page gradient

The main workspace, sidebar, inputs, and reading cards use translucent panel colors so the PhiloCoffee paper texture remains visible behind the UI. Tune these CSS variables:

- `--workspace-bg`
- `--panel-bg`
- `--section`
- `--field`
- `--background-wash`

The theme toggle cycles between system, light, and dark modes.

## Tarot Artwork Themes

Tarot image themes live under:

```text
assets/tarot-themes/
```

- `assets/tarot-themes/themes.json` controls the theme buttons shown in the app.
- `assets/tarot-themes/<theme-id>/manifest.json` documents one theme.
- `assets/tarot-themes/<theme-id>/cards/` stores card images.
- `assets/tarot-themes/<theme-id>/variants/` can keep unused alternates.

The current PhiloCoffee image set was unpacked into:

```text
assets/tarot-themes/philocoffee/cards/
```

A classic Rider-Waite-Smith comparison set was downloaded from Wikimedia Commons into:

```text
assets/tarot-themes/rider-waite-smith/cards/
```

Source:

```text
https://commons.wikimedia.org/wiki/Category:Rider-Waite_tarot_deck
```

The 22-card `gpt-image-2` prompt batch lives at:

```text
tmp/imagegen/philocoffee_tarot_prompts.jsonl
```

After setting `OPENAI_API_KEY`, generate the full deck:

```powershell
python C:\Users\everl\.codex\skills\.system\imagegen\scripts\image_gen.py generate-batch --input tmp\imagegen\philocoffee_tarot_prompts.jsonl --out-dir output\imagegen\philocoffee-tarot --concurrency 3
```

The web app automatically uses matching card images from the selected theme. If a card image is missing, it falls back to the built-in symbolic card face.

## AI Oracle Reading

The oracle panel lets a user ask the drawn cards for a personal reading via the Anthropic API.

**Setup:**

1. Get an API key from [console.anthropic.com](https://console.anthropic.com).
2. Click the ⚙ icon in the Oracle panel and paste the key — it is saved only in the browser's `localStorage`.

For local development, you can also drop a `config.local.json` in the repo root (gitignored):

```json
{ "apiKey": "sk-ant-..." }
```

The app loads this key on first visit so you don't have to paste it each time.

**Two reading depths:**

| Button | Model | Best for |
|--------|-------|----------|
| 轻问一声 / A quick read | claude-haiku-4-5 | Fast, lightweight read |
| 细细解读 / A deeper read | claude-sonnet-4-6 | More considered, slower |

The oracle responds in the current UI language (Chinese, English, or Italian).

## Related Inspiration

- Tarot Mirror: https://chatgpt.com/g/g-h2ooZocKJ-ta-luo-zhi-jing
- A community GPT created by Tony, previously used as an assisted tarot-reading tool in club cultural activities.

## TODO

- [ ] Build more playful drawing rituals.
- [ ] Explore automatic card dealing animations.
- [ ] Add more visualization modes.
- [ ] Add more agentic follow-up actions.
