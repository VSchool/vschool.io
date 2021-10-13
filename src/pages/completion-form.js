import React from "react"
import Seo from "../components/seo"
import SimpleNav from "../components/scholarships/application/SimpleNav";
import CompletionFormIntro from "../components/completion-form/intro-page";

export default function PreCourseForm() {
    return (
    <>
        <SimpleNav />
        <Seo title={"Pre Course Partners Form"} />
        <CompletionFormIntro />
    </>
    )
}
