require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        title: `V School`,
        description: `Better Humans, Better Outcomes.`,
        author: `@vschool`,
    },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-canonical-urls`,
            options: {
                siteUrl: `https://vschool.io`,
                stripQueryString: true,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-netlify`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/vs_favicon.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-source-prismic`,
            options: {
                repositoryName: `vschool`,
                accessToken: process.env.PRISMIC_API_KEY,
                schemas: {
                    "404_page": require("./src/schemas/404_page.json"),
                    about: require("./src/schemas/about.json"),
                    alumni_companies: require("./src/schemas/alumni_companies.json"),
                    application_page: require("./src/schemas/application_page.json"),
                    "blog-items": require("./src/schemas/blog-items.json"),
                    bootcamp_primer: require("./src/schemas/bootcamp_primer.json"),
                    careers: require("./src/schemas/careers.json"),
                    "community-relief-scholarship": require("./src/schemas/community-relief-scholarship.json"),
                    "development-page": require("./src/schemas/development-page.json"),
                    education_phases: require("./src/schemas/education_phases.json"),
                    footer: require("./src/schemas/footer.json"),
                    "get-involved": require("./src/schemas/get-involved.json"),
                    "home-page": require("./src/schemas/home-page.json"),
                    "isa-page": require("./src/schemas/isa-page.json"),
                    "living-in-salt-lake": require("./src/schemas/living-in-salt-lake.json"),
                    "methodology-page": require("./src/schemas/methodology-page.json"),
                    "my-base-scholarship": require("./src/schemas/my-base-scholarship.json"),
                    navigation_bar: require("./src/schemas/navigation_bar.json"),
                    press: require("./src/schemas/press.json"),
                    responsive_learning: require("./src/schemas/responsive_learning.json"),
                    start_date: require("./src/schemas/start_date.json"),
                    "thank-you-page": require("./src/schemas/thank-you-page.json"),
                    tiffin: require("./src/schemas/tiffin.json"),
                    uofu_primer: require("./src/schemas/uofu_primer.json"),
                    "va-scholarship": require("./src/schemas/va-scholarship.json"),
                    veterans_page: require("./src/schemas/veterans_page.json"),
                    "xd-page": require("./src/schemas/xd-page.json"),
                    "you-belong": require("./src/schemas/you-belong.json"),
                },
                // linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
            },
        },
        // {
        //     resolve: `gatsby-source-ghost`,
        //     options: {
        //         apiUrl: `https://blog.vschool.io`,
        //         contentApiKey: process.env.GHOST_API_KEY,
        //     },
        // },
        {
            resolve: `gatsby-plugin-hotjar`,
            options: {
                id: process.env.HOTJAR_ID,
                sv: 6,
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
            },
        },
        {
            resolve: "gatsby-plugin-google-tagmanager",
            options: {
                id: process.env.GOOGLE_TAG_MANAGER_ID,
                defaultDataLayer: { platform: "gatsby" },
            },
        },
        {
            resolve: `gatsby-plugin-facebook-pixel`,
            options: {
                pixelId: process.env.FACEBOOK_PIXEL_ID,
            },
        },
        {
            resolve: `gatsby-plugin-intercom`,
            options: {
                appId: process.env.INTERCOM_APP_ID,
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
