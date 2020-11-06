import React from "react"
import Hero from "./Hero"
import Stages from "./Stages"
import Form from "./Form"
import FAQ from "./FAQ"
import Companies from "./Companies"
import Rankings from "../shared/Rankings"
import Testimonial from "./Testimonial"
import Courses from "./Courses"

export default function Scholarship({ data }) {
    return (
        <div>
            <Hero {...data} />
            <Stages />
            <Form />
            <FAQ />
            <Companies />
            <Rankings />
            <Testimonial {...data} />
            <Courses {...data} />
        </div>
    )
}
