import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { ArrowIcon } from "../ui"

// Hero photo slot. Renders the Contentful asset passed from the page query
// (title "activity-children-team"); falls back to a styled placeholder if the
// asset can't be resolved, so the build stays green with or without CMS data.
const HeroPhoto = ({ image }) => {
  const gatsbyImage = getImage(image)

  if (gatsbyImage) {
    return (
      <GatsbyImage
        image={gatsbyImage}
        alt={
          image.description ||
          "Діти й молодь Орининської громади разом із командою"
        }
        className="aspect-[3/2] w-full overflow-hidden rounded-card"
        objectFit="cover"
        loading="eager"
      />
    )
  }

  return (
    <div className="relative aspect-[3/2] w-full overflow-hidden rounded-card bg-gradient-to-br from-brand-light/40 via-sand to-[#f6c344]/30">
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-ink-muted">
          Фото громади
        </span>
      </div>
    </div>
  )
}

const Hero = ({ image }) => {
  return (
    <section className="relative overflow-hidden">
      {/* Soft brand glow in the background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-brand/10 blur-3xl"
      />
      <div className="container-x grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/60 px-4 py-1.5 text-sm font-semibold text-ink-soft">
            <span className="h-2 w-2 rounded-full bg-brand" />
            Хмельниччина · Орининська громада
          </p>
          <h1 className="text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
            Мрії стають змінами,
            <br />
            коли переходять{" "}
            <span className="text-brand">у&nbsp;дію</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink-soft">
            Допомагаємо дітям, молоді та активним мешканцям малих громад
            отримувати знання, підтримку й можливості для реалізації власних
            ідей.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#experience" className="btn-primary">
              Наші проєкти
              <ArrowIcon />
            </a>
            <a href="#partnership" className="btn-ghost">
              Стати партнером
            </a>
          </div>
        </div>

        {/* Photo card with decorative blobs and an overlapping caption */}
        <div className="relative">
          {/* Decorative blobs behind the frame */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-6 -top-8 h-40 w-40 rounded-[2.5rem] bg-[#f6c344]/70 rotate-6"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-10 -left-8 h-44 w-44 rounded-[2.5rem] bg-moss/30 -rotate-6"
          />

          {/* Tilted photo frame */}
          <figure className="relative rounded-card bg-white p-3 shadow-xl shadow-ink/10 rotate-1">
            <HeroPhoto image={image} />

            {/* Caption card overlapping the bottom of the photo */}
            <figcaption className="relative z-10 mx-2 -mt-10 rounded-2xl border border-ink/10 bg-white p-5 shadow-lg shadow-ink/10">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-moss">
                <span className="h-2 w-2 rounded-full bg-moss" />
                Жива спільнота
              </p>
              <p className="mt-2 text-lg font-bold leading-snug text-ink">
                Простір, де діти й молодь можуть розвиватися разом
              </p>
              <p className="mt-1 text-sm text-ink-muted">
                Орининська громада · Хмельниччина
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}

export default Hero
