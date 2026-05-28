const deck = [
  ["The Fool", "beginner's cup", "0", { upright: "New beginnings, innocence, spontaneity, a free spirit.", reversed: "Holding back, recklessness, risk-taking." }],
  ["The Magician", "tools on the table", "*", { upright: "Manifestation, resourcefulness, power, inspired action.", reversed: "Manipulation, poor planning, untapped talents." }],
  ["The High Priestess", "quiet listening", "II", { upright: "Intuition, sacred knowledge, divine feminine, the subconscious mind.", reversed: "Secrets, disconnected from intuition, withdrawal and silence." }],
  ["The Empress", "warm hospitality", "III", { upright: "Femininity, beauty, nature, nurturing, abundance.", reversed: "Creative block, dependence on others." }],
  ["The Emperor", "structure", "IV", { upright: "Authority, establishment, structure, a father figure.", reversed: "Domination, excessive control, lack of discipline, inflexibility." }],
  ["The Hierophant", "tradition", "V", { upright: "Spiritual wisdom, religious beliefs, conformity, tradition, institutions.", reversed: "Personal beliefs, freedom, challenging the status quo." }],
  ["The Lovers", "choice", "VI", { upright: "Love, harmony, relationships, values alignment, choices.", reversed: "Self-love, disharmony, imbalance, misalignment of values." }],
  ["The Chariot", "momentum", "VII", { upright: "Control, willpower, success, action, determination.", reversed: "Self-discipline, opposition, lack of direction." }],
  ["Strength", "gentle force", "VIII", { upright: "Strength, courage, patience, control, compassion.", reversed: "Inner strength, self-doubt, low energy, raw emotion." }],
  ["The Hermit", "single origin", "IX", { upright: "Soul-searching, introspection, being alone, inner guidance.", reversed: "Isolation, loneliness, withdrawal." }],
  ["Wheel of Fortune", "change", "X", { upright: "Good luck, karma, life cycles, destiny, a turning point.", reversed: "Bad luck, resistance to change, breaking cycles." }],
  ["Justice", "fair measure", "XI", { upright: "Justice, fairness, truth, cause and effect, law.", reversed: "Unfairness, lack of accountability, dishonesty." }],
  ["The Hanged One", "pause", "XII", { upright: "Pause, surrender, letting go, new perspectives.", reversed: "Delays, resistance, stalling, indecision." }],
  ["Death", "release", "XIII", { upright: "Endings, change, transformation, transition.", reversed: "Resistance to change, personal transformation, inner purging." }],
  ["Temperance", "blend", "XIV", { upright: "Balance, moderation, patience, purpose.", reversed: "Imbalance, excess, self-healing, realignment." }],
  ["The Devil", "attachment", "XV", { upright: "Shadow self, attachment, addiction, restriction, sexuality.", reversed: "Releasing limiting beliefs, exploring dark thoughts, detachment." }],
  ["The Tower", "rupture", "XVI", { upright: "Sudden change, upheaval, chaos, revelation, awakening.", reversed: "Personal transformation, fear of change, averting disaster." }],
  ["The Star", "hope", "XVII", { upright: "Hope, faith, purpose, renewal, spirituality.", reversed: "Lack of faith, despair, self-trust, disconnection." }],
  ["The Moon", "ambiguity", "XVIII", { upright: "Illusion, fear, the unconscious, intuition.", reversed: "Release of fear, repressed emotion, inner confusion." }],
  ["The Sun", "clarity", "XIX", { upright: "Positivity, fun, warmth, success, vitality.", reversed: "Inner child, feeling down, overly optimistic." }],
  ["Judgement", "calling", "XX", { upright: "Judgement, rebirth, inner calling, absolution.", reversed: "Self-doubt, inner critic, ignoring the call." }],
  ["The World", "circle", "XXI", { upright: "Completion, integration, accomplishment, travel.", reversed: "Seeking personal closure, short-cuts, delays." }]
];

const cardFiles = [
  "00-the-fool.jpg",
  "01-the-magician.jpg",
  "02-the-high-priestess.jpg",
  "03-the-empress.jpg",
  "04-the-emperor.jpg",
  "05-the-hierophant.jpg",
  "06-the-lovers.jpg",
  "07-the-chariot.jpg",
  "08-strength.jpg",
  "09-the-hermit.jpg",
  "10-wheel-of-fortune.jpg",
  "11-justice.jpg",
  "12-the-hanged-one.jpg",
  "13-death.jpg",
  "14-temperance.jpg",
  "15-the-devil.jpg",
  "16-the-tower.jpg",
  "17-the-star.jpg",
  "18-the-moon.jpg",
  "19-the-sun.jpg",
  "20-judgement.jpg",
  "21-the-world.jpg"
];

