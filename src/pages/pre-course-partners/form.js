import React from "react"
// import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Form from "../../components/partners-precourse/pre-course-form"
import SimpleNav from "../../components/scholarships/application/SimpleNav";

export default function PreCourseForm() {
    return (
    <>
        <SimpleNav />
        <Seo title={"Pre Course Partners Form"} />
        <Form />
    </>
    )
}
