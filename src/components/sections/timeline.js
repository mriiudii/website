import * as React from "react"
import { Eyebrow } from "../ui"

const FALLBACK_TIMELINE = [
  {
    id: "t1",
    period: "2022",
    title: "Волонтерська мобілізація",
    description:
      "Навколо ініціативи сформувався волонтерський рух — до 120 людей допомагали сім’ям і ВПО.",
  },
  {
    id: "t2",
    period: "2022–2024",
    title: "Підтримка дітей і сімей",
    description:
      "Мобільна дитяча точка «Спільно» та простір, дружній до дитини, — розвиток і психосоціальна підтримка.",
  },
  {
    id: "t3",
    period: "2023–2024",
    title: "Освітні та молодіжні програми",
    description:
      "Неформальна освіта, майстер-класи й дитячо-юнацький табір у співпраці з партнерами.",
  },
  {
    id: "t4",
    period: "2026+",
    title: "Молодіжне підприємництво та розвиток громад",
    description:
      "Перехід від реагування на кризу до довгострокового розвитку людей і громад.",
  },
]

const Timeline = ({ events }) => {
  const items = events && events.length ? events : FALLBACK_TIMELINE

  return (
    <section id="timeline" className="section-y bg-ink text-white">
      <div className="container-x">
        <Eyebrow number="03">Від допомоги до розвитку</Eyebrow>
        <h2 className="max-w-2xl text-3xl text-white sm:text-4xl">
          Ми переходимо від екстреного реагування до розвитку людей і громад
        </h2>

        <ol className="mt-12 grid gap-8 md:grid-cols-4">
          {items.map((e, i) => (
            <li key={e.id || e.period} className="relative">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand text-sm font-bold text-white">
                  {i + 1}
                </span>
                {i < items.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="hidden h-px flex-1 bg-white/20 md:block"
                  />
                )}
              </div>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-brand-light">
                {e.period}
              </p>
              <h3 className="mt-1 text-lg text-white">{e.title}</h3>
              <p className="mt-2 text-sm text-white/70">{e.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Timeline