const cardKeys = cardFiles.map((file) => file.replace(/^\d+-/, "").replace(/\.(png|jpe?g)$/i, ""));

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
  "the-fool": ["愚者", "初心之杯", { upright: "新的开始，天真无邪，自发性，自由精神。", reversed: "鲁莽冒进，退缩，过度冒险。" }],
  "the-magician": ["魔术师", "桌上的工具", { upright: "显化，机智，力量，灵感行动。", reversed: "操控，计划不当，才能未被发挥。" }],
  "the-high-priestess": ["女祭司", "安静倾听", { upright: "直觉，神圣知识，神圣女性，潜意识。", reversed: "秘密，与直觉断连，退缩与沉默。" }],
  "the-empress": ["皇后", "温暖款待", { upright: "女性特质，美丽，自然，滋养，富足。", reversed: "创意阻塞，依赖他人。" }],
  "the-emperor": ["皇帝", "结构", { upright: "权威，建立，结构，父亲形象。", reversed: "支配，过度控制，缺乏自律，僵化。" }],
  "the-hierophant": ["教皇", "传统", { upright: "精神智慧，宗教信仰，从众，传统，制度。", reversed: "个人信仰，自由，挑战现状。" }],
  "the-lovers": ["恋人", "选择", { upright: "爱，和谐，关系，价值观对齐，选择。", reversed: "自爱，不和谐，失衡，价值观错位。" }],
  "the-chariot": ["战车", "推进", { upright: "控制，意志力，成功，行动，决心。", reversed: "自律，反对，缺乏方向。" }],
  "strength": ["力量", "温柔的力量", { upright: "力量，勇气，耐心，控制，慈悲。", reversed: "内在力量，自我怀疑，能量低落，原始情绪。" }],
  "the-hermit": ["隐者", "单品思考", { upright: "灵魂探索，内省，独处，内在指引。", reversed: "孤立，孤独，退缩。" }],
  "wheel-of-fortune": ["命运之轮", "变化", { upright: "好运，因果，生命循环，命运，转折点。", reversed: "厄运，抗拒改变，打破循环。" }],
  "justice": ["正义", "公平衡量", { upright: "正义，公平，真理，因果律，法律。", reversed: "不公平，缺乏责任，不诚实。" }],
  "the-hanged-one": ["倒吊人", "暂停", { upright: "暂停，臣服，放手，新视角。", reversed: "延迟，抗拒，拖延，犹豫不决。" }],
  "death": ["死神", "释放", { upright: "结束，改变，转化，过渡。", reversed: "抗拒改变，个人转化，内在净化。" }],
  "temperance": ["节制", "调和", { upright: "平衡，适度，耐心，目标。", reversed: "失衡，过度，自我疗愈，重新调整。" }],
  "the-devil": ["恶魔", "依附", { upright: "阴影自我，依附，成瘾，限制，欲望。", reversed: "释放限制性信念，探索黑暗面，超然。" }],
  "the-tower": ["高塔", "裂变", { upright: "突然改变，动荡，混乱，启示，觉醒。", reversed: "个人转化，害怕改变，化解灾难。" }],
  "the-star": ["星星", "希望", { upright: "希望，信念，目标，更新，灵性。", reversed: "缺乏信念，绝望，自信，断连。" }],
  "the-moon": ["月亮", "暧昧", { upright: "幻象，恐惧，潜意识，直觉。", reversed: "释放恐惧，被压抑的情绪，内在混乱。" }],
  "the-sun": ["太阳", "清晰", { upright: "积极，乐趣，温暖，成功，活力。", reversed: "内在小孩，情绪低落，过度乐观。" }],
  "judgement": ["审判", "召唤", { upright: "审判，重生，内在召唤，赦免。", reversed: "自我怀疑，内在批判，忽视召唤。" }],
  "the-world": ["世界", "圆满", { upright: "完成，整合，成就，旅行。", reversed: "寻求个人圆满，走捷径，延迟。" }]
};

