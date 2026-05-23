const deck = [
  ["The Fool", "beginner's cup", "0", "Start with sincerity before expertise."],
  ["The Magician", "tools on the table", "*", "Turn beans, questions, and people into a working ritual."],
  ["The High Priestess", "quiet listening", "II", "Let the unsaid part of the room speak first."],
  ["The Empress", "warm hospitality", "III", "Make the gathering generous enough for new voices."],
  ["The Emperor", "structure", "IV", "Give the salon a frame so freedom can survive inside it."],
  ["The Hierophant", "tradition", "V", "Borrow old questions without becoming trapped by them."],
  ["The Lovers", "choice", "VI", "Choose the blend that keeps both taste and truth alive."],
  ["The Chariot", "momentum", "VII", "Move from conversation to a visible club action."],
  ["Strength", "gentle force", "VIII", "Practice courage without making the room hard."],
  ["The Hermit", "single origin", "IX", "A quiet cup may reveal what the group missed."],
  ["Wheel of Fortune", "change", "X", "The next surprise is also material for inquiry."],
  ["Justice", "fair measure", "XI", "Ask who benefits from the current interpretation."],
  ["The Hanged One", "pause", "XII", "Invert the obvious answer and taste it again."],
  ["Death", "release", "XIII", "Let one tired format end so a better ritual can arrive."],
  ["Temperance", "blend", "XIV", "Balance intensity with care, theory with daily life."],
  ["The Devil", "attachment", "XV", "Name the habit that keeps the club circling."],
  ["The Tower", "rupture", "XVI", "When the plan cracks, use the opening honestly."],
  ["The Star", "hope", "XVII", "Keep one practical hope visible on the table."],
  ["The Moon", "ambiguity", "XVIII", "Do not rush mystery into a tidy conclusion."],
  ["The Sun", "clarity", "XIX", "Share the insight plainly enough to invite others in."],
  ["Judgement", "calling", "XX", "Listen for the question the club is becoming."],
  ["The World", "circle", "XXI", "Close the session by returning insight to community."]
];

const cardFiles = [
  "00-the-fool.png",
  "01-the-magician.png",
  "02-the-high-priestess.png",
  "03-the-empress.png",
  "04-the-emperor.png",
  "05-the-hierophant.png",
  "06-the-lovers.png",
  "07-the-chariot.png",
  "08-strength.png",
  "09-the-hermit.png",
  "10-wheel-of-fortune.png",
  "11-justice.png",
  "12-the-hanged-one.png",
  "13-death.png",
  "14-temperance.png",
  "15-the-devil.png",
  "16-the-tower.png",
  "17-the-star.png",
  "18-the-moon.png",
  "19-the-sun.png",
  "20-judgement.png",
  "21-the-world.png"
];

const cardKeys = cardFiles.map((file) => file.replace(/^\d+-/, "").replace(/\.png$/, ""));

const cardDefinitions = deck.map(([name, keyword, glyph, meaning], index) => ({
  name,
  keyword,
  glyph,
  meaning,
  index,
  key: cardKeys[index],
  defaultFile: cardFiles[index]
}));

const zhCards = {
  "the-fool": ["愚者", "初心之杯", "先带着真诚出发，不急着显得专业。"],
  "the-magician": ["魔术师", "桌上的工具", "把咖啡、问题和人变成一场可运作的仪式。"],
  "the-high-priestess": ["女祭司", "安静倾听", "先让房间里没被说出口的部分发声。"],
  "the-empress": ["皇后", "温暖款待", "让聚会足够慷慨，新声音才敢进入。"],
  "the-emperor": ["皇帝", "结构", "给沙龙一个框架，让自由能在其中停留。"],
  "the-hierophant": ["教皇", "传统", "借用古老的问题，但不要被它们困住。"],
  "the-lovers": ["恋人", "选择", "选择一种同时保留风味与真实的混合方式。"],
  "the-chariot": ["战车", "推进", "把谈话推进成一个看得见的社团行动。"],
  "strength": ["力量", "温柔的力量", "练习勇气，但不要让房间变硬。"],
  "the-hermit": ["隐者", "单品思考", "一杯安静的咖啡也许会显出群体漏看的东西。"],
  "wheel-of-fortune": ["命运之轮", "变化", "下一次意外也可以成为讨论材料。"],
  "justice": ["正义", "公平衡量", "追问：当前解释让谁受益？"],
  "the-hanged-one": ["倒吊人", "暂停", "把显而易见的答案倒过来，再尝一次。"],
  "death": ["死神", "释放", "让一个疲惫的形式结束，新的仪式才有空间到来。"],
  "temperance": ["节制", "调和", "在强度与照料、理论与日常之间取得平衡。"],
  "the-devil": ["恶魔", "依附", "说出那个让社团一直原地打转的习惯。"],
  "the-tower": ["高塔", "裂变", "当计划破裂时，诚实地使用那个开口。"],
  "the-star": ["星星", "希望", "让一个实际的希望留在桌面上。"],
  "the-moon": ["月亮", "暧昧", "不要急着把谜团整理成漂亮结论。"],
  "the-sun": ["太阳", "清晰", "把洞见说得足够明白，才能邀请别人加入。"],
  "judgement": ["审判", "召唤", "听见社团正在成为的那个问题。"],
  "the-world": ["世界", "圆满", "把洞见交还给共同体，完成这一次循环。"]
};

