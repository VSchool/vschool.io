import React from "react"
import Hero from "./Hero"
import Stages from "./Stages"
import Form from "./Form"
import FAQ from "./FAQ"
import Companies from "./Companies"
import Rankings from "../shared/Rankings"

export default function Scholarship({ data }) {
    return (
        <div>
            <Hero {...data} />
            <Stages />
            <Form />
            <FAQ />
            <Companies />
            <Rankings />
        </div>
    )
}
