import * as React from "react"
import { Eyebrow } from "../ui"
import { resolveSettings, telHref } from "../../data/site"

const Contacts = ({ settings }) => {
  const s = resolveSettings(settings)

  return (
    <section id="contacts" className="section-y bg-white">
      <div className="container-x">
        <Eyebrow number="09">Контакти</Eyebrow>
        <h2 className="max-w-2xl text-3xl sm:text-4xl">
          Напишіть нам — ми відкриті до розмови
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-card bg-cream p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-ink-muted">
              Керівник
            </p>
            <p className="mt-3 text-lg font-bold text-ink">Олег Боянович</p>
            <p className="text-sm text-ink-soft">
              Засновник та голова правління
            </p>
            <a
              href={`mailto:${s.leaderEmail}`}
              className="link-arrow mt-3 text-sm"
            >
              {s.leaderEmail}
            </a>
          </div>

          <div className="rounded-card bg-cream p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-ink-muted">
              Організація
            </p>
            <a
              href={telHref(s.phone)}
              className="mt-3 block text-lg font-bold text-ink hover:text-brand"
            >
              {s.phone}
            </a>
            <a
              href={`mailto:${s.email}`}
              className="mt-1 block text-ink-soft hover:text-brand"
            >
              {s.email}
            </a>
          </div>

          <div className="rounded-card bg-cream p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-ink-muted">
              Facebook
            </p>
            <a
              href={s.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block text-lg font-bold text-ink hover:text-brand"
            >
              {s.facebookTitle}
            </a>
            <a
              href={s.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-arrow mt-3 text-sm"
            >
              Перейти на сторінку
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts
