import React from "react"
import Seo from "../components/seo"
import Form from "../components/completion-form/intro-page"
import SimpleNav from "../components/scholarships/application/SimpleNav";

export default function CompletionForm() {
    return (
    <>
        <SimpleNav />
        <Seo title={"Completion Form"} />
        <Form />
    </>
    )
}