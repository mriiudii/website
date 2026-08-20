import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// Photo gallery for a project detail page. Images come from the linked
// Contentful `project.gallery` assets. Until the Contentful space is reachable
// and photos are uploaded, `images` is empty and we show a friendly empty state
// instead of a broken grid.
const ProjectGallery = ({ images = [], caption }) => {
  const assets = (images || []).filter(Boolean)

  if (!assets.length) {
    return (
      <div className="rounded-card border border-dashed border-ink/20 bg-cream p-10 text-center">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-sand text-ink-muted">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
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
        <p className="text-sm font-semibold text-ink">Фотографії додамо незабаром</p>
        <p className="mx-auto mt-1 max-w-md text-sm text-ink-soft">
          Галерея цього проєкту зараз наповнюється. Незабаром тут з’являться
          світлини з подій.
        </p>
      </div>
    )
  }

  return (
    <figure>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {assets.map((asset, i) => {
          const image = getImage(asset)
          if (!image) return null
          return (
            <div
              key={asset.id || i}
              className="overflow-hidden rounded-card border border-ink/10 bg-sand"
            >
              <GatsbyImage
                image={image}
                alt={asset.title || `Фото ${i + 1}`}
                className="h-full w-full"
              />
            </div>
          )
        })}
      </div>
      {caption && (
        <figcaption className="mt-4 text-sm text-ink-muted">{caption}</figcaption>
      )}
    </figure>
  )
}

export default ProjectGallery
