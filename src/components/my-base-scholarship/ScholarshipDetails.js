import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { gray, black, Button } from "@vschool/lotus"
import QueryLink from "../shared/QueryLink.js"

const Container = styled.section`
    background-color: ${gray.lighter};
    padding-top: 64px;
    padding-bottom: 56px;

    @media (min-width: 1200px) {
        padding-top: 96px;
        padding-left: 88px;
        padding-right: 88px;
    }
`

// const HeaderContainer = styled.div`
//     @media (min-width: 1200px) {
//         width: 1024px;
//     }
// `

const Header = styled.h2`
    font-weight: 900;
    font-size: 32px;
    line-height: 38px;
    color: ${black};

    @media (min-width: 1200px) {
        font-size: 44px;
        line-height: 48px;
    }
`

const ScholarshipGroupContainer = styled.div`
    margin-top: 64px;

    @media (min-width: 1200px) {
        display: flex;
        justify-content: space-between;
        max-width: 1300px;
    }
`

const ScholarshipContainer = styled.div`
    background-image: ${({ backgroundImg }) => `url(${backgroundImg})`};
    background-size: cover;
    padding: 16px;
    margin: 24px 16px;
    max-width: 496px;
    /* max-width: 380px; */

    @media (min-width: 1200px) {
        padding: 24px;
        /* max-width: 1024px; */
    }
`

const WhiteContainer = styled.div`
    padding: 48px 16px;
    background-color: ${gray.lighter};
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1200px) {
        align-items: flex-start;
        padding: 40px 32px;
    }
`

const ScholarshipName = styled.h3`
    font-size: 24px;
    font-weight: 900;
    line-height: 30px;
    margin-bottom: 32px;

    @media (min-width: 1200px) {
        font-size: 32px;
        line-height: 38px;
    }
`

const DeadlineText = styled.h5`
    font-weight: 800;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.25px;
    color: ${gray.darker};
`

const DateText = styled.h3`
    font-family: "aktiv-grotesk-extended";
    font-weight: 800;
    font-size: 24px;
    line-height: 26px;
    text-align: center;
    color: ${black};
    margin-top: 4px;
    margin-bottom: 32px;
`

const BulletsContainer = styled.div``

const Bullet = styled.div`
    display: flex;
    padding: 0 8px;
    margin-bottom: 16px;
`

const CheckMark = styled.img`
    width: 20px;
    height: 16px;
    margin-top: 4px;
`

const BulletText = styled.p`
    font-family: "aktiv-grotesk";
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: ${gray.darker};
    margin-left: 8px;
`

const LinkAndInfo = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1200px) {
        flex-direction: row;
        /* width: 1024px; */
        justify-content: flex-start;
    }
`

const StyledLink = styled(QueryLink)`
    width: 100%;
    padding: 0 16px;

    @media (min-width: 1200px) {
        max-width: 136px;
        width: 136px;
        padding: 0;
    }
`

const StyledButton = styled(Button)`
    width: 100%;
    height: 40px;
    font-family: "aktiv-grotesk-extended";
    font-size: 12px;
    min-width: 136px;

    /* @media (min-width: 1200px) {
        width: 136px;
    } */
`

const Info = styled.p`
    font-family: "aktiv-grotesk";
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: ${gray.darker};
    margin-top: 32px;
    /* padding: 0 10px; */

    @media (min-width: 1200px) {
        max-width: 340px;
        width: 100%;
        margin-left: 24px;
        margin-top: 0;
    }
`

export default function ScholarshipDetails(props) {
    const data = useStaticQuery(graphql`
        {
            prismicMyBaseScholarship {
                data {
                    details_header {
                        text
                    }
                    body {
                        primary {
                            scholarship_subtitle {
                                text
                            }
                            scholarship_application_deadline {
                                text
                            }
                            scholarship_background_image {
                                url
                            }
                            scholarship_button_text {
                                text
                            }
                            scholarship_button_link {
                                url
                                target
                            }
                            scholarship_details {
                                text
                            }
                            scholarship_name {
                                text
                            }
                        }
                        items {
                            scholarship_bullet_icon {
                                url
                            }
                            scholarship_bullet_text {
                                text
                            }
                        }
                    }
                }
            }
        }
    `)

    const {
        details_header: { text: header },
    } = data.prismicMyBaseScholarship.data

    const scholarships = data.prismicMyBaseScholarship.data.body
    const scholarshipComponents = scholarships.map(scholarship => {
        const {
            scholarship_application_deadline: { text: deadline },
            scholarship_background_image: { url: backgroundImg },
            scholarship_button_text: { text: buttonText },
            scholarship_name: { text: scholarshipName },
            scholarship_button_link: { url: buttonUrl, target: buttonTarget },
            scholarship_details: { text: detailsText },
        } = scholarship.primary

        return (
            <ScholarshipContainer
                backgroundImg={backgroundImg}
                key={scholarship.id}
            >
                <WhiteContainer>
                    <ScholarshipName>{scholarshipName}</ScholarshipName>
                    <DeadlineText>Application deadline:</DeadlineText>
                    <DateText>{deadline}</DateText>
                    <BulletsContainer>
                        {scholarship.items.map(
                            ({
                                scholarship_bullet_text,
                                scholarship_bullet_icon,
                            }) => (
                                <Bullet key={scholarship_bullet_text.text}>
                                    <CheckMark
                                        src={scholarship_bullet_icon.url}
                                    />
                                    <BulletText>
                                        {scholarship_bullet_text.text}
                                    </BulletText>
                                </Bullet>
                            )
                        )}
                    </BulletsContainer>
                    <LinkAndInfo>
                        <StyledLink to={buttonUrl} target={buttonTarget}>
                            <StyledButton>{buttonText}</StyledButton>
                        </StyledLink>
                        <Info>{detailsText}</Info>
                    </LinkAndInfo>
                </WhiteContainer>
            </ScholarshipContainer>
        )
    })

    return (
        <Container>
            <Header>{header}</Header>
            <ScholarshipGroupContainer>
                {scholarshipComponents}
            </ScholarshipGroupContainer>
        </Container>
    )
}
