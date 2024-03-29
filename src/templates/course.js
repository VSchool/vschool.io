import React from "react"
import { ThemeProvider } from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Course from "../components/courses"
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

export default function CoursePageTemplate({ pageContext }) {
    const {
        primary_theme_color: primaryThemeColorString,
        course_name: { text: courseName },
    } = pageContext.data
    const primaryThemeColor = colors[primaryThemeColorString]
    return (
        <Layout>
            <Seo title={courseName} />
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
