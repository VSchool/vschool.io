import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import NotFound from "../components/404"

const NotFoundPage = () => {
    return (
        <Layout>
            <Seo title={"Page Not Found"} />
            <NotFound />
        </Layout>
    )
}

export default NotFoundPage
