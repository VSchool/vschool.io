import React from "react"
import Hero from "./Hero"
import Outcomes from "./Outcomes"
import Journey from "./Journey"
import HowWorks from "./HowWorks"
import LearningMethod from "./LearningMethod"
import LearningModel from "./LearningModel"
import Schedule from "./Schedule"
import Description from "./Description"
import { Team } from "./Team/"
import Payments from "./Payments"
import Program from "./Program"
import Form from "./Form"
import Apply from "./Apply"
import Faq from "./FAQ"

export default function Index({ data }) {
    return (
        <>
            <Hero {...data} />
            <Outcomes {...data} />
            {/* {data.course_name.text !== "Cybersecurity Program" && (
                <Journey {...data} />
            )} */}
            {data.course_name.text === "Cybersecurity Program" ? (
                <Program />
            ) : (
                <Journey {...data} />
            )}
            <Description {...data} />
            <Form {...data} />
            <HowWorks />
            <LearningMethod />
            <LearningModel />
            <Schedule />
            <Team {...data} />
            <Payments {...data} />
            <Apply {...data} course={data.course_name.text} />
            <Faq {...data} />
        </>
    )
}
