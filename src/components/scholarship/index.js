import React from "react"
import Hero from "./Hero"
import Stages from "./Stages"
import Form from "./Form"
import FAQ from "./FAQ"
import Companies from "./Companies"
import Rankings from "../shared/Rankings"
import Testimonial from "./Testimonial"
import Courses from "./Courses"
import CTA from "./CTA"

export default function Scholarship({ data }) {
    return (
        <div>
            <Hero {...data} />
            <Stages />
            <Form {...data} />
            <FAQ />
            <Companies />
            <Rankings />
            <Testimonial {...data} />
            <Courses {...data} />
            <CTA />
        </div>
    )
}
