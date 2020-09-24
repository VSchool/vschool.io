import React from "react"
import styled from "styled-components"
import AboutPrimer from "./AboutPrimer"
import ContactUs from "./ContactUs"
import CourseBullets from "./CourseBullets"
import HeroHeader from "./HeroHeader"
import HeroImage from "./HeroImage"
import Testimonial from "./Testimonial"
import Courses from "../shared/Courses"
import { gray } from "@vschool/lotus"

const StyledCourses = styled(Courses)`
    background-color: ${gray.lightest};
    padding-top: 96px;
`

export default function BootcampPrimer() {

    return (
        <>
            <HeroHeader />
            <CourseBullets />
            <HeroImage />
            <AboutPrimer />
            <Testimonial />
            <ContactUs />
            <StyledCourses />
        </>
    )
}
