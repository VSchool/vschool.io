import React from "react"
import Layout from "../components/layout.js"
import Seo from "../components/seo.js"
import About from "../components/about-us"

export default function AboutUs() {
    return (
        <Layout>
            <Seo title={"About Us"} />
            <About />
        </Layout>
    )
}
