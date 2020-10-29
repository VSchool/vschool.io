import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { gray, blue, Button } from "@vschool/lotus"

const Section = styled.section`
    background-color: ${blue.lightest};
    padding-top: 96px;
    margin-bottom: -160px;

    @media (min-width: 1000px) {
        margin-bottom: 0;
        padding-bottom: 160px;
        padding-top: 148px;
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;
    }
`

const TextContainer = styled.div`
    max-width: 500px;
    padding-right: 30px;
    @media (min-width: 1000px) {
        flex-basis: 50%;
    }
`
const ImageContainer = styled.div`
    /* For some reason margin-bottom was 
    being overwritten to margin: 0 on the 
    button so I added it here instead */
    margin-top: 96px;
    max-width: 500px;

    @media (min-width: 1000px) {
        flex-basis: 50%;
        margin-top: 0;
    }
`

const Title = styled.h1`
    margin-bottom: 16px;
`

const Subtitle = styled.p`
    color: ${gray.darker};
    margin-bottom: 16px;
`

const List = styled.ul`
    list-style-type: none;
    margin-bottom: 32px;
    align-self: flex-start;
`

const ListItem = styled.li`
    color: ${gray.darker};
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    &:before {
        content: "- ";
    }
`

const StyledButton = styled(Button)`
    width: 100%;

    @media (min-width: 800px) {
        width: 232px;
    }
`

const Image = styled.img`
    max-width: 100%;
`

export default function Hero() {
    const data = useStaticQuery(graphql`
        {
            prismicDigitalFamilyPage {
                data {
                    hero_button_text {
                        text
                    }
                    hero_subtitle {
                        text
                    }
                    hero_title {
                        text
                    }
                    hero_image {
                        url
                    }
                    explainer_goals_list {
                        goal_title {
                            text
                        }
                    }
                }
            }
        }
    `)
    const {
        hero_button_text: { text: buttonText },
        hero_subtitle: { text: subtitle },
        hero_title: { text: title },
        hero_image: { url: imgUrl },
        explainer_goals_list: goalsList,
    } = data.prismicDigitalFamilyPage.data

    const goals = goalsList.map(goal => (
        <ListItem key={goal.goal_title.text}>{goal.goal_title.text}</ListItem>
    ))

    return (
        <Section>
            <TextContainer>
                <Title>{title}</Title>
                <Subtitle>{subtitle}</Subtitle>
                <List>{goals}</List>
                <StyledButton size="xl">{buttonText}</StyledButton>
            </TextContainer>
            <ImageContainer>
                <Image src={imgUrl} alt="image" />
            </ImageContainer>
        </Section>
    )
}
