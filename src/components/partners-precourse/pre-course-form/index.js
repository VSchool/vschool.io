import React, {useState} from "react"
import styled from "styled-components"
import { gray } from "@vschool/lotus"
import Form from './Form'


const PageContainer = styled.div`
    background: ${gray.lighter};
`

export default function PreCoursePartners() {
    const [pageNum, setPageNum] = useState(0)
    
    const submitStep = num => {
        setPageNum(num)
    }
    
    return (
        <PageContainer>
            <Form submit={submitStep} /> 
        </PageContainer>
    )
}
