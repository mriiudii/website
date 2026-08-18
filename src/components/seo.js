import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

// Reusable <head> content for the Gatsby Head API.
const Seo = ({ title, description, pathname }) => {
  const { site } = useStaticQuery(graphql`
    query SeoQuery {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `)

  const meta = site.siteMetadata
  const seo = {
    title: title ? `${title} — ${meta.title}` : meta.title,
    description: description || meta.description,
    url: `${meta.siteUrl}${pathname || ""}`,
  }

  return (
    <>
      <html lang="uk" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="uk_UA" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
    </>
  )
}

export default Seo
