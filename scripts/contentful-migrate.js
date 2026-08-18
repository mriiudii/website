/* eslint-disable no-console */
/**
 * Contentful content-model migration + optional seeding for ГО «Мрії у Дії».
 *
 * Creates (or updates) the content types used by the site and, with `--seed`,
 * publishes starter entries taken from the content brief.
 *
 * Usage:
 *   CONTENTFUL_MANAGEMENT_TOKEN=CFPAT-... node scripts/contentful-migrate.js
 *   CONTENTFUL_MANAGEMENT_TOKEN=CFPAT-... node scripts/contentful-migrate.js --seed
 *
 * Env vars:
 *   CONTENTFUL_MANAGEMENT_TOKEN  (required) management token (CFPAT-...)
 *   CONTENTFUL_SPACE_ID          (default: h7tvj4uy0ui4)
 *   CONTENTFUL_ENVIRONMENT       (default: master)
 */

require("dotenv").config()
const contentful = require("contentful-management")

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID || "h7tvj4uy0ui4"
const ENVIRONMENT_ID = process.env.CONTENTFUL_ENVIRONMENT || "master"
const TOKEN = process.env.CONTENTFUL_MANAGEMENT_TOKEN
const SEED = process.argv.includes("--seed")

// --- Field helpers -------------------------------------------------------

const sym = (id, name, extra = {}) => ({
  id,
  name,
  type: "Symbol",
  localized: false,
  required: false,
  ...extra,
})
const text = (id, name, extra = {}) => ({
  id,
  name,
  type: "Text",
  localized: false,
  required: false,
  ...extra,
})
const int = (id, name) => ({
  id,
  name,
  type: "Integer",
  localized: false,
  required: false,
})
const assetLink = (id, name) => ({
  id,
  name,
  type: "Link",
  linkType: "Asset",
  localized: false,
  required: false,
})

// --- Content type definitions -------------------------------------------

const CONTENT_TYPES = [
  {
    id: "siteSettings",
    name: "Site Settings",
    displayField: "internalTitle",
    fields: [
      sym("internalTitle", "Internal title", { required: true }),
      sym("phone", "Phone"),
      sym("email", "Email"),
      sym("leaderEmail", "Leader email"),
      sym("legalAddress", "Legal address"),
      sym("facebookUrl", "Facebook URL"),
      sym("instagramUrl", "Instagram URL"),
    ],
  },
  {
    id: "direction",
    name: "Direction",
    displayField: "title",
    fields: [
      sym("title", "Title", { required: true }),
      sym("description", "Description"),
      sym("icon", "Icon (emoji)"),
      int("order", "Order"),
    ],
  },
  {
    id: "timelineEvent",
    name: "Timeline Event",
    displayField: "title",
    fields: [
      sym("period", "Period"),
      sym("title", "Title", { required: true }),
      sym("description", "Description"),
      int("order", "Order"),
    ],
  },
  {
    id: "project",
    name: "Project",
    displayField: "title",
    fields: [
      sym("title", "Title", { required: true }),
      sym("year", "Year"),
      sym("partnerCredit", "Partner credit"),
      sym("metric", "Metric"),
      sym("story", "Story"),
      sym("result", "Result"),
      assetLink("image", "Image"),
      int("order", "Order"),
    ],
  },
  {
    id: "stat",
    name: "Stat",
    displayField: "label",
    fields: [
      sym("value", "Value", { required: true }),
      sym("label", "Label"),
      int("order", "Order"),
    ],
  },
  {
    id: "teamMember",
    name: "Team Member",
    displayField: "name",
    fields: [
      sym("name", "Name", { required: true }),
      sym("role", "Role"),
      sym("focus", "Focus"),
      assetLink("photo", "Photo"),
      int("order", "Order"),
    ],
  },
  {
    id: "partner",
    name: "Partner",
    displayField: "name",
    fields: [
      sym("name", "Name", { required: true }),
      sym("relation", "Relation"),
      sym("url", "URL"),
      assetLink("logo", "Logo"),
      int("order", "Order"),
    ],
  },
]

