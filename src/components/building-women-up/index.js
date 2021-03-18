import React from "react"
import Hero from "./Hero"
import Scholarships from "./Scholarships"
import PartnerInfo from "./PartnerInfo"
import Share from "./Share"
import ConferenceSeries from "./ConferenceSeries"
import EmailSignup from "./EmailSignup"
import Testimonials from "./Testimonials"

export default function BuildingWomenUp() {
    return (
        <>
            <Hero />
            <Scholarships />
            <PartnerInfo />
            <Share />
            <ConferenceSeries />
            <EmailSignup />
            <Testimonials />
        </>
    )
}
