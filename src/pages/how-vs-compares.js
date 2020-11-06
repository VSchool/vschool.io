import React from "react"
import Layout from "../components/layout.js"
import SEO from "../components/seo.js"
import { graphql } from "gatsby"
import ComparesPage from '../components/methodology'

export default function HowVSCompares({ data }) {

    return (
        <Layout>
            <SEO title="How VS Compares" />
            <ComparesPage />
        </Layout>
    )
}