// --- Seed data (from the content brief) ---------------------------------

const SEED_DATA = {
  siteSettings: [
    {
      internalTitle: "Основні налаштування",
      phone: "+380 68 231 2476",
      email: "mriiudii@gmail.com",
      leaderEmail: "olehboyanovich@gmail.com",
      legalAddress:
        "32331, Хмельницька область, Кам'янець-Подільський район, с. Оринин, вул. Тараса Шевченка, 154А",
      facebookUrl: "",
      instagramUrl: "",
    },
  ],
  direction: [
    {
      title: "Освіта",
      description:
        "Безпечні простори, неформальна освіта та програми розвитку для дітей і молоді.",
      icon: "📘",
      order: 1,
    },
    {
      title: "Громада",
      description:
        "Підтримка локальних команд, ініціатив і практичних рішень у громаді.",
      icon: "🤝",
      order: 2,
    },
    {
      title: "Стійкість",
      description:
        "Соціальне підприємництво, життєві навички та розвиток спроможності людей.",
      icon: "🌱",
      order: 3,
    },
    {
      title: "Турбота",
      description:
        "Волонтерство, взаємодопомога та підтримка сімей у складних обставинах.",
      icon: "💛",
      order: 4,
    },
  ],
  timelineEvent: [
    {
      period: "2022",
      title: "Волонтерська мобілізація",
      description:
        "Навколо ініціативи сформувався волонтерський рух — до 120 людей допомагали сім'ям і ВПО.",
      order: 1,
    },
    {
      period: "2022–2024",
      title: "Підтримка дітей і сімей",
      description:
        "Мобільна дитяча точка «Спільно» та простір, дружній до дитини, — розвиток і психосоціальна підтримка.",
      order: 2,
    },
    {
      period: "2023–2024",
      title: "Освітні та молодіжні програми",
      description:
        "Неформальна освіта, майстер-класи й дитячо-юнацький табір у співпраці з партнерами.",
      order: 3,
    },
    {
      period: "2026+",
      title: "Молодіжне підприємництво та розвиток громад",
      description:
        "Перехід від реагування на кризу до довгострокового розвитку людей і громад.",
      order: 4,
    },
  ],
  project: [
    {
      title: "Мобільна дитяча точка «Спільно»",
      year: "2022–2024",
      metric: "до 60 учасників на день",
      partnerCredit: "за підтримки UNICEF у співпраці з УКУ",
      story:
        "Середовище розвитку дітей у сільській місцевості: діти знайомилися з професіями, активними людьми громади та локальним бізнесом.",
      result:
        "Поєднання неформальної освіти, професійного пізнання та психосоціальної підтримки.",
      order: 1,
    },
    {
      title: "Простір, дружній до дитини",
      year: "2023",
      metric: "25–30 сімей ВПО",
      partnerCredit: "за підтримки Карітас Україна",
      story:
        "Безпечне середовище та психосоціальна підтримка: діти адаптувалися, а сім'ї говорили про власні потреби й відновлювали соціальні зв'язки.",
      result: "Формування подальших кроків після пережитої кризи.",
      order: 2,
    },
    {
      title: "Дитячо-юнацький вишкільний табір",
      year: "2024",
      metric: "25 учасників",
      partnerCredit: "у співпраці з Go4Peace",
      story:
        "Учасники досліджували власну громаду, працювали в командах і реалізовували практичні дії на підтримку старших мешканців.",
      result: "Молода людина вчиться бачити себе частиною громади.",
      order: 3,
    },
  ],
  stat: [
    { value: "2022", label: "рік заснування ГО", order: 1 },
    { value: "до 120", label: "людей у волонтерському русі", order: 2 },
    { value: "до 60/день", label: "учасників дитячої точки", order: 3 },
    { value: "25–30", label: "сімей ВПО у програмі простору", order: 4 },
    { value: "25", label: "учасників молодіжного табору", order: 5 },
  ],
  teamMember: [
    {
      name: "Олег Боянович",
      role: "Засновник та голова правління",
      focus:
        "Стратегічний розвиток, партнерства, проєктний менеджмент, грантрайтинг, соціальне підприємництво та міжнародна співпраця.",
      order: 1,
    },
    {
      name: "Алла Просяловська",
      role: "Членкиня правління · фінанси та операційна діяльність",
      focus:
        "Бухгалтерський облік, фінансовий менеджмент, документообіг та адміністративна підтримка організації.",
      order: 2,
    },
    {
      name: "Олена Смоляк",
      role: "Освітні програми",
      focus:
        "Освітні програми для дітей, молодіжні активності, неформальна освіта та робота з дітьми і сім'ями.",
      order: 3,
    },
  ],
  partner: [
    { name: "UNICEF", relation: "у межах програми", order: 1 },
    {
      name: "Український католицький університет",
      relation: "у співпраці з",
      order: 2,
    },
    { name: "Карітас Україна", relation: "за підтримки", order: 3 },
    { name: "Go4Peace", relation: "у співпраці з", order: 4 },
    {
      name: "БО «Платформа соціальних змін»",
      relation: "у співпраці з",
      order: 5,
    },
  ],
}

