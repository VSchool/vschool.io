import React from "react"
import styled from "styled-components"
import { gray } from "@vschool/lotus"
import Hero from './Hero'
import Info from './Info'
import Partners from './Partners'
import Career from './Career'
import Packet from './Packet'
import Course from './Course'
import Offering from './Offering'
import { navigate } from "gatsby"


const PageContainer = styled.div`
    background: ${gray.lighter};
`

export default function PreCoursePartners() {

    const submitFunction = () => {
        navigate("/pre-course-partners/form")
    }
    
    return (
        <PageContainer>
           <Hero submit={submitFunction} />
           <Info />
           <Partners />
           <Career submit={submitFunction} />
           <Packet submit={submitFunction} />
           <Course />
           <Offering submit={submitFunction} />
        </PageContainer>
    )
}
