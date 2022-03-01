import React, { useState } from "react"
import Seo from "../components/seo"
import Layout from "../components/layout.js"
import SyllabusDownload from "../components/shared/SyllabusDownload"
import Calendly from "../components/shared/Calendly"
import SimpleNav from "../components/scholarships/application/SimpleNav"
import Scheduled from "../components/shared/Scheduled"
import { useEffect } from "react"

export default function DownloadSyllabus() {
    const [submitted, setSubmitted] = useState(false)

    useEffect(() => {
        localStorage.getItem("applied") && setSubmitted(true)
    }, [])

    const submit = () => {
        localStorage.setItem("applied", true)
        setSubmitted(true)
    }

    return (
        <>
            {submitted ? (
                <Layout>
                    <Seo title={"Thanks for applying!"} />
                    <Scheduled />
                    <SyllabusDownload />
                </Layout>
            ) : (
                <>
                    <SimpleNav />
                    <Seo title={"Apply for V School"} />
                    <Calendly submit={submit} link="#" />
                    <SyllabusDownload />
                </>
            )}
        </>
    )
}
