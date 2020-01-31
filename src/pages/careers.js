import React from "react"
import Layout from "../components/layout.js"
import SEO from "../components/seo.js"
import { 
  Header,
  HeroImage,
  Positions,
  SubmitAResume
} from "../components/careers"
import { graphql } from "gatsby"
import {} from "@vschool/lotus"

export default function Careers({ data }) {
    const {
        careers_header,
        careers_sub_header,
        header_invite,
        careers_hero_img_sm,
        careers_hero_img_lg,
        btn_text,
        btn_link,
        no_openings,
        no_openings_sub,
        open_positions,
        position
    } = data.prismicCareers.data
    console.log(data)
    return (
        <Layout>
            <SEO title={careers_header.text} />
            <Header
                header={careers_header.text}
                subHeader={careers_sub_header.text}
                invite={header_invite.text}
            />
            <HeroImage 
              heroImgLg={careers_hero_img_lg.url}
              heroImgSm={careers_hero_img_sm.url}
            />
            <Positions 
              header={open_positions.text}
              positions={position}
            />
            <SubmitAResume 
              title={no_openings.text}
              sub={no_openings_sub.text}
              link={btn_link.url}
              btnText={btn_text.text}
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