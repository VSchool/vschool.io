import React from "react"
import Layout from "../../components/layout.js"
import SEO from "../../components/seo.js"
import Syllabus from "../../components/syllabus"

export default function Design() {
    return (
        <Layout>
            <SEO title={"Design Syllabus"} />
            <Syllabus image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" convertKitTag="" />
        </Layout>
    )
}
