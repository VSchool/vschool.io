import React from "react"
import Layout from "../components/layout.js"
import SEO from "../components/seo.js"
import About from "../components/about-us"

export default function AboutUs() {
    return (
        <Layout>
            <SEO title={"About Us"} />
            <About />
        </Layout>
    )
}
