import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { gray, black } from "@vschool/lotus"
import Deadlines from "./Deadlines.js"

const Container = styled.section`
    background-color: ${gray.lightest};
    padding-top: 160px;
    padding-bottom: 56px;

    @media (min-width: 840px) {
        padding-top: 240px;
    }

    @media (min-width: 1200px) {
        padding-top: 240px;
    }
`

const FixedContainer = styled.div`
    display: flex;
    justify-content: center;

    @media (min-width: 840px) {
        width: 100%;
        max-width: 600px;
    }

    @media (min-width: 1200px) {
        display: block;
        /* width: 1024px; */
        max-width: 780px;
    }
`

const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
`

const H3 = styled.h3`
    color: ${black};
    font-size: 32px;
    font-weight: 900;
    line-height: 40px;
    margin-bottom: 16px;
    text-align: center;

    @media (min-width: 320px) and (max-width: 400px) {
        font-size: 28px;
    }

    @media (min-width: 840px) {
        font-size: 40px;
        line-height: 44px;
    }

    @media (min-width: 1200px) {
        font-size: 44px;
        line-height: 48px;
    }
`

const Info = styled.p`
    color: #514f4b;
    font-size: 18px;
    font-weight: 500;
    line-height: 28px;
    margin-bottom: 56px;
    text-align: center;
    max-width: 600px;

    @media (max-width: 400px) {
        font-size: 16px;
    }

    @media (min-width: 1200px) {
        max-width: 800px;
    }
`

export default function ScholarshipDetails() {
    const data = useStaticQuery(graphql`
        {
            prismicTiffin {
                data {
                    tiffin_header {
                        text
                    }
                    tiffin_sub_header {
                        text
                    }
                    scholarship_details {
                        detail_title {
                            text
                        }
                        detail_date(formatString: "MMM Do, YYYY")
                        detail_info {
                            text
                        }
                    }
                    scholarship_details_img {
                        url
                    }
                }
            }
        }
    `)

    const {
        tiffin_header: { text: tiffinHeader },
        tiffin_sub_header: { text: tiffinSub },
        scholarship_details_img: { url: scholarshipDetailsImg },
        scholarship_details: scholarshipDetails,
    } = data.prismicTiffin.data


    return (
        <Container>
            <FixedContainer>
                <H3>{tiffinHeader}</H3>
            </FixedContainer>
            <FixedContainer>
                <Info>{tiffinSub}</Info>
            </FixedContainer>
            <FlexContainer>
                <Deadlines
                    deadlines={scholarshipDetails}
                    bgImg={scholarshipDetailsImg}
                />
            </FlexContainer>
        </Container>
    )
}
