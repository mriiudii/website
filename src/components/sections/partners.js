import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Eyebrow } from "../ui"

const FALLBACK_PARTNERS = [
  { id: "pt1", name: "UNICEF", relation: "у межах програми" },
  { id: "pt2", name: "Український католицький університет", relation: "у співпраці з" },
  { id: "pt3", name: "Карітас Україна", relation: "за підтримки" },
  { id: "pt4", name: "Go4Peace", relation: "у співпраці з" },
  { id: "pt5", name: "БО «Платформа соціальних змін»", relation: "у співпраці з" },
]

const PartnerItem = ({ partner }) => {
  const logo = partner.logo ? getImage(partner.logo) : null
  const content = (
    <div className="flex h-full flex-col justify-between rounded-card bg-white p-6 ring-1 ring-ink/5">
      {logo ? (
        <GatsbyImage
          image={logo}
          alt={partner.name}
          className="max-h-12"
          objectFit="contain"
        />
      ) : (
        <span className="text-base font-bold text-ink">{partner.name}</span>
      )}
      {partner.relation && (
        <span className="mt-4 text-xs uppercase tracking-wide text-ink-muted">
          {partner.relation}
        </span>
      )}
    </div>
  )

  return partner.url ? (
    <a href={partner.url} target="_blank" rel="noreferrer noopener">
      {content}
    </a>
  ) : (
    content
  )
}

const Partners = ({ partners }) => {
  const items = partners && partners.length ? partners : FALLBACK_PARTNERS

  return (
    <section id="partners" className="section-y bg-white">
      <div className="container-x">
        <Eyebrow number="07">Партнери та мережі</Eyebrow>
        <h2 className="max-w-2xl text-3xl sm:text-4xl">
          Досвід співпраці з українськими та міжнародними організаціями
        </h2>
        <p className="mt-4 max-w-2xl text-ink-soft">
          Формулювання відображають фактичну роль у кожному проєкті: «за
          підтримки», «у співпраці з» або «у межах програми».
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {items.map(p => (
            <PartnerItem key={p.id || p.name} partner={p} />
          ))}
        </div>

        {/* International integration — CIVICUS membership (not a donor) */}
        <div className="mt-6 flex flex-col gap-4 rounded-card border border-ink/10 bg-cream p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
              Міжнародна інтеграція
            </p>
            <p className="mt-2 text-lg font-semibold text-ink">
              Associate Member CIVICUS — World Alliance for Citizen
              Participation
            </p>
          </div>
          <p className="max-w-sm text-sm text-ink-soft">
            Ми відкриті до міжнародної співпраці — партнерських заявок, спільних
            проєктів та обміну досвідом.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Partners
