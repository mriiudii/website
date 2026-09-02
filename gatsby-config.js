require("dotenv").config()

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Мрії у Дії — громадська організація`,
    description: `Локальна громадська організація з Хмельниччини. Допомагаємо дітям, молоді та активним мешканцям малих громад перетворювати ідеї на реальні зміни через освіту, партнерство та підприємництво.`,
    siteUrl: `https://mriiudii.org`,
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        // Falls back to the committed Delivery credentials so the build keeps
        // working; override via .env for local/CI setups.
        accessToken:
          process.env.CONTENTFUL_ACCESS_TOKEN ||
          "SQigjEKwTXqxziOZYdYvDagHqRasdk9TWZcb0ttytKA",
        spaceId: process.env.CONTENTFUL_SPACE_ID || "lqnvbpwsg2ka",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Мрії у Дії — громадська організація",
        short_name: "Мрії у Дії",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#ffffff",
        display: "minimal-ui",
        icon: "src/images/icon.png",
      },
    },
  ],
}
