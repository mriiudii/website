import * as React from "react"
import { Eyebrow } from "../ui"
import { VALUES } from "../../data/site"

const Values = () => {
  return (
    <section id="values" className="section-y bg-white">
      <div className="container-x">
        <Eyebrow number="05">Наші цінності</Eyebrow>
        <h2 className="max-w-2xl text-3xl sm:text-4xl">
          Що лежить в основі кожного нашого рішення
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {VALUES.map((v, i) => (
            <div
              key={v.title}
              className="rounded-card bg-cream p-6 ring-1 ring-ink/5"
            >
              <div className="text-sm font-bold tabular-nums text-brand">
                0{i + 1}
              </div>
              <h3 className="mt-3 text-lg">{v.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Values
