import React, {useState} from "react"
import styled from "styled-components"
import { gray } from "@vschool/lotus"
import Form from './Form'
import Schedule from './Schedule'
import Success from './Success'
import { navigate } from "gatsby"


const PageContainer = styled.div`
    background: ${gray.lighter};
`

export default function PreCoursePartners() {

    return (
        <PageContainer>
            <DownloadXD convertKitTag={'intro to tech info packet'} />
        </PageContainer>
    )
}
