// Projects are the single source of truth for structure + text (hybrid model,
// like the other in-code fallbacks). Each project's `slug` also links it to a
// Contentful `project` entry that supplies the photo `gallery` (see the detail
// template query). Gallery images stay empty until the Contentful space is
// reachable and assets are uploaded.
//
// `body` is an array of paragraph strings — seeded from the original one-line
// `story` + `result` copy; extend these to flesh out the article pages.

const PROJECTS = [
  {
    slug: "mobilna-dytiacha-tochka-spilno",
    title: "Мобільна дитяча точка «Спільно»",
    year: "2022–2024",
    metric: "до 60 учасників на день",
    partnerCredit: "за підтримки UNICEF у співпраці з УКУ",
    summary:
      "Середовище розвитку дітей у сільській місцевості: діти знайомилися з професіями, активними людьми громади та локальним бізнесом.",
    body: [
      "Середовище розвитку дітей у сільській місцевості: діти знайомилися з професіями, активними людьми громади та локальним бізнесом.",
      "Поєднання неформальної освіти, професійного пізнання та психосоціальної підтримки.",
    ],
    galleryCaption: "Моменти з роботи мобільної дитячої точки «Спільно».",
  },
  {
    slug: "prostir-druzhnii-do-dytyny",
    title: "Простір, дружній до дитини",
    year: "2023",
    metric: "25–30 сімей ВПО",
    partnerCredit: "за підтримки Карітас Україна",
    summary:
      "Безпечне середовище та психосоціальна підтримка: діти адаптувалися, а сім’ї говорили про власні потреби й відновлювали соціальні зв’язки.",
    body: [
      "Безпечне середовище та психосоціальна підтримка: діти адаптувалися, а сім’ї говорили про власні потреби й відновлювали соціальні зв’язки.",
      "Формування подальших кроків після пережитої кризи.",
    ],
    galleryCaption: "Простір, дружній до дитини — фотографії з програми.",
  },
  {
    slug: "dytiacho-yunatskyi-vyshkilnyi-tabir",
    title: "Дитячо-юнацький вишкільний табір",
    year: "2024",
    metric: "25 учасників",
    partnerCredit: "у співпраці з Go4Peace",
    summary:
      "Учасники досліджували власну громаду, працювали в командах і реалізовували практичні дії на підтримку старших мешканців.",
    body: [
      "Учасники досліджували власну громаду, працювали в командах і реалізовували практичні дії на підтримку старших мешканців.",
      "Молода людина вчиться бачити себе частиною громади.",
    ],
    galleryCaption: "Дитячо-юнацький вишкільний табір — кадри з таборування.",
  },
]

// Look up a single project by its slug (used by the detail template context).
const getProjectBySlug = slug => PROJECTS.find(p => p.slug === slug)

// CommonJS export so gatsby-node.js can `require` this at build time. Webpack
// interop still lets React components use `import { PROJECTS } from ...`.
module.exports = { PROJECTS, getProjectBySlug }
