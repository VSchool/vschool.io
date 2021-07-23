import React from "react"
import PageHeader from "./PageHeader.js"
import MasterBasedLearning from "./MasteryBasedLearning.js"
import RespondingHeader from "./RespondingHeader.js"
import ResponsiveIndustry from "./ResponsiveIndustry.js"
import ResponsiveAbility from "./ResponsiveAbility.js"
import Quotes from "./Quotes.js"
import ResponsiveLife from "./ResponsiveLife.js"
import Cta from "./Cta.js"
import Testimonial from "./Testimonial.js"
import WorkWithUs from "./WorkWithUs.js"

export default function ResponsiveLearningPage() {
    return (
        <>
            <PageHeader />
            <MasterBasedLearning />
            <RespondingHeader />
            <ResponsiveIndustry />
            <ResponsiveAbility />
            <Quotes />
            <ResponsiveLife />
            <Cta />
            <Testimonial />
            <WorkWithUs />
        </>
    )
}
