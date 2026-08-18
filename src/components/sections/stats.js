import * as React from "react"

const FALLBACK_STATS = [
  { id: "s1", value: "2022", label: "рік заснування ГО" },
  { id: "s2", value: "до 120", label: "людей у волонтерському русі" },
  { id: "s3", value: "до 60/день", label: "учасників дитячої точки" },
  { id: "s4", value: "25–30", label: "сімей ВПО у програмі простору" },
  { id: "s5", value: "25", label: "учасників молодіжного табору" },
]

const Stats = ({ stats }) => {
  const items = stats && stats.length ? stats : FALLBACK_STATS

  return (
    <section id="stats" className="section-y">
      <div className="container-x">
        <div className="grid gap-6 rounded-card bg-brand p-8 text-white sm:p-12 md:grid-cols-5">
          {items.map(s => (
            <div key={s.id || s.label}>
              <div className="text-3xl font-extrabold sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-2 text-sm text-white/80">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
