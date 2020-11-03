import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ScholarshipContext } from "../../templates/scholarship"

export default function Hero() {
    const uid = useContext(ScholarshipContext)
    console.log(uid)
    return (
        <div>
            <h1>Hero of scholarship page goes here</h1>
        </div>
    )
}
