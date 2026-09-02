// Static, in-code content (hybrid model): stable brand copy + fallbacks used
// when the matching Contentful entries are empty. Contact details also live in
// Contentful (`siteSettings`) so the client can edit them without code changes.

export const DEFAULT_SETTINGS = {
  phone: "+380 68 231 2476",
  email: "mriiudii@gmail.com",
  leaderEmail: "olehboyanovich@gmail.com",
  legalAddress:
    "32331, Хмельницька область, Кам'янець-Подільський район, с. Оринин, вул. Тараса Шевченка, 154А",
  // Social links have no in-code fallback: they render only when the matching
  // Contentful `siteSettings` fields are filled, and hide otherwise.
  facebookUrl: "",
  facebookTitle: "",
  instagramUrl: "",
}

// Merge Contentful settings over the defaults, ignoring empty values.
export const resolveSettings = (settings = {}) => {
  const merged = { ...DEFAULT_SETTINGS }
  Object.entries(settings || {}).forEach(([key, value]) => {
    if (value) merged[key] = value
  })
  return merged
}

export const telHref = phone => `tel:${(phone || "").replace(/[^\d+]/g, "")}`

// Mission & vision statements — the two anchor statements shown in "About".
export const MISSION =
  "Допомагати людям у малих і сільських громадах навчатися, розвивати ідеї, отримувати підтримку та перетворювати мрії на практичні дії, що зміцнюють їхнє життя і громаду."

export const VISION =
  "Малі й сільські громади України, у яких діти, молодь і дорослі мають доступ до можливостей, здатні впливати на рішення та разом створюють стійке майбутнє, залишаючись у громаді."

// Five values from the brief (section 21).
export const VALUES = [
  {
    title: "Людина",
    text: "Спочатку бачимо людину, її потребу, потенціал і гідність.",
  },
  {
    title: "Дія",
    text: "Ідея має цінність тоді, коли переходить у практичний крок.",
  },
  {
    title: "Відповідальність",
    text: "Беремо відповідальність за рішення, ресурси та результати.",
  },
  {
    title: "Партнерство",
    text: "Стійкі зміни неможливо створити самостійно.",
  },
  {
    title: "Розвиток",
    text: "Допомога має не створювати залежність, а збільшувати спроможність людини та громади.",
  },
]

// Two strategic directions (brief section 6) — shown as large cards.
export const STRATEGIC_DIRECTIONS = [
  {
    tag: "Стратегічний фокус",
    title: "Молодь: лідерство, команда, менторство",
    text: "Розвиваємо лідерські навички та вміння працювати в команді, підтримуємо менторством і експертним супроводом, а молодіжне підприємництво розглядаємо як продукт діяльності — ресурс, щоб продовжувати роботу.",
    points: [
      "Лідерські навички та особистісний розвиток",
      "Командотворення та спільна робота над ідеями",
      "Менторство й експертний супровід — для молодої людини, організації та громади",
      "Молодіжне підприємництво як продукт діяльності й ресурс для продовження роботи",
    ],
  },
  {
    tag: "Стратегічний фокус",
    title: "Стійкі та активні громади",
    text: "Волонтерство, громадська участь, підтримка дітей і сімей, локальні ініціативи та партнерство громади, бізнесу й громадянського суспільства.",
    points: [
      "Волонтерство та громадська участь",
      "Підтримка дітей, сімей і локальних ініціатив",
      "Спроможність малих і сільських громад",
    ],
  },
]

// Flagship programme in development (brief section 15) — steps of the model.
export const FLAGSHIP_STEPS = [
  "Побачити проблему",
  "Сформувати ідею",
  "Створити команду",
  "Розробити рішення",
  "Створити прототип",
  "Протестувати",
  "Презентувати партнерам",
  "Реалізувати",
]
