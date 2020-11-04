import React from "react"
import Hero from "./Hero"
import Stages from "./Stages"

export default function Scholarship({ data }) {
    return (
        <div>
            <Hero {...data} />
            <Stages />
        </div>
    )
}