const defaultThemes = [
  {
    id: "symbolic",
    label: "Symbolic",
    labelZh: "符号",
    description: "Built-in lightweight symbolic card faces.",
    type: "fallback",
    cards: {}
  },
  {
    id: "philocoffee",
    label: "PhiloCoffee",
    labelZh: "哲咖",
    description: "Coffee, philosophy, and salon-themed Major Arcana artwork.",
    basePath: "assets/tarot-themes/philocoffee/cards",
    cards: Object.fromEntries(cardDefinitions.map((card) => [card.key, card.defaultFile])),
    missing: ["the-hierophant"]
  },
  {
    id: "rider-waite-smith",
    label: "Classic RWS",
    labelZh: "经典 RWS",
    description: "Public-domain Rider-Waite-Smith Major Arcana images from Wikimedia Commons.",
    basePath: "assets/tarot-themes/rider-waite-smith/cards",
    cards: Object.fromEntries(
      cardDefinitions.map((card) => [card.key, card.defaultFile.replace(".png", ".jpg")])
    )
  }
];

const translations = {
  en: {
    questionLabel: "Question for the table",
    questionPlaceholder: "What should our club notice before the next gathering?",
    toneLabel: "Session flavor",
    spreadLabel: "Spread",
    themeLabel: "Deck theme",
    importTheme: "Import theme",
    drawCards: "Draw cards",
    reset: "Reset",
    heroEyebrow: "Where coffee meets philosophy",
    heroTitle: "Turn a club question into a shared ritual.",
    readingLabel: "Reading",
    brewLabel: "Brew prompt",
    agoraLabel: "Agora note",
    notesLabel: "Club notes",
    notesPlaceholder: "Capture a quote, an action item, or a question for the next salon.",
    initialReading: "Pick a question, choose a spread, and draw. The studio will connect tarot imagery with coffee, philosophy, and a small action for the next PhiloCoffee gathering.",
    initialBrew: "A good session begins with one shared cup and one honest question.",
    initialAgora: "Leave space for disagreement; that is where the conversation wakes up.",
    emptyQuestion: "What should PhiloCoffee notice before the next gathering?",
    readingIntro: "For this PhiloCoffee question",
    spreadSays: "the spread says",
    openWith: "Let {first} open the room and let {last} decide the closing action.",
    singleAgora: "Let {card} become one question everyone answers in a single sentence.",
    coffee: "Brew one cup slowly, then let each person name the flavor of the idea before debating it.",
    philosophy: "Ask: what assumption are we drinking so often that we no longer taste it?",
    community: "End with one host, one invitation, and one small experiment for the next meeting.",
    future: "Write the next poster as a question, not a slogan; let curiosity do the recruiting.",
    copied: "Copied summary",
    copy: "Copy summary",
    toneLabels: {
      Coffee: "Coffee",
      Philosophy: "Philosophy",
      Community: "Community",
      Future: "Future"
    },
    spreadLabels: {
      1: ["Signal"],
      3: ["Cup", "Question", "Action"],
      5: ["Ground", "Tension", "Insight", "Practice", "Next"]
    },
    summaryLabels: {
      title: "PhiloCoffee Tarot Studio",
      theme: "Theme",
      question: "Question",
      cards: "Cards",
      noCards: "No cards drawn yet",
      reading: "Reading",
      brew: "Brew prompt",
      agora: "Agora note",
      notes: "Club notes",
      none: "None"
    }
  },
  zh: {
    questionLabel: "\u684c\u9762\u95ee\u9898",
    questionPlaceholder: "\u4e0b\u4e00\u6b21\u54f2\u5496\u805a\u4f1a\u524d\uff0c\u6211\u4eec\u5e94\u8be5\u5148\u770b\u89c1\u4ec0\u4e48\uff1f",
    toneLabel: "\u4f1a\u8bdd\u98ce\u5473",
    spreadLabel: "\u724c\u9635",
    themeLabel: "\u5361\u724c\u4e3b\u9898",
    importTheme: "\u5bfc\u5165\u4e3b\u9898",
    drawCards: "\u62bd\u724c",
    reset: "\u91cd\u7f6e",
    heroEyebrow: "\u5496\u5561\u9047\u5230\u54f2\u5b66\u7684\u5730\u65b9",
    heroTitle: "\u628a\u4e00\u4e2a\u793e\u56e2\u95ee\u9898\uff0c\u53d8\u6210\u4e00\u573a\u5171\u540c\u4eea\u5f0f\u3002",
    readingLabel: "\u724c\u9762\u89e3\u8bfb",
    brewLabel: "\u51b2\u716e\u63d0\u793a",
    agoraLabel: "\u5e7f\u573a\u5907\u6ce8",
    notesLabel: "\u793e\u56e2\u7b14\u8bb0",
    notesPlaceholder: "\u8bb0\u4e0b\u4e00\u53e5\u8bdd\u3001\u4e00\u4e2a\u884c\u52a8\u9879\uff0c\u6216\u4e0b\u6b21\u6c99\u9f99\u7684\u95ee\u9898\u3002",
    initialReading: "\u5199\u4e0b\u4e00\u4e2a\u95ee\u9898\uff0c\u9009\u62e9\u724c\u9635\uff0c\u7136\u540e\u62bd\u724c\u3002\u5de5\u5177\u4f1a\u628a\u5854\u7f57\u610f\u8c61\u4e0e\u5496\u5561\u3001\u54f2\u5b66\u548c\u4e0b\u4e00\u4e2a\u793e\u56e2\u884c\u52a8\u8fde\u8d77\u6765\u3002",
    initialBrew: "\u4e00\u573a\u597d\u8ba8\u8bba\uff0c\u53ef\u4ee5\u4ece\u4e00\u676f\u5171\u4eab\u7684\u5496\u5561\u548c\u4e00\u4e2a\u8bda\u5b9e\u7684\u95ee\u9898\u5f00\u59cb\u3002",
    initialAgora: "\u7ed9\u5206\u6b67\u7559\u51fa\u7a7a\u95f4\uff1b\u8c08\u8bdd\u5f80\u5f80\u5728\u90a3\u91cc\u9192\u6765\u3002",
    emptyQuestion: "\u4e0b\u4e00\u6b21\u54f2\u5496\u805a\u4f1a\u524d\uff0c\u6211\u4eec\u5e94\u8be5\u5148\u770b\u89c1\u4ec0\u4e48\uff1f",
    readingIntro: "\u56f4\u7ed5\u8fd9\u4e2a\u54f2\u5496\u95ee\u9898",
    spreadSays: "\u724c\u9635\u63d0\u793a",
    openWith: "\u8ba9\u300c{first}\u300d\u6253\u5f00\u8fd9\u4e2a\u623f\u95f4\uff0c\u518d\u8ba9\u300c{last}\u300d\u51b3\u5b9a\u6536\u675f\u65f6\u7684\u884c\u52a8\u3002",
    singleAgora: "\u8ba9\u300c{card}\u300d\u53d8\u6210\u4e00\u4e2a\u6bcf\u4e2a\u4eba\u7528\u4e00\u53e5\u8bdd\u56de\u7b54\u7684\u95ee\u9898\u3002",
    coffee: "\u6162\u6162\u51b2\u4e00\u676f\u5496\u5561\uff0c\u8ba9\u6bcf\u4e2a\u4eba\u5148\u8bf4\u51fa\u8fd9\u4e2a\u60f3\u6cd5\u7684\u98ce\u5473\uff0c\u518d\u5f00\u59cb\u8fa9\u8bba\u3002",
    philosophy: "\u8ffd\u95ee\uff1a\u6709\u4ec0\u4e48\u524d\u63d0\u50cf\u65e5\u5e38\u5496\u5561\u4e00\u6837\u88ab\u6211\u4eec\u53cd\u590d\u996e\u7528\uff0c\u5374\u5df2\u7ecf\u5c1d\u4e0d\u51fa\u6765\uff1f",
    community: "\u7528\u4e00\u4e2a\u4e3b\u6301\u4eba\u3001\u4e00\u4e2a\u9080\u8bf7\u5bf9\u8c61\u3001\u4e00\u4e2a\u4e0b\u6b21\u53ef\u6267\u884c\u7684\u5c0f\u5b9e\u9a8c\u6536\u675f\u8ba8\u8bba\u3002",
    future: "\u628a\u4e0b\u4e00\u5f20\u6d77\u62a5\u5199\u6210\u95ee\u9898\uff0c\u800c\u4e0d\u662f\u53e3\u53f7\uff1b\u8ba9\u597d\u5947\u5fc3\u81ea\u5df1\u62db\u52df\u540c\u8def\u4eba\u3002",
    copied: "\u5df2\u590d\u5236\u603b\u7ed3",
    copy: "\u590d\u5236\u603b\u7ed3",
    toneLabels: {
      Coffee: "\u5496\u5561",
      Philosophy: "\u54f2\u5b66",
      Community: "\u793e\u7fa4",
      Future: "\u672a\u6765"
    },
    spreadLabels: {
      1: ["\u4fe1\u53f7"],
      3: ["\u676f", "\u95ee\u9898", "\u884c\u52a8"],
      5: ["\u6839\u57fa", "\u5f20\u529b", "\u6d1e\u89c1", "\u7ec3\u4e60", "\u4e0b\u4e00\u6b65"]
    },
    summaryLabels: {
      title: "\u54f2\u5496\u5854\u7f57\u5de5\u4f5c\u53f0",
      theme: "\u4e3b\u9898",
      question: "\u95ee\u9898",
      cards: "\u724c",
      noCards: "\u5c1a\u672a\u62bd\u724c",
      reading: "\u89e3\u8bfb",
      brew: "\u51b2\u716e\u63d0\u793a",
      agora: "\u5e7f\u573a\u5907\u6ce8",
      notes: "\u793e\u56e2\u7b14\u8bb0",
      none: "\u65e0"
    }
  }
};

