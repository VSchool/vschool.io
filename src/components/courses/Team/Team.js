import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import MemberInfo from './MemberInfo'
import styled from "styled-components"
import { gray } from "@vschool/lotus"



const Container = styled.section`
    background-color: ${gray.lighter};

    & > .title {
        margin: 0px;
        font-size: 20px;
        line-height: 32px;
        color: ${gray.darkest};
        border: 1px dotted orange;

        @media (min-width: 800px) {
            width: 100%;
            font-family: Aktiv Grotesk;
            font-style: normal;
            font-weight: 900;
            font-size: 32px;
            line-height: 40px;
            color: #21201F;
            border: 1px dotted orange;
        }
    }

    & > .description {
        box-sizing: border-box;
        margin: 0px 0px 64px 0px;
        font-size: 14px;
        line-height: 24px;
        color: ${gray.darker};
        border: 1px dotted orange;

        @media (min-width: 768px) {
            margin-top: 30px;
            width: 100%;
            font-family: Aktiv Grotesk;
            font-style: normal;
            font-weight: normal;
            font-size: 20px;
            line-height: 28px;
            color: #514F4B;
            border: 1px dotted orange;
        }
    }

    & > .team-card {
        margin: 0px 0px 64px 0px;
        width: 100%;
        // border: 1px solid black;

        & > .team-title {
            font-family: Aktiv Grotesk;
            font-style: normal;
            font-weight: 800;
            font-size: 20px;
            line-height: 24px;
            text-align: center;
            color: ${gray.darkest};    
            // border: 1px dotted orange;

            @media (min-width: 800px) {
                font-family: Aktiv Grotesk;
                font-style: normal;
                font-weight: 800;
                font-size: 24px;
                line-height: 32px;
                text-align: center;
                color: #21201F;
            }
        }

        & > .wrapper {
            margin: 66px 0px 0px 0px;
            display: grid;
            grid-template-columns: 50% 50%;
            row-gap: 36px;
            // border: 2px solid red;

            @media (min-width: 800px) {
                margin: 62px 0px 0px 0px;
                display: flex;
                justify-content: center;
            }
        }
    }
`

const Team = props => {
    const {
        team_subtitle: { text: teamSub },
        team_title: { text: teamTitle },
    } = props

    const data = useStaticQuery(graphql`
        {
            prismicCoursePage(uid: { eq: "design" }) {
                data {
                    body1 {
                        ... on PrismicCoursePageBody1TeamIndividuals {
                            id
                            items {
                                team_individual_name {
                                    text
                                }
                                team_individual_image {
                                    alt
                                    url
                                }
                                team_individual_logo {
                                    alt
                                    url
                                }
                                team_individual_title {
                                    text
                                }
                            }
                            primary {
                                team_individual_type {
                                    text
                                }
                            }
                        }
                    }
                }
            }
        }
    `)

    const mappedTeams = data.prismicCoursePage.data.body1.map(
        ({
            items,
            primary: {
                team_individual_type: { text: teamType },
            },
        }) => {
            return (
                <div className={'team-card'}>
                    <h1 className={'team-title'}>{teamType}</h1>
                    <div className={'wrapper'}>
                        {items.map(
                            ({
                                team_individual_name: { text: indName },
                                team_individual_image: { alt: imgAlt, url: imgUrl },
                                team_individual_logo: {
                                    alt: logoAlt,
                                    url: logoUrl,
                                },
                                team_individual_title: { text: indTitle },
                            },) => {

                                return (
                                    <MemberInfo 
                                        teamImage={{src: imgUrl, alt: imgAlt}}
                                        teamName={indName}
                                        teamRole={indTitle}
                                        logo={{url: logoUrl, alt: logoAlt}}
                                    />
                                )
                            }
                        )}
                    </div> 
                </div>
            )
        }
    )

    return (
        <Container>
            <h1 className={'title'}>{teamTitle}</h1>
            <p className={'description'}>{teamSub}</p>
            {mappedTeams}
        </Container>
    )
}

export default Team
