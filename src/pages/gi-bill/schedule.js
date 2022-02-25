import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import GiBillCalendly from "../../components/gi-bill-calendly"

export default function GiBill() {
    return (
        <Layout>
            <Seo title={"GI Bill Coding Bootcamp | Schedule a Call"} />
            <GiBillCalendly />
        </Layout>
    )
}
