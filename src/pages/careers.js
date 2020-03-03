import React from "react"
import Layout from "../components/layout.js"
import SEO from "../components/seo.js"
import {
    Header,
    HeroImage,
    Positions,
    SubmitAResume,
} from "../components/careers"
import { graphql } from "gatsby"

export default function Careers({ data }) {
    const {
        careers_header: { text: header },
        careers_sub_header: { text: subHeader },
        header_invite: { text: invite },
        careers_hero_img_sm: { url: heroImgSm },
        careers_hero_img_lg: { url: heroImgLg },
        btn_text: { text: btnText },
        btn_link: { url: link },
        no_openings: { text: noOpeningsHeader },
        no_openings_sub,
        open_positions,
        position,
    } = data.prismicCareers.data
    return (
        <Layout>
            <SEO title={header} />
            <Header header={header} subHeader={subHeader} invite={invite} />
            <HeroImage heroImgLg={heroImgLg} heroImgSm={heroImgSm} />
            <Positions header={open_positions.text} positions={position} />
            <SubmitAResume
                header={noOpeningsHeader}
                sub={no_openings_sub.text}
                link={link}
                btnText={btnText}
            />
        </Layout>
    )
}

export const query = graphql`
    {
        prismicCareers {
            data {
                careers_header {
                    text
                }
                careers_sub_header {
                    text
                }
                header_invite {
                    text
                }
                careers_hero_img_sm {
                    url
                    alt
                }
                careers_hero_img_lg {
                    url
                    alt
                }
                btn_text {
                    text
                }
                btn_link {
                    url
                }
                no_openings {
                    text
                }
                no_openings_sub {
                    text
                }
                open_positions {
                    text
                }
                position {
                    position_link {
                        url
                    }
                    position_title {
                        text
                    }
                }
            }
        }
    }
`