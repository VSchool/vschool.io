import React from 'react'
import HeroHeader from "./HeroHeader.js"
import Testimonial1 from "./Testimonial1.js"
import Differences from "./Differences.js"
export { default as Testimonial2 } from "./Testimonial2.js"
export { default as SchoolComparisons } from "./SchoolComparisons.js"
export { default as CTA } from "./CTA.js"
export { default as Pathways } from "./pathways"
export { default as PathwaysHeader } from "./PathwaysHeader.js"

export default function ComparesPage() {
    return (
        <>
            <HeroHeader />
            <Testimonial1 />
            <Differences />
       </>
    )
}