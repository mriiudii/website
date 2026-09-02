import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ProjectCard from "../components/project-card"
import { Eyebrow } from "../components/ui"
import { PROJECTS } from "../data/projects"

// Blog-style listing of every project. Detail pages are generated per project
// in gatsby-node.js from the same PROJECTS source. Cover photos come from
// Contentful (matched by slug) and are merged onto the in-code project data.
const ProjectsPage = () => {
  const data = useStaticQuery(graphql`
    query ProjectsListQuery {
      allContentfulProject {
        edges {
          node {
            slug
            image {
              gatsbyImageData(
                layout: CONSTRAINED
                width: 800
                aspectRatio: 1.6
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
            }
          }
        }
      }
    }
  `)

  // slug -> Contentful cover image
  const imageBySlug = Object.fromEntries(
    (data?.allContentfulProject?.edges || [])
      .map(({ node }) => node)
      .filter(n => n.slug && n.image)
      .map(n => [n.slug, n.image])
  )

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
              <ProjectCard
                key={p.slug}
                project={{ ...p, image: imageBySlug[p.slug] }}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ProjectsPage

export const Head = () => <Seo title="Проєкти" pathname="/projects" />
