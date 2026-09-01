import * as React from "react"
import { Eyebrow } from "../ui"

// The history of the NGO framed as a transformation of a grassroots civic
// initiative. Numbers are intentionally omitted where the client hasn't
// confirmed them — see the [уточнити] markers.
const FALLBACK_TIMELINE = [
  {
    id: "t1",
    period: "Початок",
    title: "Громадська ініціатива",
    description:
      "Усе почалося з локальної громадської ініціативи небайдужих мешканців, які хотіли діяти для своєї громади.",
  },
  {
    id: "t2",
    period: "Під час війни",
    title: "Волонтерський рух #Ми_разом",
    description:
      "Ініціатива переросла у волонтерський рух #Ми_разом, що об’єднав людей навколо взаємодопомоги під час повномасштабної війни. [уточнити масштаб]",
  },
  {
    id: "t3",
    period: "Наступний крок",
    title: "Заснування ГО «Мрії у Дії»",
    description:
      "Волонтерський рух трансформувався в громадську організацію зі сталою структурою та власною стратегією.",
  },
  {
    id: "t4",
    period: "Сьогодні й далі",
    title: "Партнерства та розвиток",
    description:
      "Розбудова партнерств і перехід від реагування на кризу до довгострокового розвитку людей і громад.",
  },
]

const Timeline = ({ events }) => {
  const items = events && events.length ? events : FALLBACK_TIMELINE

  return (
    <section id="timeline" className="section-y bg-ink text-white">
      <div className="container-x">
        <Eyebrow number="03">Наша історія</Eyebrow>
        <h2 className="max-w-2xl text-3xl text-white sm:text-4xl">
          Ми виросли як трансформація громадської ініціативи в організацію
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
