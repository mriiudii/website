/**
 * Explicit GraphQL schema for the Contentful content types.
 *
 * gatsby-source-contentful only materialises a field once at least one entry
 * populates it, so a content type with 0 entries would break the homepage query.
 * Declaring the fields here keeps the schema stable whether the space is empty
 * or full — the homepage falls back to in-code defaults for empty collections.
 *
 * NOTE: no createPages logic lives here. All text fields are declared as String,
 * so the matching Contentful fields must be "Short text" (not "Long text"), which
 * would resolve to a child node object instead.
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
      year: String
      partnerCredit: String
      metric: String
      story: String
      result: String
      order: Int
    }

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
