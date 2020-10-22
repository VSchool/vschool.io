import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { gray, blue, Button } from "@vschool/lotus"

const Container = styled.section`
    background-color: ${blue.lightest};
    padding-top: 96px;
    margin-bottom: -160px;
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
`

const StyledButton = styled(Button)`
    width: 100%;
`

const Image = styled.img`
    max-width: 100%;
    /* For some reason margin-bottom was 
    being overwritten to margin: 0 on the 
    button so I added it here instead */
    margin-top: 96px;
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
        <li key={goal.goal_title.text}>{goal.goal_title.text}</li>
    ))

    return (
        <Container>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            <List>{goals}</List>
            <StyledButton size="xl">{buttonText}</StyledButton>
            <Image src={imgUrl} alt="image" />
        </Container>
    )
}
