import React from "react"
import Layout from "../components/layout.js"
import Seo from "../components/seo.js"
import Admissions from "../components/admissions"

export default function AdmissionsPage({ data }) {
    return (
        <Layout>
            <Seo title={"Tuition Info & Financing Options"} />
            <Admissions />
        </Layout>
    )
}
