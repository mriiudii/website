import * as React from "react"
import { Eyebrow } from "../ui"

const About = () => {
  return (
    <section id="about" className="section-y bg-white">
      <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Eyebrow number="01">Про нас</Eyebrow>
          <h2 className="text-3xl sm:text-4xl">
            Локальна організація розвитку громад
          </h2>
        </div>
        <div className="space-y-5 text-lg text-ink-soft">
          <p>
            ГО «Мрії у Дії» — це українська організація громадянського
            суспільства, яка створює можливості для дітей, молоді, сімей та
            активних мешканців малих громад. Ми виросли з локального
            волонтерського середовища та досвіду допомоги людям під час
            повномасштабної війни.
          </p>
          <p>
            Наступним етапом став розвиток освітніх, дитячих і молодіжних
            програм, локальних партнерств та поступовий перехід від реагування
            на кризу до довгострокового розвитку громади.
          </p>
          <div className="rounded-card border-l-4 border-brand bg-cream p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand">
              Наша місія
            </p>
            <p className="mt-2 text-xl font-semibold text-ink">
              Допомагати людям у малих і сільських громадах навчатися,
              розвивати ідеї, отримувати підтримку та перетворювати мрії на
              практичні дії, що зміцнюють їхнє життя і громаду.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
