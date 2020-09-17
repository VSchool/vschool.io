import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import MotherCoders from "../components/mothercoders"

export default function BootcampPrimerPage() {
    return (
        <Layout>
            <SEO title="Mother Coders" />
            <MotherCoders />
        </Layout>
    )
}
