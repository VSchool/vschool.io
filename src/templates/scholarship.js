import React from "react"
import { ThemeProvider } from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ScholarshipPage from "../components/scholarship"
import {
    blue,
    pink,
    purple,
    red,
    orange,
    yellow,
    green,
    gray,
} from "@vschool/lotus"

const colors = { blue, pink, purple, red, orange, yellow, green, gray }

export default function ScholarshipPageTemplate({ pageContext }) {
    const {
        primary_theme_color: primaryThemeColorString,
        secondary_theme_color: secondaryThemeColorString,
        scholarship_name: { text: scholarshipName },
    } = pageContext.data
    const primaryThemeColor = colors[primaryThemeColorString]
    const secondaryThemeColor = colors[secondaryThemeColorString]

    return (
        <Layout>
            <Seo title={`${scholarshipName}`} />
            <ThemeProvider
                theme={{
                    primary: primaryThemeColor,
                    secondary: secondaryThemeColor,
                }}
            >
                <ScholarshipPage data={pageContext.data} />
            </ThemeProvider>
        </Layout>
    )
}
