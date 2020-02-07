import React from 'react'
import Layout from "../components/layout.js"
import SEO from "../components/seo.js"
import { blue } from "@vschool/lotus"
import { graphql } from "gatsby"
import {
  Header,
  ISA,
  PaymentOptions
} from "../components/admissions"


export default function Admissions({data}){
  const {
    financing_sub: {text: sub},
    financing_hero_img: {url: heroImg},
    financing_header: {text: header},
    financing_btn_link: {url: link},
    financing_btn: {text: btnText}
  } = data.prismicIsaPage.data
  return (
    <Layout>
      <SEO title={header}/>
      <Header 
        header={header}
        sub={sub}
        btnText={btnText}
        link={link}
        heroImg={heroImg}
      />
      <ISA />
      <PaymentOptions />
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
      }
    }
  }
`