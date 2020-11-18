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
                    application_page: require("./src/schemas/application_page.json"),
                    "blog-items": require("./src/schemas/blog-items.json"),
                    bootcamp_primer: require("./src/schemas/bootcamp_primer.json"),
                    careers: require("./src/schemas/careers.json"),
                    "community-relief-scholarship": require("./src/schemas/community-relief-scholarship.json"),
                    company_logos: require("./src/schemas/company_logos.json"),
                    course_cards: require("./src/schemas/course_cards.json"),
                    course_info: require("./src/schemas/course_info.json"),
                    "development-page": require("./src/schemas/development-page.json"),
                    digital_family_page: require("./src/schemas/digital_family_page.json"),
                    education_phases: require("./src/schemas/education_phases.json"),
                    footer: require("./src/schemas/footer.json"),
                    "get-involved": require("./src/schemas/get-involved.json"),
                    "home-page": require("./src/schemas/home-page.json"),
                    "isa-page": require("./src/schemas/isa-page.json"),
                    "living-in-salt-lake": require("./src/schemas/living-in-salt-lake.json"),
                    "methodology-page": require("./src/schemas/methodology-page.json"),
                    mother_coders: require("./src/schemas/mother_coders.json"),
                    "my-base-scholarship": require("./src/schemas/my-base-scholarship.json"),
                    navigation_bar: require("./src/schemas/navigation_bar.json"),
                    payment_options: require("./src/schemas/payment_options.json"),
                    press: require("./src/schemas/press.json"),
                    rankings_component: require("./src/schemas/rankings_component.json"),
                    responsive_learning: require("./src/schemas/responsive_learning.json"),
                    scholarship_application_forms: require("./src/schemas/scholarship_application_forms.json"),
                    scholarships_intro_page: require("./src/schemas/scholarships_intro_page.json"),
                    scholarship_page: require("./src/schemas/scholarship_page.json"),
                    scholarship_page_shared_data: require("./src/schemas/scholarship_page_shared_data"),
                    start_date: require("./src/schemas/start_date.json"),
                    "thank-you-page": require("./src/schemas/thank-you-page.json"),
                    tiffin: require("./src/schemas/tiffin.json"),
                    uofu_primer: require("./src/schemas/uofu_primer.json"),
                    "va-scholarship": require("./src/schemas/va-scholarship.json"),
                    veterans_page: require("./src/schemas/veterans_page.json"),
                    "xd-page": require("./src/schemas/xd-page.json"),
                    "you-belong": require("./src/schemas/you-belong.json"),
                },
                linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
            },
        },
        {
            resolve: `gatsby-source-ghost`,
            options: {
                apiUrl: `https://blog.vschool.io`,
                contentApiKey: process.env.GHOST_API_KEY,
            },
        },
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
            resolve: `gatsby-source-formium`,
            options: {
                // Get your projectId from https://dashboard.formium.io
                projectId: process.env.GATSBY_FORMIUM_PROJECTID,
                // Generate a personal access token by going to https://dashboard.formium.io/account#tokens and put it into a .env file (learn more about Gatsby environment variables here: https://gatsby.dev/env-vars).
                accessToken: process.env.FORMIUM_ACCESS_TOKEN,
            },
        },
    ],
}