const itCards = {
  "the-fool": ["Il Matto", "coppa dell'inizio", { upright: "Nuovi inizi, innocenza, spontaneit\u00e0, spirito libero.", reversed: "Prudenza eccessiva, avventatezza, assunzione di rischi." }],
  "the-magician": ["Il Mago", "strumenti sul tavolo", { upright: "Manifestazione, intraprendenza, potere, azione ispirata.", reversed: "Manipolazione, pianificazione scarsa, talenti inespressi." }],
  "the-high-priestess": ["La Papessa", "ascolto quieto", { upright: "Intuizione, sapienza sacra, femminile divino, inconscio.", reversed: "Segreti, disconnessione dall'intuizione, ritiro e silenzio." }],
  "the-empress": ["L'Imperatrice", "ospitalit\u00e0 calda", { upright: "Femminil\u00e0, bellezza, natura, nutrimento, abbondanza.", reversed: "Blocco creativo, dipendenza dagli altri." }],
  "the-emperor": ["L'Imperatore", "struttura", { upright: "Autorit\u00e0, stabilit\u00e0, struttura, figura paterna.", reversed: "Dominazione, controllo eccessivo, mancanza di disciplina, inflessibilit\u00e0." }],
  "the-hierophant": ["Il Papa", "tradizione", { upright: "Saggezza spirituale, credenze religiose, conformit\u00e0, tradizione, istituzioni.", reversed: "Credenze personali, libert\u00e0, sfidare lo status quo." }],
  "the-lovers": ["Gli Amanti", "scelta", { upright: "Amore, armonia, relazioni, allineamento di valori, scelte.", reversed: "Amor proprio, disarmonia, squilibrio, disallineamento di valori." }],
  "the-chariot": ["Il Carro", "slancio", { upright: "Controllo, forza di volont\u00e0, successo, azione, determinazione.", reversed: "Autodisciplina, opposizione, mancanza di direzione." }],
  "strength": ["La Forza", "forza gentile", { upright: "Forza, coraggio, pazienza, controllo, compassione.", reversed: "Forza interiore, dubbio di s\u00e9, bassa energia, emozione grezza." }],
  "the-hermit": ["L'Eremita", "origine singola", { upright: "Ricerca dell'anima, introspezione, solitudine, guida interiore.", reversed: "Isolamento, solitudine, ritiro." }],
  "wheel-of-fortune": ["La Ruota", "cambiamento", { upright: "Buona fortuna, karma, cicli della vita, destino, svolta.", reversed: "Malafortuna, resistenza al cambiamento, spezzare i cicli." }],
  "justice": ["La Giustizia", "misura equa", { upright: "Giustizia, equit\u00e0, verit\u00e0, causa ed effetto, legge.", reversed: "Ingiustizia, mancanza di responsabilit\u00e0, disonest\u00e0." }],
  "the-hanged-one": ["L'Appeso", "pausa", { upright: "Pausa, resa, lasciare andare, nuove prospettive.", reversed: "Ritardi, resistenza, temporeggiamento, indecisione." }],
  "death": ["La Morte", "rilascio", { upright: "Fine, cambiamento, trasformazione, transizione.", reversed: "Resistenza al cambiamento, trasformazione personale, purificazione interiore." }],
  "temperance": ["La Temperanza", "miscela", { upright: "Equilibrio, moderazione, pazienza, scopo.", reversed: "Squilibrio, eccesso, autoguarigione, riallineamento." }],
  "the-devil": ["Il Diavolo", "attaccamento", { upright: "Io-ombra, attaccamento, dipendenza, limitazione, sessualit\u00e0.", reversed: "Liberarsi da credenze limitanti, esplorare pensieri oscuri, distacco." }],
  "the-tower": ["La Torre", "rottura", { upright: "Cambiamento improvviso, sconvolgimento, caos, rivelazione, risveglio.", reversed: "Trasformazione personale, paura del cambiamento, scongiurare il disastro." }],
  "the-star": ["La Stella", "speranza", { upright: "Speranza, fede, scopo, rinnovamento, spiritualit\u00e0.", reversed: "Mancanza di fede, disperazione, fiducia in s\u00e9, disconnessione." }],
  "the-moon": ["La Luna", "ambiguit\u00e0", { upright: "Illusione, paura, inconscio, intuizione.", reversed: "Liberazione dalla paura, emozione repressa, confusione interiore." }],
  "the-sun": ["Il Sole", "chiarezza", { upright: "Positivit\u00e0, divertimento, calore, successo, vitalit\u00e0.", reversed: "Il bambino interiore, senso di abbattimento, eccessivo ottimismo." }],
  "judgement": ["Il Giudizio", "chiamata", { upright: "Giudizio, rinascita, chiamata interiore, assoluzione.", reversed: "Dubbio di s\u00e9, critico interiore, ignorare la chiamata." }],
  "the-world": ["Il Mondo", "cerchio", { upright: "Completamento, integrazione, realizzazione, viaggio.", reversed: "Ricerca di chiusura personale, scorciatoie, ritardi." }]
};

const defaultThemes = [
  {
    id: "symbolic",
    label: "Symbolic",
    labelZh: "符号",
    labelIt: "Simbolico",
    description: "Built-in lightweight symbolic card faces.",
    type: "fallback",
    cards: {}
  },
  {
    id: "philocoffee",
    label: "PhiloCoffee",
    labelZh: "哲咖",
    labelIt: "PhiloCoffee",
    description: "Coffee, philosophy, and salon-themed Major Arcana artwork.",
    basePath: "assets/tarot-themes/philocoffee/cards",
    imageFit: "cover",
    cards: Object.fromEntries(cardDefinitions.map((card) => [card.key, card.defaultFile]))
  },
  {
    id: "rider-waite-smith",
    label: "Classic RWS",
    labelZh: "经典 RWS",
    labelIt: "RWS classico",
    description: "Public-domain Rider-Waite-Smith Major Arcana images from Wikimedia Commons.",
    basePath: "assets/tarot-themes/rider-waite-smith/cards",
    imageFit: "contain",
    cards: Object.fromEntries(
      cardDefinitions.map((card) => [card.key, card.defaultFile])
    )
  }
];

