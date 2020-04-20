import React from "react"
import Layout from "../components/layout.js"
import SEO from "../components/seo.js"
import { Header, Cards, ContactUs } from "../components/get-involved"
import { graphql } from "gatsby"

export default function GetInvolved({ data }) {
    const {
        get_involved_header: { text: header },
        get_involved_sub: { text: subHeader },
        cards,
        contact_us: { text: title },
        contact_us_btn: { text: btnText },
        contact_us_btn_link: { url: link },
    } = data.prismicGetInvolved.data
    return (
        <Layout>
            <SEO title={"Get Involved"} />
            <Header header={header} subHeader={subHeader} />
            <Cards cards={cards} />
            <ContactUs title={title} link={link} btnText={btnText} />
        </Layout>
    )
}

// export const query = graphql`
//     {
//         prismicGetInvolved {
//             data {
//                 cards {
//                     card_header {
//                         text
//                     }
//                     card_image {
//                         url
//                     }
//                     card_link {
//                         url
//                     }
//                     card_link_text {
//                         text
//                     }
//                     card_photo {
//                         url
//                     }
//                     card_text {
//                         text
//                     }
//                 }
//                 contact_us {
//                     text
//                 }
//                 contact_us_btn {
//                     text
//                 }
//                 contact_us_btn_link {
//                     url
//                 }
//                 get_involved_header {
//                     text
//                 }
//                 get_involved_sub {
//                     text
//                 }
//             }
//         }
//     }
// `
