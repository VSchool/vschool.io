import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ScholarshipPage from "../components/scholarship"

export const ScholarshipContext = React.createContext()

export default function ScholarshipPageTemplate(props) {
    return (
        <Layout>
            <SEO title={`${props.pageContext.name}`} />
            <ScholarshipContext.Provider value={props.pageContext.uid}>
                <ScholarshipPage uid={props.pageContext.uid} />
            </ScholarshipContext.Provider>
        </Layout>
    )
}
