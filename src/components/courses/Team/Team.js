import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import MemberCard from './MemberCard'
import styled from "styled-components"
import { gray } from "@vschool/lotus"

const Container = styled.section`
    background-color: ${gray.lighter};
    // padding: 0px 0px 74px 0px;
    // padding-top: 0;
    // padding-bottom: 74px;
    border: 2px dashed black;

    // @media (min-width: 800px) {
    //     padding-top: 0;
    // }

    & > .title {
        margin: 0px;
        // width: 100%;
        font-size: 20px;
        line-height: 32px;
        color: ${gray.darkest};
        border: 1px dotted orange;
    }

    & > .description {
        box-sizing: border-box;
        margin: 0px 0px 64px 0px;
        font-size: 14px;
        line-height: 24px;
        color: ${gray.darker};
        // margin-bottom: 64px;
        border: 1px dotted orange;
    }

    & > .testing-class {
        // background: blue;
        border: 1px dashed purple;

        & > .team-title {
            font-size: 20px;
            line-height: 24px;
            text-align: center;
            color: ${gray.darkest};    
            border: 1px dotted orange;
        }
    }
    
    

    // & > .team-card {
    //     margin-bottom: 4px;
    //     border: 2px solid pink;

    //     & > .team-title {
    //         font-size: 20px;
    //         line-height: 24px;
    //         text-align: center;
    //         color: ${gray.darkest};    
    //         border: 1px dotted orange;
    //     }
    // }
`

const TeamTitle = styled.h1`
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: ${gray.darkest};
    border: 1px dotted orange;

`

// const TeamCard = styled.div`
//     display: inline-block;
//     width: 48%;
//     padding: 20px;
//     margin: 45px 0;
//     border: 2px dotted orange;

// `

const TeamImage = styled.img`
    width: 100%;
    border: 1px dotted orange;

`

const TeamLogo = styled.div`
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    height: 58px;
    width: 100px;
    margin: auto;
    border: 1px dotted orange;
`

const TeamName = styled.h5`
    font-size: 11px;
    text-align: center;
    margin-bottom: -10px;
    border: 1px dotted orange;
`

const TeamRole = styled.p`
    font-size: 9px;
    margin: 0;
    text-align: center;
    border: 1px dotted orange;
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
    console.log(data)
    const mappedTeams = data.prismicCoursePage.data.body1.map(
        ({
            items,
            primary: {
                team_individual_type: { text: teamType },
            },
        }) => {
            return (
                <div className={'testing-class'}>
                    <h1 className={'team-title'}>{teamType}</h1>
                    {/* <TeamTitle>{teamType}</TeamTitle> */}
                    {items.map(
                        ({
                            team_individual_name: { text: indName },
                            team_individual_image: { alt: imgAlt, url: imgUrl },
                            team_individual_logo: {
                                alt: logoAlt,
                                url: logoUrl,
                            },
                            team_individual_title: { text: indTitle },
                        }) => {
                            return (
                                <MemberCard 
                                    teamImage={{src: imgUrl, alt: imgAlt}}
                                    teamName={indName}
                                    teamRole={indTitle}
                                    logoUrl={logoUrl}
                                    logoAlt={logoAlt}
                                />
                                // <TeamCard> 
                                //     <TeamImage src={imgUrl} alt={imgAlt} />
                                //     <TeamName>{indName}</TeamName>
                                //     <TeamRole>{indTitle}</TeamRole>
                                //     {logoUrl && (
                                //         <TeamLogo
                                //             style={{
                                //                 backgroundImage: `url(${logoUrl})`,
                                //             }}
                                //             alt={logoAlt}
                                //         />
                                //     )}
                                // </TeamCard>

                            )
                        }
                    )}
                </div>
            )
        }
    )

    return (
        <Container>
            <h1 className={'title'}>{teamTitle}</h1>
            < p className={'description'}>{teamSub}</p>
            {/* <Card 
                teamImageUrl={imgUrl}
            /> */}
            {mappedTeams}
        </Container>
    )
}

export default Team
