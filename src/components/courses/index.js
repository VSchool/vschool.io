import React from "react"
import Hero from "./Hero"
import Outcomes from "./Outcomes"
import Journey from "./Journey"
import HowWorks from "./HowWorks"
import LearningMethod from "./LearningMethod"
import LearningModel from "./LearningModel"
import Schedule from "./Schedule"
import Description from "./Description"
import Team from "./Team"

export default function index({ data }) {
    return (
        <>
            <Hero {...data} />
            <Outcomes {...data} />
            <Journey {...data} />
            <Description {...data} />
            <HowWorks />
            <LearningMethod />
            <LearningModel />
            <Schedule />
            <Team {...data} />
        </>
    )
}