const translations = {
  en: {
    appTitle: "Tarot Studio",
    questionLabel: "Question for the table",
    questionPlaceholder: "What should our club notice before the next gathering?",
    toneLabel: "Session flavor",
    spreadLabel: "Spread",
    themeLabel: "Deck theme",
    importTheme: "Import theme",
    drawCards: "Draw cards",
    reset: "Reset",
    themeModeSystem: "System",
    themeModeLight: "Light",
    themeModeDark: "Dark",
    heroEyebrow: "Where coffee meets philosophy",
    heroTitle: "Turn a club question into a shared ritual.",
    readingLabel: "The Cards",
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
    upright: "upright",
    reversed: "reversed",
    orientationAdvice: {
      upright: "Read this as a direct invitation.",
      reversed: "Read this as a blocked, delayed, or inward-facing version of the card."
    },
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
    },
    aiReadingLabel: "The Oracle",
    aiKeyLabel: "Anthropic API key",
    aiKeyHint: "Your key is stored only in this browser. Calls go directly to Anthropic.",
    aiFeelingLabel: "Your present state",
    aiSubjectLabel: "This reading concerns",
    aiContextLabel: "What else you carry",
    aiContextPlaceholder: "Anything else pressing on you...",
    askCards: "A quick read",
    aiResponseLabel: "Oracle reading",
    aiLoading: "Reading the spread…",
    aiError: "Could not reach the oracle. Check your API key.",
    aiFeelings: { great: "Light", good: "Open", neutral: "Steady", unsettled: "Stirred", struggling: "Heavy" },
    aiSubjects: { work: "Work", study: "Study", research: "Research", love: "Love", life: "Life" },
    askCardsSmart: "A deeper read"
  },
  zh: {
    appTitle: "\u5854\u7f57\u5de5\u4f5c\u53f0",
    questionLabel: "\u684c\u9762\u95ee\u9898",
    questionPlaceholder: "\u4e0b\u4e00\u6b21\u54f2\u5496\u805a\u4f1a\u524d\uff0c\u6211\u4eec\u5e94\u8be5\u5148\u770b\u89c1\u4ec0\u4e48\uff1f",
    toneLabel: "\u4f1a\u8bdd\u98ce\u5473",
    spreadLabel: "\u724c\u9635",
    themeLabel: "\u5361\u724c\u4e3b\u9898",
    importTheme: "\u5bfc\u5165\u4e3b\u9898",
    drawCards: "\u62bd\u724c",
    reset: "\u91cd\u7f6e",
    themeModeSystem: "\u8ddf\u968f\u7cfb\u7edf",
    themeModeLight: "\u6d45\u8272",
    themeModeDark: "\u6df1\u8272",
    heroEyebrow: "\u5496\u5561\u9047\u5230\u54f2\u5b66\u7684\u5730\u65b9",
    heroTitle: "\u628a\u4e00\u4e2a\u793e\u56e2\u95ee\u9898\uff0c\u53d8\u6210\u4e00\u573a\u5171\u540c\u4eea\u5f0f\u3002",
    readingLabel: "\u8fd9\u6b21\u7684\u724c",
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
    upright: "\u6b63\u4f4d",
    reversed: "\u9006\u4f4d",
    orientationAdvice: {
      upright: "\u8fd9\u5f20\u724c\u4ee5\u76f4\u63a5\u7684\u9080\u8bf7\u51fa\u73b0\u3002",
      reversed: "\u8fd9\u5f20\u724c\u63d0\u793a\u88ab\u963b\u6ede\u3001\u5ef6\u8fdf\u6216\u8f6c\u5411\u5185\u5728\u7684\u7248\u672c\u3002"
    },
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
    },
    aiReadingLabel: "\u7075\u611f\u89e3\u8bfb",
    aiKeyLabel: "Anthropic API \u5bc6\u94a5",
    aiKeyHint: "\u5bc6\u94a5\u4ec5\u5b58\u50a8\u5728\u672c\u5730\u6d4f\u89c8\u5668\u4e2d\uff0c\u8c03\u7528\u76f4\u63a5\u53d1\u5411 Anthropic\u3002",
    aiFeelingLabel: "\u6b64\u523b\u7684\u5fc3\u5883",
    aiSubjectLabel: "\u8fd9\u6b21\u5173\u4e8e",
    aiContextLabel: "\u8fd8\u60f3\u8bf4\u7684",
    aiContextPlaceholder: "\u5fc3\u91cc\u8fd8\u538b\u7740\u4ec0\u4e48\uff0c\u90fd\u53ef\u4ee5\u8bf4\u2026",
    askCards: "\u8f7b\u95ee\u4e00\u58f0",
    aiResponseLabel: "\u795e\u8c15\u89e3\u8bfb",
    aiLoading: "\u724c\u6b63\u5728\u5f00\u53e3\u2026\u2026",
    aiError: "\u65e0\u6cd5\u8fde\u63a5\u795e\u8c15\uff0c\u8bf7\u68c0\u67e5 API \u5bc6\u94a5\u3002",
    aiFeelings: { great: "\u8f7b\u76c8", good: "\u8212\u5c55", neutral: "\u5e73\u9759", unsettled: "\u6270\u52a8", struggling: "\u6c89\u91cd" },
    aiSubjects: { work: "\u5de5\u4f5c", study: "\u5b66\u4e60", research: "\u7814\u7a76", love: "\u611f\u60c5", life: "\u751f\u6d3b" },
    askCardsSmart: "\u7ec6\u7ec6\u89e3\u8bfb"
  },
  it: {
    appTitle: "Studio dei Tarocchi",
    questionLabel: "Domanda per il tavolo",
    questionPlaceholder: "Che cosa dovrebbe notare PhiloCoffee prima del prossimo incontro?",
    toneLabel: "Tono della sessione",
    spreadLabel: "Stesa",
    themeLabel: "Tema del mazzo",
    importTheme: "Importa tema",
    drawCards: "Pesca carte",
    reset: "Azzera",
    themeModeSystem: "Sistema",
    themeModeLight: "Chiaro",
    themeModeDark: "Scuro",
    heroEyebrow: "Dove il caff\u00e8 incontra la filosofia",
    heroTitle: "Trasforma una domanda del club in un rito condiviso.",
    readingLabel: "Le carte",
    brewLabel: "Spunto di infusione",
    agoraLabel: "Nota dell'agora",
    notesLabel: "Note del club",
    notesPlaceholder: "Annota una citazione, un'azione o una domanda per il prossimo salotto.",
    initialReading: "Scrivi una domanda, scegli una stesa e pesca. Lo studio collegher\u00e0 immagini dei tarocchi, caff\u00e8, filosofia e una piccola azione per il prossimo incontro PhiloCoffee.",
    initialBrew: "Una buona sessione comincia con una tazza condivisa e una domanda onesta.",
    initialAgora: "Lascia spazio al disaccordo; spesso la conversazione si sveglia proprio l\u00ec.",
    emptyQuestion: "Che cosa dovrebbe notare PhiloCoffee prima del prossimo incontro?",
    readingIntro: "Per questa domanda PhiloCoffee",
    spreadSays: "la stesa suggerisce",
    upright: "diritta",
    reversed: "rovesciata",
    orientationAdvice: {
      upright: "Leggila come un invito diretto.",
      reversed: "Leggila come una versione bloccata, ritardata o rivolta verso l'interno della carta."
    },
    openWith: "Lascia che {first} apra la stanza e che {last} decida l'azione di chiusura.",
    singleAgora: "Lascia che {card} diventi una domanda a cui ognuno risponde in una frase.",
    coffee: "Prepara una tazza lentamente, poi lascia che ognuno nomini il sapore dell'idea prima di discuterla.",
    philosophy: "Chiedi: quale presupposto beviamo cos\u00ec spesso da non sentirne pi\u00f9 il gusto?",
    community: "Concludi con un facilitatore, un invito e un piccolo esperimento per il prossimo incontro.",
    future: "Scrivi il prossimo poster come una domanda, non come uno slogan; lascia che la curiosit\u00e0 recluti.",
    copied: "Riepilogo copiato",
    copy: "Copia riepilogo",
    toneLabels: {
      Coffee: "Caff\u00e8",
      Philosophy: "Filosofia",
      Community: "Comunit\u00e0",
      Future: "Futuro"
    },
    spreadLabels: {
      1: ["Segnale"],
      3: ["Tazza", "Domanda", "Azione"],
      5: ["Base", "Tensione", "Intuizione", "Pratica", "Prossimo"]
    },
    summaryLabels: {
      title: "Studio Tarocchi PhiloCoffee",
      theme: "Tema",
      question: "Domanda",
      cards: "Carte",
      noCards: "Nessuna carta pescata",
      reading: "Lettura",
      brew: "Spunto di infusione",
      agora: "Nota dell'agora",
      notes: "Note del club",
      none: "Nessuna"
    },
    aiReadingLabel: "L'Oracolo",
    aiKeyLabel: "Chiave API Anthropic",
    aiKeyHint: "La chiave è salvata solo in questo browser. Le chiamate vanno direttamente ad Anthropic.",
    aiFeelingLabel: "Il tuo stato d'animo",
    aiSubjectLabel: "Questa lettura riguarda",
    aiContextLabel: "Cos'altro porti con te",
    aiContextPlaceholder: "Qualcos'altro che ti pesa…",
    askCards: "Una lettura rapida",
    aiResponseLabel: "Lettura oracolare",
    aiLoading: "Leggendo i tarocchi…",
    aiError: "Impossibile raggiungere l'oracolo. Controlla la tua chiave API.",
    aiFeelings: { great: "Leggero", good: "Aperto", neutral: "Stabile", unsettled: "Mosso", struggling: "Pesante" },
    aiSubjects: { work: "Lavoro", study: "Studio", research: "Ricerca", love: "Amore", life: "Vita" },
    askCardsSmart: "Una lettura più profonda"
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
const languageOrder = ["en", "zh", "it"];
let activeCards = [];

let aiFeeling = "";
let aiSubjects = new Set();

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
const themeModeToggle = document.querySelector("#themeModeToggle");
const themeModes = ["system", "light", "dark"];
let themeMode = localStorage.getItem("philo-theme-mode") || "system";

const aiSettingsToggle = document.querySelector("#aiSettingsToggle");
const aiSettingsPanel = document.querySelector("#aiSettings");
const apiKeyInput = document.querySelector("#apiKey");
const askCardsBtn = document.querySelector("#askCards");
const aiResponseEl = document.querySelector("#aiResponse");
const aiResponseText = document.querySelector("#aiResponseText");
const aiContextInput = document.querySelector("#aiContext");

function normalizeTheme(theme) {
  const cards = theme.cards || {};
  const cardFilesFromArray = Array.isArray(theme.cardFiles)
    ? Object.fromEntries(cardDefinitions.map((card, index) => [card.key, theme.cardFiles[index]]))
    : {};

  return {
    id: theme.id || `theme-${Date.now()}`,
    label: theme.label || theme.name || "Imported",
    labelZh: theme.labelZh || theme.label_zh || "",
    labelIt: theme.labelIt || theme.label_it || "",
    description: theme.description || "",
    type: theme.type || "image",
    basePath: theme.basePath || "",
    imageFit: theme.imageFit === "contain" ? "contain" : "cover",
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
  if (language === "it") {
    if (theme.labelIt) return theme.labelIt;
    if (theme.id === "symbolic") return "Simbolico";
    if (theme.id === "philocoffee") return "PhiloCoffee";
    if (theme.id === "rider-waite-smith") return "RWS classico";
  }
  return theme.label;
}

function cardText(card) {
  const orientation = card.orientation || "upright";
  function pickMeaning(raw) {
    return raw && typeof raw === "object" ? (raw[orientation] || raw.upright) : raw;
  }
  const zh = zhCards[card.key];
  if (language === "zh" && zh) {
    return { name: zh[0], keyword: zh[1], meaning: pickMeaning(zh[2]) };
  }
  const it = itCards[card.key];
  if (language === "it" && it) {
    return { name: it[0], keyword: it[1], meaning: pickMeaning(it[2]) };
  }
  return { name: card.name, keyword: card.keyword, meaning: pickMeaning(card.meaning) };
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
  const htmlLang = {
    en: "en",
    zh: "zh-CN",
    it: "it"
  };
  document.documentElement.lang = htmlLang[language] || "en";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (text[key]) {
      element.textContent = text[key];
    }
  });

  questionInput.placeholder = text.questionPlaceholder;
  notesInput.placeholder = text.notesPlaceholder;
  document.querySelector("#languageToggle").textContent = "EN / 中文 / IT";
  copySummary.textContent = text.copy;
  document.querySelector("#resetSession").setAttribute("aria-label", text.reset);
  document.querySelector("#themeOptions").setAttribute("aria-label", text.themeLabel);
  document.querySelector("#toneOptions").setAttribute("aria-label", text.toneLabel);
  document.querySelector("#spreadOptions").setAttribute("aria-label", text.spreadLabel);

  document.querySelectorAll("[data-tone]").forEach((button) => {
    button.textContent = text.toneLabels[button.dataset.tone] || button.dataset.tone;
  });

  document.querySelectorAll("[data-feeling]").forEach((button) => {
    button.textContent = text.aiFeelings?.[button.dataset.feeling] || button.dataset.feeling;
  });

  document.querySelectorAll("[data-subject]").forEach((button) => {
    button.textContent = text.aiSubjects?.[button.dataset.subject] || button.dataset.subject;
  });

  if (aiContextInput) aiContextInput.placeholder = text.aiContextPlaceholder || "";

  renderThemeOptions();
  updateThemeModeButton();
}

