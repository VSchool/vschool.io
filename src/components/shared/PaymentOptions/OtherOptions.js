import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { gray, white, black, blue } from "@vschool/lotus"

const FlexContainer = styled.section`
    background-color: ${gray.lighter};
    padding-top: 56px;
    padding-bottom: 72px;

    @media (min-width: 860px) {
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }
`

const Option = styled.div`
    border: 2px solid ${gray.base};
    background-color: ${white};
    padding: 40px 32px;
    width: 366px;
    height: 206px;
    margin-bottom: 24px;

    @media (min-width: 320px) and (max-width: 414px) {
        width: 286px;
    }

    @media (min-width: 860px) {
        margin-right: 16px;
        margin-left: 16px;
        width: 320px;
    }
`

const PaymentTitle = styled.h3`
    color: ${black};
    font-family: "aktiv-grotesk";
    font-size: 24px;
    font-weight: 800;
    line-height: 30px;
    padding-bottom: 12px;
`

const P = styled.p`
    color: ${gray.darker};
    font-family: "aktiv-grotesk";
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    padding-bottom: 24px;
    height: 64px;
`

const LearnMore = styled.a`
    color: ${blue.base};
    font-family: "aktiv-grotesk-extended";
    font-size: 14px;
    font-weight: 800;
    letter-spacing: 1px;
    line-height: 16px;
    text-decoration: none;

    :active {
        color: ${blue.base};
    }

    :visited {
        color: ${blue.base};
    }
`

function OtherOptions(props) {
    const data = useStaticQuery(graphql`
        {
            prismicPaymentOptions {
                data {
                    payment_options {
                        payment_info {
                            text
                        }
                        payment_info_link {
                            url
                        }
                        payment_type {
                            text
                        }
                    }
                }
            }
        }
    `)
    const { payment_options: options } = data.prismicPaymentOptions.data
    return (
        <FlexContainer>
            {options.map(
                ({ payment_type, payment_info, payment_info_link }) => {
                    return (
                        <Option key={payment_type.text}>
                            <PaymentTitle>{payment_type.text}</PaymentTitle>
                            <P>{payment_info.text}</P>
                            <LearnMore href={payment_info_link.url}>
                                Learn More
                            </LearnMore>
                        </Option>
                    )
                }
            )}
        </FlexContainer>
    )
}

export default OtherOptions
