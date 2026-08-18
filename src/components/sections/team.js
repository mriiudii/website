import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Eyebrow } from "../ui"

const FALLBACK_TEAM = [
  {
    id: "m1",
    name: "Олег Боянович",
    role: "Засновник та голова правління",
    focus:
      "Стратегічний розвиток, партнерства, проєктний менеджмент, грантрайтинг, соціальне підприємництво та міжнародна співпраця.",
  },
  {
    id: "m2",
    name: "Алла Просяловська",
    role: "Членкиня правління · фінанси та операційна діяльність",
    focus:
      "Бухгалтерський облік, фінансовий менеджмент, документообіг та адміністративна підтримка організації.",
  },
  {
    id: "m3",
    name: "Олена Смоляк",
    role: "Освітні програми",
    focus:
      "Освітні програми для дітей, молодіжні активності, неформальна освіта та робота з дітьми і сім’ями.",
  },
]

const initials = name =>
  name
    .split(" ")
    .slice(0, 2)
    .map(part => part[0])
    .join("")

const MemberCard = ({ member }) => {
  const photo = member.photo ? getImage(member.photo) : null
  return (
    <article className="rounded-card border border-ink/10 bg-white p-6">
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full bg-sand">
          {photo ? (
            <GatsbyImage
              image={photo}
              alt={member.name}
              className="h-full w-full"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-lg font-bold text-brand">
              {initials(member.name)}
            </div>
          )}
        </div>
        <div>
          <h3 className="text-lg leading-tight">{member.name}</h3>
          <p className="mt-1 text-sm text-brand">{member.role}</p>
        </div>
      </div>
      <p className="mt-4 text-sm text-ink-soft">{member.focus}</p>
    </article>
  )
}

const Team = ({ members }) => {
  const items = members && members.length ? members : FALLBACK_TEAM

  return (
    <section id="team" className="section-y">
      <div className="container-x">
        <Eyebrow number="06">Команда</Eyebrow>
        <h2 className="max-w-2xl text-3xl sm:text-4xl">
          Невелика команда, яка об’єднує експертів, волонтерів та партнерів
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map(m => (
            <MemberCard key={m.id || m.name} member={m} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
