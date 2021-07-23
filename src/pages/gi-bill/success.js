import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import GiSuccess from "../../components/gi-bill-success"

export default function Success() {
    return (
        <Layout>
            <Seo title={"GI Bill Coding Bootcamp Success Page"} />
            <GiSuccess />
        </Layout>
    )
}
