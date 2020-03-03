import React from "react"
import Layout from "../components/layout.js"
import SEO from "../components/seo.js"
import { graphql } from "gatsby"
import { Header } from "../components/admissions"
import { ISA, PaymentOptions } from "../components/shared"

export default function Admissions({ data }) {
    const {
        financing_sub: { text: sub },
        financing_hero_img: { url: heroImg },
        financing_header: { text: header },
        financing_btn_link: { url: link },
        financing_btn: { text: btnText },
        isa_sub2: { text: isaSub2 },
        isa_sub1: { text: isaSub1 },
        isa_learn_more_link: { url: isaLink },
        isa_learn_more_btn: { text: isaBtnText },
        isa_info1: { text: isaInfo1 },
        isa_info2: { text: isaInfo2 },
        isa_header: { text: isaHeader },
        isa_image: { url: isaImg },
        payment_options,
    } = data.prismicIsaPage.data
    return (
        <Layout>
            <SEO title={header} />
            <Header
                header={header}
                sub={sub}
                btnText={btnText}
                link={link}
                heroImg={heroImg}
            />
            <ISA
                header={isaHeader}
                sub1={isaSub1}
                sub2={isaSub2}
                info1={isaInfo1}
                info2={isaInfo2}
                img={isaImg}
                btnText={isaBtnText}
                link={isaLink}
            />
            <PaymentOptions options={payment_options} />
        </Layout>
    )
}

export const query = graphql`
    {
        prismicIsaPage {
            data {
                financing_sub {
                    text
                }
                financing_hero_img {
                    url
                }
                financing_header {
                    text
                }
                financing_btn_link {
                    url
                }
                financing_btn {
                    text
                }
                payment_options {
                    payment_type {
                        text
                    }
                    payment_info_link {
                        url
                    }
                    payment_info {
                        text
                    }
                }
                isa_sub2 {
                    text
                }
                isa_sub1 {
                    text
                }
                isa_learn_more_link {
                    url
                }
                isa_learn_more_btn {
                    text
                }
                isa_info1 {
                    text
                }
                isa_info2 {
                    text
                }
                isa_header {
                    text
                }
                isa_image {
                    url
                }
            }
        }
    }
`
