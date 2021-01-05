import React from "react"
import { DateTime } from "luxon"
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
    console.log(data)
    const dateNum = parseInt(data.deadline_date.split(" ")[1])
    const updatedDate = data.deadline_date
        .split(" ")
        .map((item, index) => (index === 1 ? dateNum : item))
        .join(" ")
    const result = DateTime.fromFormat(updatedDate, "MMMM d yyyy")
    const deadlinePast = result < DateTime.local()
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
