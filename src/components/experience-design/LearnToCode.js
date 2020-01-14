import React from "react"
import styled from "styled-components"
import { purple, black, gray } from "@vschool/lotus"
import { graphql, useStaticQuery } from "gatsby"

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${purple.lighter};
    padding-top: 24px;
    padding-bottom: 24px;
    margin-bottom: 80px;

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

    @media (min-width: 900px) {
        margin-right: 16px;
        padding-bottom: 0;
    }
`

const Button = styled.button`
    height: 32px;
    width: 184px;
    color: ${black};
    font-family: "aktiv-grotesk-extended";
    font-size: 14px;
    font-weight: 800;
    letter-spacing: 1px;
    line-height: 16px;
    text-align: center;
    border: 2px solid ${black};
    background-color: ${gray.lighter};
    box-shadow: 4px 4px 0 0 rgba(0, 0, 0, 0.2);
    outline: none;

    :hover {
        transform: translate(2px, 2px);
        box-shadow: 2px 2px 0 0 rgba(100, 100, 100, 0.5);
    }

    :active {
        transform: translate(4px, 4px);
        box-shadow: inset 1px 1px #eee9;
        border-top: 1px solid #eee9;
        border-left: 1px solid #eee9;
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
                <Button>{ btnText }</Button>
            </a>
        </FlexContainer>
    )
}

export default LearnToCode