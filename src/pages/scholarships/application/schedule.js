import React from "react"
import ScholarshipAppLayout from "../../../components/scholarships/application/ScholarshipApplicationLayout"
import SEO from "../../../components/seo"
import Scheduler from "../../../components/scholarships/application/schedule"

export default function CalendlyScheduler() {
    return (
        <ScholarshipAppLayout>
            <SEO title="Scholarship Application | Schedule a time" />
            <Scheduler />
        </ScholarshipAppLayout>
    )
}
