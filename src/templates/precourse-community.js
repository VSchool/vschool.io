import React from "react"
import { ThemeProvider } from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PrecourseCommunity from "../components/pre-course"
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

export default function PreCourseCommunityTemplate({ pageContext }) {
    const {
        primary_theme_color: primaryThemeColorString,
        course_name: { text: courseName },
    } = pageContext.data
    const primaryThemeColor = colors[primaryThemeColorString]
    return (
        <Layout>
            <SEO title={courseName} />
            <ThemeProvider
                theme={{
                    primary: primaryThemeColor,
                }}
            >
                <Course data={pageContext.data} />
            </ThemeProvider>
        </Layout>
    )
}
