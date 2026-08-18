import * as React from "react"
import { Eyebrow } from "../ui"
import { STRATEGIC_DIRECTIONS } from "../../data/site"

// Fallback cards used when Contentful `direction` entries are empty.
const FALLBACK_DIRECTIONS = [
  {
    id: "edu",
    icon: "📘",
    title: "Освіта",
    description:
      "Безпечні простори, неформальна освіта та програми розвитку для дітей і молоді.",
  },
  {
    id: "community",
    icon: "🤝",
    title: "Громада",
    description:
      "Підтримка локальних команд, ініціатив і практичних рішень у громаді.",
  },
  {
    id: "resilience",
    icon: "🌱",
    title: "Стійкість",
    description:
      "Соціальне підприємництво, життєві навички та розвиток спроможності людей.",
  },
  {
    id: "care",
    icon: "💛",
    title: "Турбота",
    description:
      "Волонтерство, взаємодопомога та підтримка сімей у складних обставинах.",
  },
]

const Directions = ({ directions }) => {
  const cards =
    directions && directions.length ? directions : FALLBACK_DIRECTIONS

  return (
    <section id="directions" className="section-y">
      <div className="container-x">
        <Eyebrow number="02">Наші напрями</Eyebrow>
        <h2 className="max-w-2xl text-3xl sm:text-4xl">
          Використовуємо освіту, молодіжну роботу та партнерства як інструменти
          змін
        </h2>

        {/* Two strategic focuses (2026–2027) */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {STRATEGIC_DIRECTIONS.map(d => (
            <article
              key={d.title}
              className="flex flex-col rounded-card border border-ink/10 bg-white p-8"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                {d.tag}
              </span>
              <h3 className="mt-3 text-2xl">{d.title}</h3>
              <p className="mt-3 text-ink-soft">{d.text}</p>
              <ul className="mt-5 space-y-2 text-ink-soft">
                {d.points.map(p => (
                  <li key={p} className="flex gap-2.5">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                    />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Four supporting directions */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(c => (
            <article
              key={c.id || c.title}
              className="rounded-card bg-white p-6 ring-1 ring-ink/5"
            >
              <div className="text-2xl" aria-hidden="true">
                {c.icon || "•"}
              </div>
              <h3 className="mt-3 text-lg">{c.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{c.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Directions
