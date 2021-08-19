import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Downloader from "../../components/partners-precourse/pre-course-packet/DownloadXD"

export default function PreCourseDownload() {
    return (
        <Layout>
            <Seo title={"Pre Course Partners Packet Download"} />
            <Downloader />
        </Layout>
    )
}
