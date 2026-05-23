# Magic_Tarrow
maybe this repo can bring some luck to our club...

## PhiloCoffee Tarot Studio

This repo now includes a dependency-free interactive website for PhiloCoffee Club:

- asks a club question
- draws 1, 3, or 5 tarot-inspired cards
- connects the spread to coffee, philosophy, and community action
- supports quick English / 中文 reading prompts
- copies a session summary for club notes

Open `index.html` directly in a browser, or host the folder with GitHub Pages.

### Tarot artwork themes

Tarot image themes live under `assets/tarot-themes/`.

- `assets/tarot-themes/themes.json` controls the theme buttons shown in the app.
- `assets/tarot-themes/<theme-id>/manifest.json` documents one theme.
- `assets/tarot-themes/<theme-id>/cards/` stores card images.
- `assets/tarot-themes/<theme-id>/variants/` can keep unused alternates.

The current PhiloCoffee image set was unpacked into:

`assets/tarot-themes/philocoffee/cards/`

A classic Rider-Waite-Smith comparison set was downloaded from Wikimedia Commons into:

`assets/tarot-themes/rider-waite-smith/cards/`

Source: `https://commons.wikimedia.org/wiki/Category:Rider-Waite_tarot_deck`

The 22-card `gpt-image-2` prompt batch lives at:

`tmp/imagegen/philocoffee_tarot_prompts.jsonl`

After setting `OPENAI_API_KEY`, generate the full deck:

```powershell
python C:\Users\everl\.codex\skills\.system\imagegen\scripts\image_gen.py generate-batch --input tmp\imagegen\philocoffee_tarot_prompts.jsonl --out-dir output\imagegen\philocoffee-tarot --concurrency 3
```

The web app automatically uses matching card images from the selected theme. If a card image is missing, it falls back to the built-in symbolic card face.

## 相关产品：
1. 具有心理洞察力的塔罗牌解读专家:
- [塔罗之镜](https://chatgpt.com/g/g-h2ooZocKJ-ta-luo-zhi-jing)
- 这是一个OpenAI社区的GPTs， 由@Tony 建立，实战在社团文化节辅助机器占卜中
- 

## TODO :
- [ ] 实现简单的toy project
- [ ] 考虑自动发牌程序
- [ ] 可视化？
- [ ] more agentic action
