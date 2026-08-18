// Static, in-code content (hybrid model): stable brand copy + fallbacks used
// when the matching Contentful entries are empty. Contact details also live in
// Contentful (`siteSettings`) so the client can edit them without code changes.

export const DEFAULT_SETTINGS = {
  phone: "+380 68 231 2476",
  email: "mriiudii@gmail.com",
  leaderEmail: "olehboyanovich@gmail.com",
  legalAddress:
    "32331, Хмельницька область, Кам'янець-Подільський район, с. Оринин, вул. Тараса Шевченка, 154А",
  facebookUrl: "",
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
    title: "Молодь і молодіжне підприємництво",
    text: "Неформальна освіта, професійна орієнтація, життєві навички, підприємницьке мислення, менторство та розвиток молодіжних ініціатив.",
    points: [
      "Неформальна освіта та життєві навички",
      "Підприємницьке та соціальне підприємництво",
      "Менторство й програми «від ідеї до прототипу»",
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
