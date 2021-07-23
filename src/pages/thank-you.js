import React from "react"
import Layout from "../components/layout.js"
import Seo from "../components/seo.js"
import { graphql } from "gatsby"
import { Header, HeroImage } from "../components/thank-you"

export default function ThankYou({ data }) {
    const {
        header: { text: header },
        hero_img: { url: heroImg },
        link1: { url: link1 },
        link1_text: { text: link1Text },
        link2: { url: link2 },
        link2_text: { text: link2Text },
        link3: { url: link3 },
        link3_text: { text: link3Text },
        sub: { text: sub },
        title: { text: title },
    } = data.prismicThankYouPage.data
    return (
        <Layout>
            <Seo title={header} />
            <Header
                title={title}
                header={header}
                sub={sub}
                link1Text={link1Text}
                link2Text={link2Text}
                link3Text={link3Text}
                link1={link1}
                link2={link2}
                link3={link3}
            />
            <HeroImage heroImg={heroImg} />
        </Layout>
    )
}

export const query = graphql`
    {
        prismicThankYouPage {
            data {
                header {
                    text
                }
                hero_img {
                    url
                }
                link1 {
                    url
                }
                link1_text {
                    text
                }
                link2 {
                    url
                }
                link2_text {
                    text
                }
                link3 {
                    url
                }
                link3_text {
                    text
                }
                sub {
                    text
                }
                title {
                    text
                }
            }
        }
    }
`
