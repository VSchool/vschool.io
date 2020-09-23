import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import NotFound from "../components/404"

const NotFoundPage = () => {
    return (
        <Layout>
            <SEO title={"Page Not Found"} />
            <NotFound />
        </Layout>
    )
}

export default NotFoundPage
