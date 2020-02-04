import React from "react"
import styled from "styled-components"
import { black, gray, blue } from "@vschool/lotus"
import { graphql, useStaticQuery } from "gatsby"

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${blue.lighter};
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


    @media(min-width: 320px) and (max-width: 400px){
      font-size: 16px;
    } 

    @media (min-width: 900px) {
        margin-right: 16px;
        padding-bottom: 0;
    }
`

const Button = styled.button`
    height: 32px;
    width: 211px;
    color: ${black};
    font-family: "aktiv-grotesk-extended";
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.86px;
    line-height: 16px;
    text-align: center;
    border: 2px solid ${black};
    background-color: ${gray.lighter};
    box-shadow: 4px 4px 0 0 rgba(0, 0, 0, 0.2);
    outline: none;
    cursor: pointer;

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

function CheckOutHousing() {
    const { 
      prismicLivingInSaltLake: {
        data: {
          check_out_housing_link: {
            url: link
          },
          check_out_housing_btn: {
            text: btnText
          },
          check_out_housing_title: {
            text: title
          }
        }
      }
    } = useStaticQuery(graphql`
    {
      prismicLivingInSaltLake {
        data {
          check_out_housing_link {
            url
          }
          check_out_housing_btn {
            text
          }
          check_out_housing_title {
            text
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

export default CheckOutHousing