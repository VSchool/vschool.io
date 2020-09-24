import React from "react"
import Layout from "../components/layout.js"
import SEO from "../components/seo.js"
import Admissions from "../components/admissions"

export default function AdmissionsPage({ data }) {

    return (
        <Layout>
            <SEO title={"Tuition Info & Financing Options"} />
            <Admissions />
        </Layout>
    )
}