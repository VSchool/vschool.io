import React from "react"
import Seo from "../components/seo"
import Form from "../components/completion-form/intro-page"
import SimpleNav from "../components/scholarships/application/SimpleNav";

export default function PreCourseForm() {
    return (
    <>
        <SimpleNav />
        <Seo title={"Pre Course Partners Form"} />
        <Form />
    </>
    )
}