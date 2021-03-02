import React from "react"
import styled from "styled-components"
import { DateTime } from "luxon"
import { useStaticQuery, graphql } from "gatsby"
import {
    gray,
    blue,
    green,
    orange,
    pink,
    purple,
    yellow,
    CardGroup,
    Card,
} from "@vschool/lotus"

const colors = {
    blue,
    green,
    orange,
    pink,
    purple,
    yellow,
}

const Container = styled.section`
    padding: 96px 8px 0;
`
const Title = styled.h2`
    white-space: nowrap;
`
const Subtitle = styled.h6`
    color: ${blue.base};
    text-align: center;
    margin-top: 24px;
`

const StyledCardGroup = styled(CardGroup)`
    margin-top: 48px;
    // Remove wrapping styles on desktop:
    grid-template-columns: initial;
    grid-auto-flow: column;
    overflow: scroll hidden;
    align-self: flex-start;
    max-width: 100%;
`

const FlexCard = styled(Card)`
    display: flex;
    flex-direction: column;
    padding-top: 48px;
    padding-left: 32px;
    padding-right: 32px;
    max-height: none;
`

const Date = styled.h3`
    text-align: center;
`

const SpeakerImg = styled.img`
    margin-top: 48px;
    width: 100%;
    box-shadow: ${props => `8px 8px 0px 0px ${props.$shadowColor}`};

    @media (min-width: 800px) {
        box-shadow: ${props => `16px 16px 0px 0px ${props.$shadowColor}`};
    }
`

const Time = styled.p`
    font-family: "aktiv-grotesk-extended";
    font-size: 10px;
    line-height: 12px;
    margin-top: 58px;
`

const Name = styled.h4`
    margin-top: 8px;
`

const TalkTitle = styled.p`
    color: ${gray.darker};
    font-size: 12px;
    line-height: 16px;
    font-weight: normal;
    margin-top: 8px;

    ::before {
        content: open-quote;
    }
    ::after {
        content: close-quote;
    }
`

const Rsvp = styled.a`
    margin-top: 8px;
`

export default function ConferenceSeries() {
    const data = useStaticQuery(graphql`
        {
            prismicWomensHistoryMonthPage {
                data {
                    speakers_title {
                        text
                    }
                    speakers_subtitle {
                        text
                    }
                    speakers_info {
                        border_color
                        datetime
                        photo {
                            alt
                            url
                        }
                        rsvp_link {
                            url
                        }
                        speaker_name {
                            text
                        }
                        talk_title {
                            text
                        }
                    }
                }
            }
        }
    `)

    const {
        speakers_title: { text: title },
        speakers_subtitle: { text: subtitle },
        speakers_info: speakers,
    } = data.prismicWomensHistoryMonthPage.data

    const speakerCards = speakers.map(speaker => {
        const {
            speaker_name: { text: name },
            photo: { alt: photoAlt, url: photoUrl },
            datetime,
            border_color: borderColor,
            talk_title: { text: talkTitle },
            rsvp_link: { url: rsvpLink },
        } = speaker

        const eventDateTime = DateTime.fromISO(datetime)
        const eventDateText = eventDateTime.toFormat("MM.dd")
        const eventTimeText = eventDateTime.toFormat("t (ZZZZ)")

        return (
            <FlexCard key={datetime}>
                <Date>{eventDateText}</Date>
                <SpeakerImg
                    src={photoUrl}
                    alt={photoAlt}
                    $shadowColor={colors[borderColor].light}
                />
                <Time>{eventTimeText}</Time>
                <Name>W/ {name}</Name>
                <TalkTitle>{talkTitle}</TalkTitle>
                <Rsvp href={rsvpLink}>RSVP</Rsvp>
            </FlexCard>
        )
    })

    return (
        <Container>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            <StyledCardGroup>{speakerCards}</StyledCardGroup>
        </Container>
    )
}
