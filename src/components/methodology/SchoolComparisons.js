import React from "react"
import styled from "styled-components"
import ComparisonsTable from "./ComparisonsTable.js"
import { gray, black, blue } from "@vschool/lotus"

const Container = styled.div`
    background-color: ${gray.lightest};
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 56px;
    padding-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 600px) {
        padding-left: 32px;
        padding-right: 32px;
    }

    @media (min-width: 840px) {
        padding-left: 40px;
        padding-right: 40px;
    }

    @media (min-width: 1200px) {
        padding-bottom: 160px;
        padding-left: 88px;
        padding-right: 88px;
        padding-top: 96px;
    }
`

const Header = styled.h2`
  color: ${black};
  font-family: "aktiv-grotesk";
  font-size: 32px;
  line-height: 38px;
  font-weight: 800;
  text-align: center;
  width: 250px;
  margin-bottom: 32px;

  @media(min-width: 600px){
    font-size: 44px;
    line-height: 48px;
    width: 100%;
  }
`

const SubHeader = styled.h5`
  font-size: 14px;
  line-height: 20px;
  font-family: "aktiv-grotesk-extended";
  color: ${blue.base};
  width: 250px;
  margin-bottom: 64px;
  text-align: center;

  @media(min-width: 600px){
    width: 100%;
  }
`

export default function SchoolComparisons(props) {
    const { header, subheader, comparisons } = props
    return (
        <Container>
            <Header>{header}</Header>
            <SubHeader>{subheader}</SubHeader>
            <ComparisonsTable comparisons={comparisons} />
        </Container>
    )
}