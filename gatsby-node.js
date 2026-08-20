/**
 * Explicit GraphQL schema for the Contentful content types.
 *
 * gatsby-source-contentful only materialises a field once at least one entry
 * populates it, so a content type with 0 entries would break the homepage query.
 * Declaring the fields here keeps the schema stable whether the space is empty
 * or full — the homepage falls back to in-code defaults for empty collections.
 *
 * All text fields are declared as String, so the matching Contentful fields must
 * be "Short text" (not "Long text"), which would resolve to a child node object
 * instead. `createPages` (below) generates the per-project article pages.
 */
exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(`
    type ContentfulSiteSettings implements Node {
      internalTitle: String
      phone: String
      email: String
      leaderEmail: String
      legalAddress: String
      facebookUrl: String
      facebookTitle: String
      instagramUrl: String
    }

    type ContentfulDirection implements Node {
      title: String
      description: String
      icon: String
      order: Int
    }

    type ContentfulTimelineEvent implements Node {
      period: String
      title: String
      description: String
      order: Int
    }

    type ContentfulProject implements Node {
      title: String
      slug: String
      year: String
      partnerCredit: String
      metric: String
      story: String
      result: String
      order: Int
    }
    # NOTE: the project photo "gallery" (Array of Assets) is intentionally NOT
    # declared here. gatsby-source-contentful only materialises ContentfulAsset
    # sub-fields (title, gatsbyImageData) once real assets exist, so querying it
    # while the space is empty breaks the build. The gallery query in
    # src/templates/project.js is gated off until assets are uploaded — re-enable
    # it (and add "gallery: [ContentfulAsset]" here) at that point.

    type ContentfulStat implements Node {
      value: String
      label: String
      order: Int
    }

    type ContentfulTeamMember implements Node {
      name: String
      role: String
      focus: String
      order: Int
    }

    type ContentfulPartner implements Node {
      name: String
      relation: String
      url: String
      order: Int
    }
  `)
}

/**
 * Generate one article page per project from the in-code PROJECTS list.
 * The full project object is passed through pageContext; the template also
 * queries Contentful (by slug) for the project's photo gallery.
 */
const path = require("path")
const { PROJECTS } = require("./src/data/projects")

exports.createPages = ({ actions }) => {
  const { createPage } = actions
  const template = path.resolve("./src/templates/project.js")

  PROJECTS.forEach(project => {
    createPage({
      path: `/projects/${project.slug}`,
      component: template,
      context: { slug: project.slug, project },
    })
  })
}