function preferredDarkMode() {
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches;
}

function applyThemeMode() {
  const resolvedTheme = themeMode === "system"
    ? (preferredDarkMode() ? "dark" : "light")
    : themeMode;
  document.documentElement.dataset.theme = resolvedTheme;
  updateThemeModeButton();
}

function updateThemeModeButton() {
  const text = translations[language];
  const labels = {
    system: text.themeModeSystem,
    light: text.themeModeLight,
    dark: text.themeModeDark
  };
  const icons = {
    system: "◐",
    light: "☼",
    dark: "☾"
  };
  themeModeToggle.textContent = icons[themeMode];
  themeModeToggle.title = labels[themeMode];
  themeModeToggle.setAttribute("aria-label", labels[themeMode]);
}

function sampleDeck(count) {
  return [...cardDefinitions]
    .sort(() => Math.random() - 0.5)
    .slice(0, count)
    .map((card) => ({
      ...card,
      orientation: Math.random() > 0.5 ? "upright" : "reversed"
    }));
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
    const isReversed = card.orientation === "reversed";
    const fit = selectedTheme().imageFit === "contain" ? "contain" : "cover";

    node.classList.toggle("is-reversed", isReversed);
    front.dataset.fit = fit;
    node.querySelector(".card-index").textContent = `${String(card.index).padStart(2, "0")} - ${labels[position]}`;
    node.querySelector(".card-glyph").textContent = card.glyph;
    node.querySelector(".card-name").textContent = localized.name;
    node.querySelector(".card-keyword").textContent = localized.keyword;
    art.alt = `${localized.name} ${themeLabel(selectedTheme())} tarot illustration`;
    art.loading = position === 0 ? "eager" : "lazy";
    art.decoding = "async";
    art.fetchPriority = position === 0 ? "high" : "auto";

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
      const orientation = text[card.orientation] || text.upright;
      return `${labels[index]}: ${localized.name} ${orientation} (${localized.keyword})`;
    })
    .join("; ");
  const meanings = cards
    .map((card) => {
      const localized = cardText(card);
      return localized.meaning;
    })
    .join(" ");
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
  updateAskButton();
}