// --- Runner --------------------------------------------------------------

async function upsertContentType(env, def) {
  // Contentful forbids changing an existing field's type, so recreate the type
  // from scratch. Safe because the space has no entries at migration time.
  try {
    const existing = await env.getContentType(def.id)
    try {
      await existing.unpublish()
    } catch (e) {
      /* already unpublished — ignore */
    }
    await existing.delete()
    console.log(`  – removed existing content type: ${def.id}`)
  } catch (e) {
    /* didn't exist yet — ignore */
  }
  const ct = await env.createContentTypeWithId(def.id, {
    name: def.name,
    displayField: def.displayField,
    fields: def.fields,
  })
  await ct.publish()
  console.log(`  + created content type: ${def.id}`)
}

async function seedType(env, typeId, rows, locale) {
  const existing = await env.getEntries({ content_type: typeId, limit: 1 })
  if (existing.total > 0) {
    console.log(`  = ${typeId}: entries already exist (${existing.total}), skip`)
    return
  }
  for (const row of rows) {
    const fields = {}
    Object.entries(row).forEach(([key, value]) => {
      fields[key] = { [locale]: value }
    })
    const entry = await env.createEntry(typeId, { fields })
    await entry.publish()
  }
  console.log(`  + ${typeId}: seeded ${rows.length} ent/ published`)
}

async function main() {
  if (!TOKEN) {
    console.error(
      "Missing CONTENTFUL_MANAGEMENT_TOKEN. Run with:\n" +
        "  CONTENTFUL_MANAGEMENT_TOKEN=CFPAT-... npm run migrate"
    )
    process.exit(1)
  }

  const client = contentful.createClient({ accessToken: TOKEN })
  const space = await client.getSpace(SPACE_ID)
  const env = await space.getEnvironment(ENVIRONMENT_ID)
  console.log(`Space ${SPACE_ID} / env ${ENVIRONMENT_ID}`)

  const locales = await env.getLocales()
  const defaultLocale =
    (locales.items.find(l => l.default) || locales.items[0]).code
  console.log(`Default locale: ${defaultLocale}`)

  console.log("Content types:")
  for (const def of CONTENT_TYPES) {
    await upsertContentType(env, def)
  }

  if (SEED) {
    console.log("Seeding entries:")
    for (const def of CONTENT_TYPES) {
      await seedType(env, def.id, SEED_DATA[def.id] || [], defaultLocale)
    }
  } else {
    console.log("(skip seeding — pass --seed to create starter entries)")
  }

  console.log("Done.")
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
