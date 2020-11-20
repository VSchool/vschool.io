import React from "react"
import ScholarshipAppLayout from "../../../components/scholarships/application/ScholarshipApplicationLayout"
import SEO from "../../../components/seo"
import BackgroundInfoFormComponent from "../../../components/scholarships/application/background-info"

const BackgroundInfoForm = () => {
    return (
        <ScholarshipAppLayout>
            <SEO title="Scholarship Application | Background Information" />
            <BackgroundInfoFormComponent />
        </ScholarshipAppLayout>
    )
}

export default BackgroundInfoForm
