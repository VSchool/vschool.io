import React from 'react'
import PageHeader from "./PageHeader.js"
import MasterBasedLearning from "./MasteryBasedLearning.js"
import RespondingHeader from "./RespondingHeader.js"
export { default as ResponsiveIndustry } from "./ResponsiveIndustry.js"
export { default as Quotes } from "./Quotes.js"
export { default as ResponsiveAbility } from "./ResponsiveAbility.js"
export { default as ResponsiveLife } from "./ResponsiveLife.js"
export { default as CTA } from "./CTA.js"
export { default as Testimonial } from "./Testimonial.js"
export { default as WorkWithUs } from "./WorkWithUs.js"

export default function ResponsiveLearningPage() {
    return (
        <> 
            <PageHeader />
            <MasterBasedLearning />
            <RespondingHeader />
        </>
    )
}
