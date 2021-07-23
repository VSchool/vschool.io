import React from "react"
import Layout from "../../components/layout.js"
import Seo from "../../components/seo.js"
import Syllabus from "../../components/syllabus"
import designImage from "../../images/syllabus-design-image.png"

export default function Design() {
    return (
        <Layout>
            <Seo title={"Design Syllabus"} />
            <Syllabus
                image={designImage}
                convertKitTag="syllabus dl - ux/ui design"
            />
        </Layout>
    )
}
