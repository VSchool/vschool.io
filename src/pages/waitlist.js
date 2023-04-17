import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Waitlist from "../components/courses/Waitlist"

const WaitlistPage = () => {
    return (
        <Layout>
            <Seo title={"Waitlist"} />
            <Waitlist />
        </Layout>
    )
}

export default WaitlistPage
