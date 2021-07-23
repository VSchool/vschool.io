import React from "react"
import ScholarshipAppLayout from "../../../components/scholarships/application/ScholarshipApplicationLayout"
import Seo from "../../../components/seo"
import EssayQuestionsFormComponent from "../../../components/scholarships/application/essay-questions"

const EssayQuestionsForm = () => {
    return (
        <ScholarshipAppLayout>
            <Seo title="Scholarship Application | Essay Questions" />
            <EssayQuestionsFormComponent />
        </ScholarshipAppLayout>
    )
}

export default EssayQuestionsForm
