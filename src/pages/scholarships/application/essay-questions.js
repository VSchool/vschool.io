import React from "react"
import ScholarshipAppLayout from "../../../components/scholarships/application/ScholarshipApplicationLayout"
import SEO from "../../../components/seo"
import EssayQuestionsFormComponent from "../../../components/scholarships/application/essay-questions"

const EssayQuestionsForm = () => {
    return (
        <ScholarshipAppLayout>
            <SEO title="Scholarship Application | Essay Questions" />
            <EssayQuestionsFormComponent />
        </ScholarshipAppLayout>
    )
}

export default EssayQuestionsForm
