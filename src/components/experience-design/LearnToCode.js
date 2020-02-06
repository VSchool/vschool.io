import React from "react"
import styled from "styled-components"
import { purple, black, Button } from "@vschool/lotus"
import { graphql, useStaticQuery } from "gatsby"

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${purple.lighter};
    padding-top: 24px;
    padding-bottom: 24px;

    @media (min-width: 900px) {
        flex-direction: row;
        justify-content: center;
    }
`

const H5 = styled.h5`
    color: ${black};
    font-family: "aktiv-grotesk";
    font-size: 20px;
    font-weight: 800;
    line-height: 26px;
    padding-bottom: 16px;

    @media(min-width: 300px) and (max-width: 380px){
      font-size: 18px;
    }

    @media (min-width: 900px) {
        margin-right: 16px;
        padding-bottom: 0;
    }
`

const StyledButton = styled(Button)`
    height: 32px;
    width: 184px;
    font-family: "aktiv-grotesk-extended";
    font-weight: 800;
    outline: none;

    @media(min-width: 300px) and (max-width: 380px){
      font-size: 12px;
    }
`

function LearnToCode() {
    const { 
      prismicXdPage: {
        data: {
          learn_to_code_title: {
            text: title
          },
          learn_to_code_btn: {
            text: btnText
          },
          learn_to_code_link: {
            url: link
          }
        }
      }
    } = useStaticQuery(graphql`
      {
        prismicXdPage {
          data {
            learn_to_code_btn {
              text
            }
            learn_to_code_title {
              text
            }
            learn_to_code_link {
              url
            }
          }
        }
      }
    `)
    return (
        <FlexContainer>
            <H5>{ title }</H5>
            <a href={ link }>
                <StyledButton buttonStyle="primary-light">{ btnText }</StyledButton>
            </a>
        </FlexContainer>
    )
}

export default LearnToCode