const spreadLabels = {
  1: ["Signal"],
  3: ["Cup", "Question", "Action"],
  5: ["Ground", "Tension", "Insight", "Practice", "Next"]
};

let themes = defaultThemes;
let currentThemeId = "philocoffee";
let currentTone = "Coffee";
let currentSpread = 1;
let language = "en";
let activeCards = [];

const cardsStage = document.querySelector("#cardsStage");
const cardTemplate = document.querySelector("#cardTemplate");
const readingText = document.querySelector("#readingText");
const brewPrompt = document.querySelector("#brewPrompt");
const agoraNote = document.querySelector("#agoraNote");
const questionInput = document.querySelector("#question");
const notesInput = document.querySelector("#notes");
const copySummary = document.querySelector("#copySummary");
const themeOptions = document.querySelector("#themeOptions");
const themeImport = document.querySelector("#themeImport");

function normalizeTheme(theme) {
  const cards = theme.cards || {};
  const cardFilesFromArray = Array.isArray(theme.cardFiles)
    ? Object.fromEntries(cardDefinitions.map((card, index) => [card.key, theme.cardFiles[index]]))
    : {};

  return {
    id: theme.id || `theme-${Date.now()}`,
    label: theme.label || theme.name || "Imported",
    labelZh: theme.labelZh || theme.label_zh || "",
    description: theme.description || "",
    type: theme.type || "image",
    basePath: theme.basePath || "",
    cards: { ...cardFilesFromArray, ...cards },
    missing: theme.missing || []
  };
}

