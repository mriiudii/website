import * as React from "react"
import { Eyebrow } from "../ui"
import { MISSION, VISION } from "../../data/site"

// Target icon for the mission ("what we do").
const MissionIcon = ({ className = "" }) => (
  <svg
    className={className}
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="12" cy="12" r="1.4" fill="currentColor" />
  </svg>
)

// Horizon / sunrise icon for the vision ("where we're heading").
const VisionIcon = ({ className = "" }) => (
  <svg
    className={className}
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M3 18h18M6.5 18a5.5 5.5 0 0 1 11 0"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 4v3M4.5 8.5l1.8 1.8M19.5 8.5l-1.8 1.8"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
)

// Mission / vision card — same anatomy, swappable accent color (brand vs moss).
const StatementCard = ({ accent, label, text, icon }) => (
  <div
    className={`rounded-card border-t-4 bg-cream p-7 ring-1 ring-ink/5 ${accent.border}`}
  >
    <div
      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${accent.chipBg} ${accent.chipText}`}
    >
      {icon}
    </div>
    <p
      className={`mt-5 text-sm font-semibold uppercase tracking-[0.16em] ${accent.label}`}
    >
      {label}
    </p>
    <p className="mt-2 text-lg font-semibold leading-snug text-ink">{text}</p>
  </div>
)

const ACCENTS = {
  brand: {
    border: "border-brand",
    chipBg: "bg-brand/10",
    chipText: "text-brand",
    label: "text-brand",
  },
  moss: {
    border: "border-moss",
    chipBg: "bg-moss/10",
    chipText: "text-moss",
    label: "text-moss",
  },
}

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
        </div>
      </div>

      {/* Mission & vision — two equal cards with contrasting accents */}
      <div className="container-x mt-12 grid gap-5 sm:grid-cols-2">
        <StatementCard
          accent={ACCENTS.brand}
          label="Наша місія"
          text={MISSION}
          icon={<MissionIcon />}
        />
        <StatementCard
          accent={ACCENTS.moss}
          label="Наша візія"
          text={VISION}
          icon={<VisionIcon />}
        />
      </div>
    </section>
  )
}

export default About
