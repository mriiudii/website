import * as React from "react"
import { ArrowIcon } from "../ui"

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Soft brand glow in the background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-brand/10 blur-3xl"
      />
      <div className="container-x grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/60 px-4 py-1.5 text-sm font-semibold text-ink-soft">
            <span className="h-2 w-2 rounded-full bg-brand" />
            Хмельниччина · Орининська громада
          </p>
          <h1 className="text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
            Мрії стають змінами,
            <br />
            коли переходять{" "}
            <span className="text-brand">у&nbsp;дію</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink-soft">
            Допомагаємо дітям, молоді та активним мешканцям малих громад
            отримувати знання, підтримку й можливості для реалізації власних
            ідей.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#experience" className="btn-primary">
              Наші проєкти
              <ArrowIcon />
            </a>
            <a href="#partnership" className="btn-ghost">
              Стати партнером
            </a>
          </div>
        </div>

        {/* Quick facts panel (no posed stock imagery) */}
        <div className="rounded-card border border-ink/10 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-ink-muted">
            Коротко про нас
          </p>
          <div className="mt-5 grid grid-cols-2 gap-5">
            {[
              { v: "2022", l: "рік заснування" },
              { v: "до 120", l: "людей у волонтерському русі" },
              { v: "до 60", l: "дітей на день у програмі" },
              { v: "4", l: "напрями роботи" },
            ].map(item => (
              <div key={item.l} className="rounded-2xl bg-sand p-4">
                <div className="text-2xl font-extrabold text-ink">
                  {item.v}
                </div>
                <div className="mt-1 text-sm text-ink-muted">{item.l}</div>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm leading-relaxed text-ink-soft">
            Невелика локальна команда, яка об’єднує експертів, волонтерів та
            партнерів навколо конкретних змін у громаді.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
