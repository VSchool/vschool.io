import React from "react"
import Layout from "../components/layout.js"
import SEO from "../components/seo.js"
import {
    Header,
    ShortDescription,
    LongDescription,
    Cards,
    News,
} from "../components/press"
import { graphql } from "gatsby"

export default function Press({ data }) {
    const {
        press_header: { text: header },
        short_description_title: { text: shortTitle },
        short_description: { text: shortText },
        boilerplate_description_title: { text: boilerTitle },
        boilerplate_description: { text: bDescript1 },
        boilerplate_description_p2: { text: bDescript2 },
        boilerplate_description_p3: { text: bDescript3 },
        cards,
        news: { text: newsHeader },
    } = data.prismicPress.data
    return (
        <Layout>
            <SEO title="Press" />
            <Header header={header} />
            <ShortDescription title={shortTitle} text={shortText} />
            <LongDescription
                title={boilerTitle}
                description1={bDescript1}
                description2={bDescript2}
                description3={bDescript3}
            />
            <Cards cards={cards} />
            <News header={newsHeader} />
        </Layout>
    )
}

export const query = graphql`
    {
        prismicPress {
            data {
                boilerplate_description {
                    text
                }
                boilerplate_description_p2 {
                    text
                }
                boilerplate_description_p3 {
                    text
                }
                boilerplate_description_title {
                    text
                }
                cards {
                    card_image {
                        url
                        alt
                    }
                    card_link_text {
                        text
                    }
                    card_header {
                        text
                    }
                    card_photo {
                        url
                        alt
                    }
                    card_text {
                        text
                    }
                    card_link {
                        url
                    }
                }
                press_header {
                    text
                }
                short_description {
                    text
                }
                short_description_title {
                    text
                }
                news {
                    text
                }
            }
        }
    }
`
