import React from "react"
import Layout from "../../components/layout.js"
import Seo from "../../components/seo.js"
import Syllabus from "../../components/syllabus"
import developmentImage from "../../images/syllabus-development-image.png"

export default function Development() {
    return (
        <Layout>
            <Seo title={"Development Syllabus"} />
            <Syllabus
                image={developmentImage}
                convertKitTag="syllabus dl - web dev"
            />
        </Layout>
    )
}