async function loadThemeRegistry() {
  try {
    const response = await fetch("assets/tarot-themes/themes.json", { cache: "no-store" });
    if (!response.ok) return;
    const registry = await response.json();
    const registryThemes = Array.isArray(registry.themes) ? registry.themes.map(normalizeTheme) : [];
    if (registryThemes.length) {
      themes = registryThemes;
    }
  } catch {
    themes = defaultThemes;
  }
}

function selectedTheme() {
  return themes.find((theme) => theme.id === currentThemeId) || themes[0] || defaultThemes[0];
}

function themeLabel(theme) {
  if (language === "zh") {
    if (theme.labelZh) return theme.labelZh;
    if (theme.id === "symbolic") return "\u7b26\u53f7";
    if (theme.id === "philocoffee") return "\u54f2\u5496";
    if (theme.id === "rider-waite-smith") return "\u7ecf\u5178 RWS";
  }
  return theme.label;
}

function cardText(card) {
  const zh = zhCards[card.key];
  if (language === "zh" && zh) {
    return {
      name: zh[0],
      keyword: zh[1],
      meaning: zh[2]
    };
  }
  return {
    name: card.name,
    keyword: card.keyword,
    meaning: card.meaning
  };
}

function imageForCard(card) {
  const theme = selectedTheme();
  if (theme.type === "fallback" || theme.missing?.includes(card.key)) {
    return "";
  }

  const file = theme.cards?.[card.key];
  if (!file || !theme.basePath) {
    return "";
  }

  return `${theme.basePath.replace(/\/$/, "")}/${file}`;
}

