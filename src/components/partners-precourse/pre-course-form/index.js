import React, {useState} from "react"
import styled from "styled-components"
import { gray } from "@vschool/lotus"
import Form from './Form'
import Schedule from './Schedule'
import { navigate } from "gatsby"


const PageContainer = styled.div`
    background: ${gray.lighter};
`

const BackArrow = styled.img`
    margin: 30px;
    position: fixed;
    background-color: white;
    border-radius: 30px;
    padding: 10px;
    width: 60px;
    box-shadow: 2px 2px 6px #0000005e;
`

export default function PreCoursePartners() {
    const [pageNum, setPageNum] = useState(0)
    
    const submitStep = num => {
        setPageNum(num)
        console.log(num)
    }
    
    return (
        <PageContainer>
            <Form submit={submitStep} /> 
        </PageContainer>
    )
}
