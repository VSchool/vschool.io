import React from "react"
import Layout from "../components/layout.js"
import SEO from "../components/seo.js"
import {
  Header
} from "../components/careers"
import { useStaticQuery, graphql } from "gatsby"
import {  } from "@vschool/lotus"

export default function Careers(){
  const { 
    prismicCareers: {
      data: {
        careers_header: {
          text: header
        }
      }
    }
  } = useStaticQuery(graphql`
  {
    prismicCareers {
      data {
        careers_header {
          text
        }
      }
    }
  }
`)
  return (
    <Layout>
      <SEO title={header}/>
      <Header />

    </Layout>
  )
}