function renderThemeOptions() {
  themeOptions.innerHTML = "";
  themes.forEach((theme) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `chip${theme.id === currentThemeId ? " is-active" : ""}`;
    button.textContent = themeLabel(theme);
    button.title = theme.description || theme.label;
    button.addEventListener("click", () => {
      currentThemeId = theme.id;
      renderThemeOptions();
      if (activeCards.length) {
        renderCards(activeCards);
      }
    });
    themeOptions.append(button);
  });
}

function applyLanguage() {
  const text = translations[language];
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (text[key]) {
      element.textContent = text[key];
    }
  });

  questionInput.placeholder = text.questionPlaceholder;
  notesInput.placeholder = text.notesPlaceholder;
  copySummary.textContent = text.copy;
  document.querySelector("#resetSession").setAttribute("aria-label", text.reset);
  document.querySelector("#themeOptions").setAttribute("aria-label", text.themeLabel);
  document.querySelector("#toneOptions").setAttribute("aria-label", text.toneLabel);
  document.querySelector("#spreadOptions").setAttribute("aria-label", text.spreadLabel);

  document.querySelectorAll("[data-tone]").forEach((button) => {
    button.textContent = text.toneLabels[button.dataset.tone] || button.dataset.tone;
  });

  renderThemeOptions();
}

function sampleDeck(count) {
  return [...cardDefinitions].sort(() => Math.random() - 0.5).slice(0, count);
}

function setActiveButton(buttons, activeButton) {
  buttons.forEach((button) => button.classList.toggle("is-active", button === activeButton));
}

function renderCards(cards) {
  cardsStage.innerHTML = "";
  cardsStage.dataset.count = String(cards.length);
  const labels = translations[language].spreadLabels[currentSpread] || spreadLabels[currentSpread];

  cards.forEach((card, position) => {
    const localized = cardText(card);
    const node = cardTemplate.content.firstElementChild.cloneNode(true);
    const front = node.querySelector(".card-front");
    const art = node.querySelector(".card-art");
    const image = imageForCard(card);

    node.querySelector(".card-index").textContent = `${String(card.index).padStart(2, "0")} - ${labels[position]}`;
    node.querySelector(".card-glyph").textContent = card.glyph;
    node.querySelector(".card-name").textContent = localized.name;
    node.querySelector(".card-keyword").textContent = localized.keyword;
    art.alt = `${localized.name} ${themeLabel(selectedTheme())} tarot illustration`;

    if (image) {
      art.addEventListener("load", () => front.classList.add("has-art"), { once: true });
      art.addEventListener("error", () => front.classList.remove("has-art"), { once: true });
      art.src = image;
    } else {
      art.removeAttribute("src");
      front.classList.remove("has-art");
    }

    node.addEventListener("click", () => node.classList.toggle("is-revealed"));
    cardsStage.append(node);

    window.setTimeout(() => node.classList.add("is-revealed"), 160 + position * 170);
  });
}

