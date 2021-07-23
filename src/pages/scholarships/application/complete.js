import React from "react"
import ScholarshipAppLayout from "../../../components/scholarships/application/ScholarshipApplicationLayout"
import Seo from "../../../components/seo"
import ApplicationComplete from "../../../components/scholarships/application/complete"
import { blue } from "@vschool/lotus"
const ApplicationCompletePage = () => {
    return (
        <ScholarshipAppLayout backgroundColor={blue.lightest}>
            <Seo title="Scholarship Application | Application Submitted" />
            <ApplicationComplete />
        </ScholarshipAppLayout>
    )
}

export default ApplicationCompletePage