function resetSession() {
  activeCards = [];
  cardsStage.innerHTML = "";
  delete cardsStage.dataset.count;
  questionInput.value = "";
  notesInput.value = "";
  readingText.textContent = translations[language].initialReading;
  brewPrompt.textContent = translations[language].initialBrew;
  agoraNote.textContent = translations[language].initialAgora;
  aiResponseEl.hidden = true;
  aiResponseText.textContent = "";
  updateAskButton();
}

function currentSummary() {
  const question = questionInput.value.trim() || translations[language].emptyQuestion;
  const text = translations[language].summaryLabels;
  const cards = activeCards.map((card) => {
    const localized = cardText(card);
    const orientation = translations[language][card.orientation] || translations[language].upright;
    return `${localized.name} ${orientation} - ${localized.keyword}`;
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

async function loadLocalConfig() {
  try {
    const res = await fetch("config.local.json", { cache: "no-store" });
    if (!res.ok) return;
    const cfg = await res.json();
    if (cfg.apiKey && !localStorage.getItem("philo-api-key")) {
      localStorage.setItem("philo-api-key", cfg.apiKey);
      apiKeyInput.value = cfg.apiKey;
      updateAskButton();
    }
  } catch {
    // no local config present, that's fine
  }
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator) || !window.isSecureContext) {
    return;
  }

  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
  });
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
  const nextIndex = (languageOrder.indexOf(language) + 1) % languageOrder.length;
  language = languageOrder[nextIndex];
  applyLanguage();
  if (activeCards.length) {
    renderCards(activeCards);
    buildReading(activeCards);
  } else {
    resetSession();
  }
});

