import React from "react"
import { DateTime } from "luxon"
import Hero from "./Hero"
import Details from "./Details"
import Stages from "./Stages"
import Form from "./Form"
import ClosedAppCTA from "./ClosedAppCTA"
import Faq from "./FAQ"
import Companies from "./Companies"
import Rankings from "../shared/Rankings"
import Testimonial from "./Testimonial"
import Courses from "./Courses"
import Cta from "./CTA"

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
    const detailsExist = data.details_title.text
    return (
        <div>
            <Hero {...data} deadlinePast={deadlinePast} />
            {detailsExist && <Details {...data} />}
            <Stages />
            <Form {...data} deadlinePast={deadlinePast} />
            {deadlinePast ? <ClosedAppCTA /> : <Faq {...data} />}
            <Companies />
            <Rankings />
            <Testimonial {...data} />
            <Courses {...data} />
            <Cta />
        </div>
    )
}
