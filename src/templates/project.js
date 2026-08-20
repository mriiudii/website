import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ProjectGallery from "../components/project-gallery"
import { ArrowIcon } from "../components/ui"

// Per-project article page. The project's text/structure comes from the in-code
// PROJECTS entry passed via pageContext (gatsby-node.js).
//
// The photo gallery is CMS-driven (Contentful `project.gallery` assets, matched
// by slug), but the query is gated OFF while the Contentful space has no assets:
// gatsby-source-contentful won't materialise ContentfulAsset sub-fields until an
// asset exists, so querying them now breaks the build. Until then the gallery
// renders its empty state. TO RE-ENABLE once photos are uploaded:
//   1. add `gallery: [ContentfulAsset]` back to ContentfulProject in gatsby-node.js
//   2. restore the page query below and read gallery from `data`:
//        export const query = graphql`
//          query ProjectPage($slug: String!) {
//            allContentfulProject(filter: { slug: { eq: $slug } }) {
//              nodes { gallery { id title gatsbyImageData(layout: CONSTRAINED, width: 800, placeholder: BLURRED) } }
//            }
//          }`
//   3. set: const gallery = data?.allContentfulProject?.nodes?.[0]?.gallery || []
const ProjectTemplate = ({ pageContext }) => {
  const project = pageContext.project
  const gallery = [] // CMS gallery gated off until Contentful assets exist (see above)

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

        <div className="container-x py-14 sm:py-20">
          {/* Article body */}
          <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-ink-soft">
            {(project.body || []).map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          {/* Gallery */}
          <section className="mt-14">
            <h2 className="mb-6 text-2xl sm:text-3xl">Галерея</h2>
            <ProjectGallery images={gallery} caption={project.galleryCaption} />
          </section>
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

export const Head = ({ pageContext }) => (
  <Seo
    title={pageContext.project.title}
    description={pageContext.project.summary}
    pathname={`/projects/${pageContext.project.slug}`}
  />
)