themeModeToggle.addEventListener("click", () => {
  const nextIndex = (themeModes.indexOf(themeMode) + 1) % themeModes.length;
  themeMode = themeModes[nextIndex];
  localStorage.setItem("philo-theme-mode", themeMode);
  applyThemeMode();
});

const colorSchemeQuery = window.matchMedia?.("(prefers-color-scheme: dark)");
colorSchemeQuery?.addEventListener?.("change", () => {
  if (themeMode === "system") {
    applyThemeMode();
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

function updateAskButton() {
  const hasKey = !!(localStorage.getItem("philo-api-key") || "").trim();
  const canAsk = hasKey && activeCards.length > 0;
  askCardsBtn.disabled = !canAsk;
  smarterBtn.disabled = !canAsk;
}

function buildAIPrompt() {
  const text = translations[language];
  const question = questionInput.value.trim() || text.emptyQuestion;
  const spreadName = currentSpread === 1 ? "single card" : `${currentSpread}-card spread`;
  const positionLabels = text.spreadLabels[currentSpread];

  const cardLines = activeCards.map((card, i) => {
    const loc = cardText(card);
    const orient = text[card.orientation] || "upright";
    return `  ${positionLabels[i]}: ${loc.name} (${orient}) — ${loc.meaning}`;
  }).join("\n");

  const feelingLine = aiFeeling ? `Present state: ${aiFeeling}` : "";
  const subjectLine = aiSubjects.size ? `Concerns: ${[...aiSubjects].join(", ")}` : "";
  const contextLine = aiContextInput.value.trim() ? aiContextInput.value.trim() : "";
  const userContext = [feelingLine, subjectLine, contextLine].filter(Boolean).join("\n");

  const langInstruction = language === "zh"
    ? "Respond in Chinese (中文)."
    : language === "it"
    ? "Respond in Italian (italiano)."
    : "Respond in English.";

  return `You are a quiet, perceptive tarot reader. You do not offer advice — you read what the cards reveal.

A querent has brought a question. Sit with it before speaking.

Question: "${question}"
${userContext ? `\n${userContext}\n` : ""}
Cards drawn (${spreadName}):
${cardLines}

Speak directly to this person — use "you", not "the querent". Be precise and unhurried. Let the imagery lead; notice the tension between cards, what wants to surface, what remains unspoken.

Do not use bullet points or numbered lists. Do not explain tarot terminology. Do not prescribe. Let mystery live in the spaces between your sentences.

End with a single line — something they can carry without fully grasping. Something revealed, not concluded.

${langInstruction}`;
}

const smarterBtn = document.querySelector("#askCardsSmart");

async function callOracle(model, triggerBtn, loadingKey) {
  const apiKey = (localStorage.getItem("philo-api-key") || "").trim();
  if (!apiKey || !activeCards.length) return;

  const text = translations[language];
  askCardsBtn.disabled = true;
  smarterBtn.disabled = true;
  triggerBtn.textContent = text.aiLoading;
  aiResponseEl.hidden = false;
  aiResponseText.textContent = "";
  aiResponseText.classList.add("is-loading");
  aiResponseEl.scrollIntoView({ behavior: "smooth", block: "nearest" });

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
        "anthropic-dangerous-direct-browser-access": "true"
      },
      body: JSON.stringify({
        model,
        max_tokens: 1024,
        messages: [{ role: "user", content: buildAIPrompt() }]
      })
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      throw new Error(err.error?.message || `HTTP ${response.status}`);
    }

    const data = await response.json();
    aiResponseText.textContent = data.content?.[0]?.text || "";
    const header = aiResponseEl.querySelector(".ai-response-header");
    let modelTag = header.querySelector(".ai-model-tag");
    if (!modelTag) {
      modelTag = document.createElement("span");
      modelTag.className = "ai-model-tag";
      header.append(modelTag);
    }
    modelTag.textContent = model.includes("sonnet") ? "Sonnet 4.6" : "Haiku 4.5";
  } catch (err) {
    aiResponseText.textContent = `${text.aiError} (${err.message})`;
  } finally {
    aiResponseText.classList.remove("is-loading");
    askCardsBtn.disabled = false;
    smarterBtn.disabled = false;
    askCardsBtn.textContent = text.askCards;
    smarterBtn.textContent = text.askCardsSmart;
  }
}

