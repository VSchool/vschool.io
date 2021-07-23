import React from "react"
import HeroHeader from "./HeroHeader.js"
import Testimonial1 from "./Testimonial1.js"
import Differences from "./Differences.js"
import PathwaysHeader from "./PathwaysHeader.js"
import Pathways from "./pathways"
import SchoolComparisons from "./SchoolComparisons.js"
import Courses from "../shared/Courses"
import Testimonial2 from "./Testimonial2.js"
import Cta from "./CTA.js"

export default function ComparesPage() {
    return (
        <>
            <HeroHeader />
            <Testimonial1 />
            <Differences />
            <PathwaysHeader />
            <Pathways />
            <SchoolComparisons />
            <Courses />
            <Testimonial2 />
            <Cta />
        </>
    )
}
