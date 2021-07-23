import React from "react"
import Layout from "../components/layout.js"
import Seo from "../components/seo.js"
import TiffinUniversityPage from "../components/tiffin-university"

export default function Tiffin() {
    return (
        <Layout>
            <Seo title={"Tiffin University"} />
            <TiffinUniversityPage />
        </Layout>
    )
}
