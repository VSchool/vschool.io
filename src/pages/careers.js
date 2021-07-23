import React from "react"
import Layout from "../components/layout.js"
import Seo from "../components/seo.js"

import CareersPage from "../components/careers"

export default function Careers({ data }) {
    return (
        <Layout>
            <Seo title={"Careers Page"} />
            <CareersPage />
        </Layout>
    )
}
