import React from "react"
import Layout from "../components/layout.js"
import Seo from "../components/seo.js"
import PrivacyPage from "../components/privacy"

export default function Privacy({ data }) {
    return (
        <Layout>
            <Seo title={"Privacy Page"} />
            <PrivacyPage />
        </Layout>
    )
}
