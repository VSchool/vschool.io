import React from "react"
import Seo from "../../components/seo"
import Layout from "../../components/layout.js"
import SyllabusDownload from "../../components/shared/SyllabusDownload"
import Scheduled from "../../components/shared/Scheduled"

export default function DownloadSyllabus() {

    return (
        <>
            <Layout>
                <Seo title={"Thanks for applying!"} />
                <Scheduled />
                <SyllabusDownload />
            </Layout>
        </>
    )
}
