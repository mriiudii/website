import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { ArrowIcon } from "../components/ui"

// Per-project article page. The project's text/structure comes from the in-code
// PROJECTS entry passed via pageContext (gatsby-node.js). The cover photo is
// CMS-driven — the Contentful `project.image` asset matched by slug.
const ProjectTemplate = ({ pageContext, data }) => {
  const project = pageContext.project
  const cover = getImage(data?.contentfulProject?.image)

  return (
    <Layout>
      <article>
        <header className="bg-cream">
          <div className="container-x py-14 sm:py-20">
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-soft transition-colors hover:text-brand"
            >
              <ArrowIcon className="rotate-180" />
              Усі проєкти
            </Link>

            <div className="mt-6 flex flex-wrap items-center gap-2 text-sm font-semibold text-ink-muted">
              <span>{project.year}</span>
              {project.metric && (
                <>
                  <span aria-hidden="true">·</span>
                  <span className="text-brand">{project.metric}</span>
                </>
              )}
            </div>

            <h1 className="mt-3 max-w-3xl text-4xl sm:text-5xl">
              {project.title}
            </h1>

            {project.partnerCredit && (
              <p className="mt-5 text-sm uppercase tracking-wide text-ink-muted">
                {project.partnerCredit}
              </p>
            )}
          </div>
        </header>

        {/* Cover photo (Contentful project.image) */}
        {cover && (
          <div className="container-x pt-14 sm:pt-20">
            <GatsbyImage
              image={cover}
              alt={project.title}
              className="w-full overflow-hidden rounded-card"
            />
          </div>
        )}

        <div className="container-x py-14 sm:py-20">
          {/* Article body */}
          <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-ink-soft">
            {(project.body || []).map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Closing CTA */}
        <div className="bg-cream">
          <div className="container-x flex flex-col items-start gap-4 py-12 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xl font-semibold text-ink">
              Маєте ідею для схожого проєкту у своїй громаді?
            </p>
            <Link to="/#partnership" className="btn-primary">
              Обговорити співпрацю
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  )
}

export default ProjectTemplate

export const query = graphql`
  query ProjectPage($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      image {
        gatsbyImageData(
          layout: CONSTRAINED
          width: 1000
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
  }
`

export const Head = ({ pageContext }) => (
  <Seo
    title={pageContext.project.title}
    description={pageContext.project.summary}
    pathname={`/projects/${pageContext.project.slug}`}
  />
)
