import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import PreCourseForm from "../../components/pre-course-form"

export default function PreCourseCommunitiesForm(props) {
    return (
        <Layout>
            <Seo title={"Pre Course Communities Form"} />
            <PreCourseForm {...props} />
        </Layout>
    )
}
