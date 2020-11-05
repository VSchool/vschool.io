import React from 'react'
import Header from "./Header.js"
import HeroImage from "./HeroImage.js"
export { default as Positions } from "./Positions.js"
export { default as SubmitAResume } from "./SubmitAResume.js"

export default function CareersPage() {
    return (
        <>
            <Header />
            <HeroImage />
        </>
    )
}