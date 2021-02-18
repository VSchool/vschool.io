import React from "react"
import { DateTime } from "luxon"
import Hero from "./Hero"
import Details from "./Details"
import Stages from "./Stages"
import Form from "./Form"
import ClosedAppCTA from "./ClosedAppCTA"
import FAQ from "./FAQ"
import Companies from "./Companies"
import Rankings from "../shared/Rankings"
import Testimonial from "./Testimonial"
import Courses from "./Courses"
import CTA from "./CTA"

export default function Scholarship({ data }) {
    let deadlinePast = false
    if (data.deadline_date) {
        const dateNum = parseInt(data.deadline_date.split(" ")[1])
        const updatedDate = data.deadline_date
            .split(" ")
            .map((item, index) => (index === 1 ? dateNum : item))
            .join(" ")
        const result = DateTime.fromFormat(updatedDate, "MMMM d yyyy")
        deadlinePast = result < DateTime.local()
    }
    return (
        <div>
            <Hero {...data} deadlinePast={deadlinePast} />
            <Details {...data} />
            <Stages />
            <Form {...data} deadlinePast={deadlinePast} />
            {deadlinePast ? <ClosedAppCTA /> : <FAQ />}
            <Companies />
            <Rankings />
            <Testimonial {...data} />
            <Courses {...data} />
            <CTA />
        </div>
    )
}
