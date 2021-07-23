import React from "react"
import ScholarshipAppLayout from "../../../components/scholarships/application/ScholarshipApplicationLayout"
import Seo from "../../../components/seo"
import BackgroundInfoFormComponent from "../../../components/scholarships/application/background-info"

const BackgroundInfoForm = () => {
    return (
        <ScholarshipAppLayout>
            <Seo title="Scholarship Application | Background Information" />
            <BackgroundInfoFormComponent />
        </ScholarshipAppLayout>
    )
}

export default BackgroundInfoForm
