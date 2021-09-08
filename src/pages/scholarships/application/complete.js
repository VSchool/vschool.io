import React from "react"
import Layout from "../../../components/layout.js"
import Seo from "../../../components/seo"
import SyllabusDownload from '../../../components/shared/SyllabusDownload'
import ApplicationComplete from "../../../components/scholarships/application/complete"
import { blue } from "@vschool/lotus"

const ApplicationCompletePage = () => {
    return (
        <Layout backgroundColor={blue.lightest}>
            <Seo title="Scholarship Application | Application Submitted" />
            <ApplicationComplete />
            <SyllabusDownload />
        </Layout>
    )
}

export default ApplicationCompletePage
