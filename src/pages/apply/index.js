import React, { useEffect } from "react"
import { navigate } from 'gatsby'
import Seo from "../../components/seo"
import SyllabusDownload from "../../components/shared/SyllabusDownload"
import Calendly from "../../components/shared/Calendly"
import SimpleNav from "../../components/scholarships/application/SimpleNav"

export default function DownloadSyllabus() {
    useEffect(() => {
        localStorage.getItem("applied") && navigate('/apply/completed')
    }, [])

    const submit = () => {
        localStorage.setItem("applied", true)
        navigate('/apply/completed')
    }

    return (
        <>
            <SimpleNav />
            <Seo title={"Apply for V School"} />
            <Calendly submit={submit} link="/apply/completed" />
            <SyllabusDownload />
        </>
    )
}