function buildReading(cards) {
  const text = translations[language];
  const question = questionInput.value.trim() || text.emptyQuestion;
  const cardLine = cards
    .map((card, index) => {
      const localized = cardText(card);
      const labels = text.spreadLabels[currentSpread] || spreadLabels[currentSpread];
      return `${labels[index]}: ${localized.name} (${localized.keyword})`;
    })
    .join("; ");
  const meanings = cards.map((card) => cardText(card).meaning).join(" ");
  const first = cardText(cards[0]);
  const last = cardText(cards[cards.length - 1]);

  readingText.textContent = `${text.readingIntro} "${question}", ${text.spreadSays}: ${cardLine}. ${meanings}`;
  brewPrompt.textContent = text[currentTone.toLowerCase()] || text.coffee;
  agoraNote.textContent = cards.length > 1
    ? text.openWith.replace("{first}", first.name).replace("{last}", last.name)
    : text.singleAgora.replace("{card}", first.name);
}

function drawCards() {
  activeCards = sampleDeck(currentSpread);
  renderCards(activeCards);
  buildReading(activeCards);
}

function resetSession() {
  activeCards = [];
  cardsStage.innerHTML = "";
  delete cardsStage.dataset.count;
  questionInput.value = "";
  notesInput.value = "";
  readingText.textContent =
    translations[language].initialReading;
  brewPrompt.textContent = translations[language].initialBrew;
  agoraNote.textContent = translations[language].initialAgora;
}

function currentSummary() {
  const question = questionInput.value.trim() || translations[language].emptyQuestion;
  const text = translations[language].summaryLabels;
  const cards = activeCards.map((card) => {
    const localized = cardText(card);
    return `${localized.name} - ${localized.keyword}`;
  }).join(", ");
  return [
    text.title,
    `${text.theme}: ${themeLabel(selectedTheme())}`,
    `${text.question}: ${question}`,
    `${text.cards}: ${cards || text.noCards}`,
    `${text.reading}: ${readingText.textContent}`,
    `${text.brew}: ${brewPrompt.textContent}`,
    `${text.agora}: ${agoraNote.textContent}`,
    `${text.notes}: ${notesInput.value.trim() || text.none}`
  ].join("\n");
}

async function importTheme(file) {
  const text = await file.text();
  const parsed = JSON.parse(text);
  const incomingThemes = Array.isArray(parsed.themes) ? parsed.themes : [parsed];
  incomingThemes.map(normalizeTheme).forEach((theme) => {
    themes = themes.filter((existing) => existing.id !== theme.id).concat(theme);
    currentThemeId = theme.id;
  });
  renderThemeOptions();
  if (activeCards.length) {
    renderCards(activeCards);
  }
}

document.querySelectorAll("[data-tone]").forEach((button) => {
  button.addEventListener("click", () => {
    currentTone = button.dataset.tone;
    setActiveButton(document.querySelectorAll("[data-tone]"), button);
    if (activeCards.length) buildReading(activeCards);
  });
});

document.querySelectorAll("[data-spread]").forEach((button) => {
  button.addEventListener("click", () => {
    currentSpread = Number(button.dataset.spread);
    setActiveButton(document.querySelectorAll("[data-spread]"), button);
  });
});

document.querySelector("#drawCards").addEventListener("click", drawCards);
document.querySelector("#resetSession").addEventListener("click", resetSession);
document.querySelector("#languageToggle").addEventListener("click", () => {
  language = language === "en" ? "zh" : "en";
  applyLanguage();
  if (activeCards.length) {
    renderCards(activeCards);
    buildReading(activeCards);
  } else {
    resetSession();
  }
});

themeImport.addEventListener("change", async () => {
  const [file] = themeImport.files;
  if (!file) return;
  await importTheme(file);
  themeImport.value = "";
});

copySummary.addEventListener("click", async () => {
  const summary = currentSummary();
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(summary);
  } else {
    notesInput.value = `${notesInput.value.trim()}\n\n${summary}`.trim();
  }
  copySummary.textContent = translations[language].copied;
  window.setTimeout(() => {
    copySummary.textContent = translations[language].copy;
  }, 1200);
});

loadThemeRegistry().finally(() => {
  applyLanguage();
  drawCards();
});
