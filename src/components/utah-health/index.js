import React from "react"
import PageHeader from "./PageHeader.js"
import BeginCourseForm from "./BeginCourseForm.js"
import HeroImage from "./HeroImage.js"
import GoogleForm from "./GoogleForm.js"
import AboutPrimer from "./AboutPrimer.js"
import NeverLearnAlone from "./NeverLearnAlone.js"

export default function UtahHealth() {
    return (
        <>
            <PageHeader />
            <BeginCourseForm />
            <HeroImage />
            <AboutPrimer />
            <GoogleForm />
            <NeverLearnAlone />
        </>
    )
}
