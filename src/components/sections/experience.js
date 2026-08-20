import * as React from "react"
import { Link } from "gatsby"
import { Eyebrow, ArrowIcon } from "../ui"
import ProjectCard from "../project-card"
import { PROJECTS } from "../../data/projects"

// Homepage preview of our projects. Shows the first few and links to the full
// /projects listing. `projects` may come from Contentful; PROJECTS (in-code) is
// the fallback and canonical source for slugs/detail pages.
const HOMEPAGE_LIMIT = 3

const Experience = ({ projects }) => {
  const source = projects && projects.length ? projects : PROJECTS
  const items = source.slice(0, HOMEPAGE_LIMIT)

  return (
    <section id="experience" className="section-y bg-white">
      <div className="container-x">
        <Eyebrow number="04">Наш досвід</Eyebrow>
        <h2 className="max-w-2xl text-3xl sm:text-4xl">
          Підтверджені проєкти, реалізовані разом із партнерами
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {items.map(p => (
            <ProjectCard key={p.id || p.slug} project={p} />
          ))}
        </div>

        <div className="mt-10">
          <Link to="/projects" className="btn-ghost">
            Побачити всі проєкти
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Experience
