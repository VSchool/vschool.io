import React from "react"
import Layout from "../components/layout.js"
import SEO from "../components/seo.js"
import CareersPage from '../components/careers'

export default function Careers() {

    return (
        <Layout>
            <SEO title={'Careers Page'} />
            <CareersPage />
        </Layout>
    )
}
