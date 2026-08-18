import * as React from "react"
import { Eyebrow } from "../ui"
import PartnershipForm from "../partnership-form"

const OFFERS = [
  "Розробка молодіжних, освітніх і громадських програм",
  "Аналіз потреб, концепції проєктів та грантові заявки",
  "Неформальна освіта, фасилітація й молодіжна участь",
  "Локальний доступ і глибоке розуміння малих громад",
]

const Partnership = () => {
  return (
    <section id="partnership" className="section-y bg-ink text-white">
      <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Eyebrow number="08">Співпраця</Eyebrow>
          <h2 className="text-3xl text-white sm:text-4xl">
            Маєте ідею для громади? Реалізуймо її разом.
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Ми — компетентна локальна команда, яка знає свою громаду, має
            підтверджений досвід і може стати надійним партнером для соціальних
            та молодіжних проєктів.
          </p>

          <ul className="mt-8 space-y-3">
            {OFFERS.map(o => (
              <li key={o} className="flex gap-3 text-white/85">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                />
                {o}
              </li>
            ))}
          </ul>

          <p className="mt-8 text-sm text-white/60">
            Також можна{" "}
            <a href="#contacts" className="font-semibold text-brand-light">
              стати волонтером
            </a>
            ,{" "}
            <a href="#contacts" className="font-semibold text-brand-light">
              підтримати діяльність
            </a>{" "}
            або{" "}
            <a href="#contacts" className="font-semibold text-brand-light">
              просто зв’язатися з нами
            </a>
            .
          </p>
        </div>

        <div className="text-ink">
          <PartnershipForm />
        </div>
      </div>
    </section>
  )
}

export default Partnership
