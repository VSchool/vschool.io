import React from "react"

import LogoHeader from "./LogoHeader.js"
import PageHeader from "./PageHeader.js"
import HeroImage from "./HeroImage.js"
import ScholarshipDetails from "./ScholarshipDetails.js"
import Details from "./Details.js"
import AboutCourse from "./AboutCourse.js"
import Modules from "./Modules.js"
import HeroImageTwo from "./HeroImageTwo.js"
export { default as Companies } from "./Companies.js"
export { default as Ratings } from "./Ratings.js"
export { default as Testimonial } from "./Testimonial.js"
export { default as FAQ } from "./FAQ.js"

export default function TiffinUniversityPage() {
    return (
        <>
            <LogoHeader />
            <PageHeader />
            <HeroImage />
            <ScholarshipDetails />
            <Details />
            <AboutCourse />
            <Modules />
            <HeroImageTwo />
        </>
    )
}
