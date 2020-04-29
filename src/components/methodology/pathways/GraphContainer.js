import React from "react"
import styled from "styled-components"
import {} from "@vschool/lotus"

const Container = styled.div`
    padding: 24px 16px;
    width: 100%;
    max-width: 380px;
`

const SectionContainer = styled.div`

`

const BarTitle = styled.p``

const BarEndText = styled.p``

const Bar = styled.div``



export default function GraphContainer(props){
  const { currentBar, completedBars, additonalBars} = props.info
  return (
    <Container>
      { completedBars.map(item => <div></div>) }

    </Container>
  )
}