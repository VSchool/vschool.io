import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import MemberInfo from './MemberInfo'
import styled from "styled-components"
import { gray } from "@vschool/lotus"

const Container = styled.section`
    background-color: ${gray.lighter};

    & > .title {
        margin: 0px;
        color: ${gray.darkest};
        font-size: 20px;
        line-height: 32px;

        @media (min-width: 800px) {
            max-width: 1024px;
            font-size: 32px;
            line-height: 40px;
        }
    }

    & > .description {
        box-sizing: border-box;
        margin-top: 20px;
        margin-bottom: 64px;
        color: ${gray.darker};
        font-size: 14px;
        line-height: 24px;

        @media (min-width: 800px) {
            max-width: 1024px;
            margin-top: 30px;
            font-size: 20px;
            line-height: 28px;
        }
    }

    & > .team-card {
        width: 100%;
        margin-bottom: 64px;

        @media (min-width: 800px) {
            width: 1024px;
        }

        & > .team-title {
            color: ${gray.darkest};    
            font-size: 20px;
            line-height: 24px;
            text-align: center;

            @media (min-width: 800px) {
                font-size: 24px;
                line-height: 32px;
            }
        }

        & > .wrapper {
            display: grid;
            grid-template-columns: 50% 50%;
            row-gap: 36px;
            margin-top: 66px;

            @media (min-width: 800px) {
                display: flex;
                justify-content: center;
                margin-top: 62px;
            }
        }
    }
`

const Team = props => {
    console.log(props, 'team')
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
