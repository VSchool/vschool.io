import React from "react"
import Hero from "./Hero"
import Stages from "./Stages"
// import Form from "./Form"
// import FAQ from "./FAQ"
import CTA from "./CTA"
import Companies from "./Companies"
import Rankings from "../shared/Rankings"
import Testimonial from "./Testimonial"
import Courses from "./Courses"

export default function Scholarship({ data }) {
    return (
        <div>
            <Hero {...data} />
            <Stages />
            {/* <Form />
            <FAQ /> */}
            <CTA />
            <Companies />
            <Rankings />
            <Testimonial {...data} />
            <Courses {...data} />
        </div>
    )
}
