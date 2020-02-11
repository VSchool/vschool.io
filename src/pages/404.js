import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import {
    Header,
    Gifs
} from "../components/404"

const NotFoundPage = ({data}) => {
    const {
        link3_text: {text: link3Text},
        link3: {url: link3},
        link2_text: {text: link2Text},
        link2: {url: link2},
        link1_text: {text: link1Text},
        link1: {url: link1},
        _404_page_title: {text: title},
        _404_page_sub: {text: sub},
        _404_page_header: {text: header},
        gifs_background: {url: gifsBackground},
        gifs
    } = data.prismic404Page.data
    return (
        <Layout>
            <SEO title={title} />
            <Header 
                title={title}
                header={header}
                sub={sub}
                link1={link1}
                link1Text={link1Text}
                link2={link2}
                link2Text={link2Text}
                link3={link3}
                link3Text={link3Text}
            />
            <Gifs 
              gifs={gifs}
              gifsBackground={gifsBackground}
            />
        </Layout>
    )
}

export const query = graphql`
  {
    prismic404Page {
      data {
        link3_text {
          text
        }
        link3 {
          url
        }
        link2_text {
          text
        }
        link2 {
          url
        }
        link1_text {
          text
        }
        link1 {
          url
        }
        gifs {
          gif {
            url
          }
        }
        gifs_background {
          url
        }
        _404_page_title {
          text
        }
        _404_page_sub {
          text
        }
        _404_page_header {
          text
        }
      }
    }
  }
`

export default NotFoundPage
