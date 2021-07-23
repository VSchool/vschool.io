import React from "react"
import LogoHeader from "./LogoHeader.js"
import PageHeader from "./PageHeader.js"
import HeroImage from "./HeroImage.js"
import ScholarshipDetails from "./ScholarshipDetails.js"
import Details from "./Details.js"
import AboutCourse from "./AboutCourse.js"
import Modules from "./Modules.js"
import HeroImageTwo from "./HeroImageTwo.js"
import Companies from "./Companies.js"
import Ratings from "./Ratings.js"
import Testimonial from "./Testimonial.js"
import PaymentOptions from "../shared/PaymentOptions"
import MakeALeap from "../shared/MakeALeap.js"
import Faq from "./Faq.js"
import { blue } from "@vschool/lotus"

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
            <Companies />
            <Ratings />
            <Testimonial />
            <PaymentOptions />
            <MakeALeap bgColor={blue.lightest} sessionColor={blue.lighter} />
            <Faq />
        </>
    )
}
