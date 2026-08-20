import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ProjectCard from "../components/project-card"
import { Eyebrow } from "../components/ui"
import { PROJECTS } from "../data/projects"

// Blog-style listing of every project. Detail pages are generated per project
// in gatsby-node.js from the same PROJECTS source.
const ProjectsPage = () => {
  return (
    <Layout>
      <section className="section-y bg-cream">
        <div className="container-x">
          <Eyebrow>Проєкти</Eyebrow>
          <h1 className="max-w-3xl text-4xl sm:text-5xl">
            Проєкти, реалізовані разом із громадою та партнерами
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-soft">
            Кожен проєкт — це конкретна дія: середовище для розвитку дітей і
            молоді, підтримка сімей та спроможність громади. Оберіть проєкт, щоб
            прочитати історію й побачити фотографії.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map(p => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ProjectsPage

export const Head = () => <Seo title="Проєкти" pathname="/projects" />
