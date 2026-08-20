import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { ArrowIcon } from "./ui"

// Shared project card used by the homepage section and the /projects listing.
// The whole card links to the project's detail page. Falls back to an inline
// placeholder while Contentful has no cover image (`project.image` is null).
const ProjectCard = ({ project }) => {
  const image = project.image ? getImage(project.image) : null
  const teaser = project.summary || project.story

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-card border border-ink/10 bg-white transition-shadow hover:shadow-lg hover:shadow-ink/5"
    >
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
        <p className="mt-3 flex-1 text-sm text-ink-soft">{teaser}</p>
        {project.partnerCredit && (
          <p className="mt-4 border-t border-ink/10 pt-4 text-xs uppercase tracking-wide text-ink-muted">
            {project.partnerCredit}
          </p>
        )}
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-transform group-hover:translate-x-1">
          Детальніше
          <ArrowIcon />
        </span>
      </div>
    </Link>
  )
}

export default ProjectCard
