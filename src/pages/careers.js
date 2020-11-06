import React from "react"
import Layout from "../components/layout.js"
import SEO from "../components/seo.js"
import { graphql } from "gatsby"

import CareersPage from '../components/careers'

export default function Careers({ data }) {

    return (
        <Layout>
            <SEO title={'Careers Page'} />
            <CareersPage />
        </Layout>
    )
}
