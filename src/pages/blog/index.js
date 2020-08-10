import React from "react"
import BlogLayout from "../../components/blog/blogLayout"
import SEO from "../../components/seo"
import { BlogNav, BlogList } from "../../components/blog"
import { graphql } from "gatsby"

export default function Blog({ data }) {
    const { edges } = data.allGhostPost
    const {
        code_start_date,
        design_start_date,
        learn_btn: { text: learnBtnText },
        learn_code_btn_link: { url: learnCodeBtnLink },
        learn_design_btn_link: { url: learnDesignBtnLink },
        learn_header: { text: learnHeader },
        next_code_session: { text: nextCodeSession },
        next_design_session: { text: nextDesignSession },
        subscribe_btn: { text: subscribeBtnText },
        subscribe_header: { text: subscribeHeader },
    } = data.prismicBlogItems.data

    return (
        <BlogLayout>
            <SEO title="Blog" />
            <BlogNav />
            <BlogList
                posts={edges}
                codeStartDate={code_start_date.document[0].data.start_date}
                designStartDate={design_start_date.document[0].data.start_date}
                learnHeader={learnHeader}
                learnBtnText={learnBtnText}
                learnCodeLink={learnCodeBtnLink}
                learnDesignLink={learnDesignBtnLink}
                nextCodeSession={nextCodeSession}
                nextDesignSession={nextDesignSession}
                subscribeBtnText={subscribeBtnText}
                subscribeHeader={subscribeHeader}
            />
        </BlogLayout>
    )
}

export const query = graphql`
    {
        allGhostPost {
            edges {
                node {
                    title
                    slug
                    published_at(formatString: "MMMM DD, YYYY")
                    feature_image
                    url
                    excerpt
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
        prismicBlogItems {
            data {
                code_start_date {
                    document {
                        data {
                            start_date(formatString: "MMMM D, YYYY")
                        }
                    }
                }
                design_start_date {
                    document {
                        data {
                            start_date(formatString: "MMMM D, YYYY")
                        }
                    }
                }
                learn_btn {
                    text
                }
                learn_code_btn_link {
                    url
                }
                learn_design_btn_link {
                    url
                }
                learn_header {
                    text
                }
                next_code_session {
                    text
                }
                next_design_session {
                    text
                }
                subscribe_btn {
                    text
                }
                subscribe_header {
                    text
                }
            }
        }
    }
`