function askCards() {
  callOracle("claude-haiku-4-5-20251001", askCardsBtn, "askCards");
}

function askCardsSmart() {
  callOracle("claude-sonnet-4-6", smarterBtn, "askCardsSmart");
}

apiKeyInput.value = localStorage.getItem("philo-api-key") || "";
apiKeyInput.addEventListener("input", () => {
  localStorage.setItem("philo-api-key", apiKeyInput.value.trim());
  updateAskButton();
});

aiSettingsToggle.addEventListener("click", () => {
  aiSettingsPanel.hidden = !aiSettingsPanel.hidden;
});

document.querySelectorAll("[data-feeling]").forEach((btn) => {
  btn.addEventListener("click", () => {
    aiFeeling = btn.dataset.feeling === aiFeeling ? "" : btn.dataset.feeling;
    document.querySelectorAll("[data-feeling]").forEach((b) => {
      b.classList.toggle("is-active", b.dataset.feeling === aiFeeling);
    });
  });
});

document.querySelectorAll("[data-subject]").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (aiSubjects.has(btn.dataset.subject)) {
      aiSubjects.delete(btn.dataset.subject);
      btn.classList.remove("is-active");
    } else {
      aiSubjects.add(btn.dataset.subject);
      btn.classList.add("is-active");
    }
  });
});

askCardsBtn.addEventListener("click", askCards);
smarterBtn.addEventListener("click", askCardsSmart);

loadThemeRegistry().finally(() => {
  applyThemeMode();
  applyLanguage();
  drawCards();
  loadLocalConfig();
});
registerServiceWorker();
