import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import BootcampPrimer from "../components/bootcamp-primer"

export default function BootcampPrimerPage() {
    return (
        <Layout>
            <Seo title={"Bootcamp Primer"} />
            <BootcampPrimer />
        </Layout>
    )
}
