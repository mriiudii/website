import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/sections/hero"
import About from "../components/sections/about"
import Directions from "../components/sections/directions"
import Timeline from "../components/sections/timeline"
import Experience from "../components/sections/experience"
import Stats from "../components/sections/stats"
import Values from "../components/sections/values"
import Team from "../components/sections/team"
import Partners from "../components/sections/partners"
import Partnership from "../components/sections/partnership"
import Contacts from "../components/sections/contacts"

// Map Contentful edges to plain objects, ordered by the `order` field.
const mapNodes = (edges, mapper) =>
  (edges || [])
    .map(({ node }) => node)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
    .map(mapper)

const IndexPage = ({ data }) => {
  // Contentful collections (empty arrays until the content model is populated —
  // every section falls back to in-code defaults when its list is empty).
  const settings = data?.contentfulSiteSettings
    ? {
        phone: data.contentfulSiteSettings.phone,
        email: data.contentfulSiteSettings.email,
        leaderEmail: data.contentfulSiteSettings.leaderEmail,
        legalAddress: data.contentfulSiteSettings.legalAddress,
        facebookUrl: data.contentfulSiteSettings.facebookUrl,
        instagramUrl: data.contentfulSiteSettings.instagramUrl,
      }
    : undefined

  const directions = mapNodes(data?.allContentfulDirection?.edges, n => ({
    id: n.id,
    title: n.title,
    description: n.description,
    icon: n.icon,
  }))

  const timeline = mapNodes(data?.allContentfulTimelineEvent?.edges, n => ({
    id: n.id,
    period: n.period,
    title: n.title,
    description: n.description,
  }))

  const projects = mapNodes(data?.allContentfulProject?.edges, n => ({
    id: n.id,
    title: n.title,
    year: n.year,
    metric: n.metric,
    partnerCredit: n.partnerCredit,
    story: n.story,
    result: n.result,
  }))

  const stats = mapNodes(data?.allContentfulStat?.edges, n => ({
    id: n.id,
    value: n.value,
    label: n.label,
  }))

  const team = mapNodes(data?.allContentfulTeamMember?.edges, n => ({
    id: n.id,
    name: n.name,
    role: n.role,
    focus: n.focus,
  }))

  const partners = mapNodes(data?.allContentfulPartner?.edges, n => ({
    id: n.id,
    name: n.name,
    relation: n.relation,
    url: n.url,
  }))

  return (
    <Layout settings={settings}>
      <Hero />
      <About />
      <Directions directions={directions} />
      <Timeline events={timeline} />
      <Experience projects={projects} />
      <Stats stats={stats} />
      <Values />
      <Team members={team} />
      <Partners partners={partners} />
      <Partnership />
      <Contacts settings={settings} />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <Seo />

/**
 * Contentful page query.
 *
 * Field availability for empty (0-entry) content types is guaranteed by the
 * explicit schema in `gatsby-node.js`. Every collection may be empty — the
 * sections fall back to in-code defaults when their list is empty, so the page
 * renders with or without CMS data. Sorting by `order` happens in JS (mapNodes).
 *
 * Media fields (project.image / teamMember.photo / partner.logo) are intentionally
 * not queried yet: the space has no assets, and `gatsbyImageData` can't resolve
 * without them. Add them back once real images are uploaded to Contentful.
 */
export const query = graphql`
  query HomePageQuery {
    contentfulSiteSettings {
      phone
      email
      leaderEmail
      legalAddress
      facebookUrl
      instagramUrl
    }
    allContentfulDirection {
      edges {
        node {
          id
          title
          description
          icon
          order
        }
      }
    }
    allContentfulTimelineEvent {
      edges {
        node {
          id
          period
          title
          description
          order
        }
      }
    }
    allContentfulProject {
      edges {
        node {
          id
          title
          year
          metric
          partnerCredit
          story
          result
          order
        }
      }
    }
    allContentfulStat {
      edges {
        node {
          id
          value
          label
          order
        }
      }
    }
    allContentfulTeamMember {
      edges {
        node {
          id
          name
          role
          focus
          order
        }
      }
    }
    allContentfulPartner {
      edges {
        node {
          id
          name
          relation
          url
          order
        }
      }
    }
  }
`
