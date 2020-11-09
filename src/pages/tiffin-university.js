import React from "react"
import Layout from "../components/layout.js"
import SEO from "../components/seo.js"
import TiffinUniversityPage from "../components/tiffin-university"

export default function Tiffin() {

    return (
        <Layout>
            <SEO title={"Tiffin University"} />
            <TiffinUniversityPage />
        </Layout>
    )
}
