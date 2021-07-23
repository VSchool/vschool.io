import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import GiBillPage from "../../components/gi-bill"

export default function GiBill() {
    return (
        <Layout>
            <Seo title={"GI Bill Coding Bootcamp"} />
            <GiBillPage />
        </Layout>
    )
}
