import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Eyebrow } from "../ui"

const FALLBACK_PROJECTS = [
  {
    id: "p1",
    title: "Мобільна дитяча точка «Спільно»",
    year: "2022–2024",
    metric: "до 60 учасників на день",
    partnerCredit: "за підтримки UNICEF у співпраці з УКУ",
    story:
      "Середовище розвитку дітей у сільській місцевості: діти знайомилися з професіями, активними людьми громади та локальним бізнесом.",
    result:
      "Поєднання неформальної освіти, професійного пізнання та психосоціальної підтримки.",
  },
  {
    id: "p2",
    title: "Простір, дружній до дитини",
    year: "2023",
    metric: "25–30 сімей ВПО",
    partnerCredit: "за підтримки Карітас Україна",
    story:
      "Безпечне середовище та психосоціальна підтримка: діти адаптувалися, а сім’ї говорили про власні потреби й відновлювали соціальні зв’язки.",
    result: "Формування подальших кроків після пережитої кризи.",
  },
  {
    id: "p3",
    title: "Дитячо-юнацький вишкільний табір",
    year: "2024",
    metric: "25 учасників",
    partnerCredit: "у співпраці з Go4Peace",
    story:
      "Учасники досліджували власну громаду, працювали в командах і реалізовували практичні дії на підтримку старших мешканців.",
    result: "Молода людина вчиться бачити себе частиною громади.",
  },
]

const ProjectCard = ({ project }) => {
  const image = project.image ? getImage(project.image) : null

  return (
    <article className="flex flex-col overflow-hidden rounded-card border border-ink/10 bg-white">
      <div className="aspect-[16/10] w-full bg-sand">
        {image ? (
          <GatsbyImage
            image={image}
            alt={project.title}
            className="h-full w-full"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-ink-muted/50">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
              <rect
                x="3"
                y="4"
                width="18"
                height="16"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle
                cx="8.5"
                cy="9.5"
                r="1.5"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M4 18l5-5 4 4 3-3 4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2 text-sm font-semibold text-ink-muted">
          <span>{project.year}</span>
          {project.metric && (
            <>
              <span aria-hidden="true">·</span>
              <span className="text-brand">{project.metric}</span>
            </>
          )}
        </div>
        <h3 className="mt-2 text-xl">{project.title}</h3>
        <p className="mt-3 flex-1 text-sm text-ink-soft">{project.story}</p>
        {project.result && (
          <p className="mt-4 text-sm font-medium text-ink">
            <span className="text-ink-muted">Результат: </span>
            {project.result}
          </p>
        )}
        {project.partnerCredit && (
          <p className="mt-4 border-t border-ink/10 pt-4 text-xs uppercase tracking-wide text-ink-muted">
            {project.partnerCredit}
          </p>
        )}
      </div>
    </article>
  )
}

const Experience = ({ projects }) => {
  const items = projects && projects.length ? projects : FALLBACK_PROJECTS

  return (
    <section id="experience" className="section-y bg-white">
      <div className="container-x">
        <Eyebrow number="04">Наш досвід</Eyebrow>
        <h2 className="max-w-2xl text-3xl sm:text-4xl">
          Підтверджені проєкти, реалізовані разом із партнерами
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {items.map(p => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
