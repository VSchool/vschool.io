/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
    // Query all page data
    const result = await graphql(`
        {
            allGhostPost(sort: { order: ASC, fields: published_at }) {
                edges {
                    node {
                        title
                        slug
                        feature_image
                        html
                        reading_time
                        title
                        url
                        updated_at
                        published_at(formatString: "MMMM DD, YYYY")
                        page
                        primary_tag {
                            name
                        }
                        authors {
                            slug
                            name
                            profile_image
                            cover_image
                        }
                    }
                }
            }
            allPrismicScholarshipPage(
                filter: { data: { active: { eq: true } } }
            ) {
                edges {
                    node {
                        uid
                        data {
                            convertkit_tag
                            deadline_text {
                                text
                            }
                            deadline_date(formatString: "MMMM Do, YYYY")
                            details_logo {
                                alt
                                url
                            }
                            details_subtitle {
                                text
                            }
                            details_text {
                                html
                            }
                            details_title {
                                text
                            }
                            hero_title {
                                text
                            }
                            hero_text {
                                text
                            }
                            hero_scholarship_amount {
                                text
                            }
                            hero_image {
                                alt
                                url
                            }
                            hero_card_image {
                                alt
                                url
                            }
                            hero_button_text {
                                text
                            }
                            faq_list {
                                faq_answer {
                                    text
                                }
                                faq_question {
                                    text
                                }
                            }
                            icon {
                                alt
                                url
                            }
                            partner_logos {
                                partner_logo {
                                    alt
                                    url
                                }
                            }
                            partner_title {
                                text
                            }
                            primary_theme_color
                            secondary_theme_color
                            scholarship_name {
                                text
                            }
                            testimonial_image {
                                alt
                                url
                            }
                            testimonial_name {
                                text
                            }
                            testimonial_quote {
                                text
                            }
                            testimonial_status {
                                text
                            }
                            winner_announced_text {
                                text
                            }
                            winner_announced_date(formatString: "MMMM Do, YYYY")
                        }
                    }
                }
            }
            allPrismicCoursePage {
                edges {
                    node {
                        uid
                        data {
                            apply_other {
                                text
                            }
                            apply_other_button {
                                text
                            }
                            apply_other_link {
                                url
                            }
                            course_name {
                                text
                            }
                            description_image {
                                alt
                                url
                            }
                            description_subtitle {
                                text
                            }
                            description_text {
                                html
                            }
                            description_title {
                                text
                            }
                            faq_title {
                                text
                            }
                            faq_questions {
                                faq_answer {
                                    text
                                }
                                faq_question {
                                    text
                                }
                            }
                            form_button {
                                text
                            }
                            form_convertkit_tag
                            form_image {
                                alt
                                url
                            }
                            form_inputs {
                                form_label {
                                    text
                                }
                                form_placeholder {
                                    text
                                }
                            }
                            form_subtitle {
                                text
                            }
                            form_title {
                                text
                            }
                            hero_title {
                                text
                            }
                            hero_text {
                                text
                            }
                            hero_image {
                                alt
                                url
                            }
                            hero_button_text {
                                text
                            }
                            hero_button_url {
                                url
                            }
                            outcomes_title {
                                text
                            }
                            outcomes_stats {
                                stat_text {
                                    text
                                }
                                stat_number {
                                    text
                                }
                            }
                            outcomes_stats_caption {
                                text
                            }
                            outcomes_testimonials {
                                testimonial_image {
                                    alt
                                    url
                                }
                                testimonial_text {
                                    text
                                }
                                testimonial_name {
                                    text
                                }
                                testimonial_name_info {
                                    text
                                }
                            }
                            primary_theme_color
                            student_journey_image {
                                alt
                                url
                            }
                            team_subtitle {
                                text
                            }
                            team_title {
                                text
                            }
                            payments_checkmark {
                                alt
                                url
                            }
                            payments_options {
                                payment_type {
                                    text
                                }
                            }
                            payments_subtitle {
                                text
                            }
                            payments_title {
                                text
                            }
                            body {
                                ... on PrismicCoursePageBodySkillsSection {
                                    items {
                                        skill_text {
                                            text
                                        }
                                    }
                                    primary {
                                        skill_name {
                                            text
                                        }
                                    }
                                }
                            }
                            body1 {
                                ... on PrismicCoursePageBody1TeamIndividuals {
                                    id
                                    items {
                                        team_individual_name {
                                            text
                                        }
                                        team_individual_image {
                                            alt
                                            url
                                        }
                                        team_individual_logo {
                                            alt
                                            url
                                        }
                                        team_individual_title {
                                            text
                                        }
                                    }
                                    primary {
                                        team_individual_type {
                                            text
                                        }
                                    }
                                }
                            }
                        }
                        url
                    }
                }
            }
            allPrismicPrecourseCommunitiesPage {
                edges {
                    node {
                        uid
                        data {
                            meta_partner_name {
                                text
                            }
                            convertkit_subscribe_tag
                            hero_image {
                                alt
                                url
                            }
                            hero_text {
                                text
                            }
                            hero_background_color
                            partnership_partner_logo {
                                alt
                                url
                            }
                            partnership_partner_text {
                                text
                            }
                            partnership_title {
                                text
                            }
                        }
                    }
                }
            }
        }
    `)
    // Handle errors
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }
    if (!result.data.allGhostPost) {
        return
    }

    // Create pages for each Ghost post
    const postTemplate = path.resolve(`./src/templates/post.js`)
    const blogPosts = result.data.allGhostPost.edges
    blogPosts.forEach(({ node }) => {
        node.url = `/blog/${node.slug}/`
        actions.createPage({
            path: node.url,
            component: postTemplate,
            context: {
                slug: node.slug,
                data: node,
            },
        })
    })

    // Create pages for each scholarship page
    const scholarshipTemplate = path.resolve(`./src/templates/scholarship.js`)
    const scholarshipPages = result.data.allPrismicScholarshipPage.edges
    scholarshipPages.forEach(({ node }) => {
        node.url = `/scholarships/${node.uid}/`
        actions.createPage({
            path: node.url,
            component: scholarshipTemplate,
            context: {
                uid: node.uid,
                data: node.data,
            },
        })
    })

    // Create pages for each course page
    const courseTemplate = path.resolve(`./src/templates/course.js`)
    const coursePages = result.data.allPrismicCoursePage.edges
    coursePages.forEach(({ node }) => {
        node.url = `/courses/${node.uid}/`
        actions.createPage({
            path: node.url,
            component: courseTemplate,
            context: {
                uid: node.uid,
                data: node.data,
            },
        })
    })

    // Create pages for each pre-course communities page
    const precourseTemplate = path.resolve(
        `./src/templates/precourse-community.js`
    )
    const precoursePages = result.data.allPrismicPrecourseCommunitiesPage.edges
    precoursePages.forEach(({ node }) => {
        node.url = `/${node.uid}/`
        actions.createPage({
            path: node.url,
            component: precourseTemplate,
            context: {
                uid: node.uid,
                data: node.data,
            },
        })
    })

    // Redirects. These don't seem to be working locally (even using gatsby build + serve),
    // but once they're deployed on Netlify they work fine
    actions.createRedirect({
        fromPath: "/fsjs",
        toPath: "/development",
        isPermanent: true,
        force: true,
    })

    actions.createRedirect({
        fromPath: "/en",
        toPath: "/",
        isPermanent: true,
        force: true,
    })

    actions.createRedirect({
        fromPath: "/book-a-time",
        toPath: "/apply",
        isPermanent: true,
        force: true,
    })

    actions.createRedirect({
        fromPath: "/adobe",
        toPath: "/",
        isPermanent: true,
        force: true,
    })

    actions.createRedirect({
        fromPath: "/paylater",
        toPath: "/admissions",
        isPermanent: true,
        force: true,
    })

    actions.createRedirect({
        fromPath: "/you-belong",
        toPath: "/scholarships/you-belong-in-tech",
        isPermanent: true,
        force: true,
    })

    actions.createRedirect({
        fromPath: "/gibill",
        toPath: "/veterans",
        isPermanent: true,
        force: true,
    })

    actions.createRedirect({
        fromPath: "/free-course-react",
        toPath: "/intro-to-tech-course",
        isPermanent: true,
        force: true,
    })

    actions.createRedirect({
        fromPath: "/bootcamp-primer",
        toPath: "/intro-to-tech-course",
        isPermanent: true,
        force: true,
    })

    actions.createRedirect({
        fromPath: "/mothercoders",
        toPath: "/tech-moms",
        isPermanent: true,
        force: true,
    })

    actions.createRedirect({
        fromPath: "/scholarships/we-are-the-mighty",
        toPath: "/scholarships/veterans-in-tech",
        isPermanent: true,
        force: true,
    })

    actions.createRedirect({
        fromPath: "/development",
        toPath: "/courses/development",
        isPermanent: true,
        force: true,
    })

    actions.createRedirect({
        fromPath: "/experience-design",
        toPath: "/courses/design",
        isPermanent: true,
        force: true,
    })
}
