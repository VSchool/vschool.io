import React from "react"
import AboutPrimer from "./AboutPrimer"
import ContactUs from "./ContactUs"
import CourseBullets from "./CourseBullets"
import HeroHeader from "./HeroHeader"
import HeroImage from "./HeroImage"
import MailchimpSubscribeForm from "../shared/MailchimpSubscribeForm"
import Testimonial from "./Testimonial"
import Courses from "../shared/Courses"

export default function BootcampPrimer() {
    return (
        <>
            <HeroHeader />
            <CourseBullets />
            <HeroImage />
            <AboutPrimer />
            <Testimonial />
            <ContactUs />
            {/* 
            <Courses
                header={coursesHeader}
                courses={upcoming_courses}
                bgColor={gray.lightest}
            /> 
            <div
                data-name="spacer"
                style={{ backgroundColor: gray.lightest, height: 96 }}
            ></div> 
            */}
        </>
    )
}
