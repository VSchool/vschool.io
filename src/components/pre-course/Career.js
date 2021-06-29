import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { gray, Button } from "@vschool/lotus"

const Container = styled.section`
    background-color: ${gray.lighter};
    padding: 20px 40px;

    @media (min-width: 800px) {
        padding: 0px 80px 96px;
    }
`

const Title = styled.h1`
    font-weight: 800;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    color: ${gray.darkest};
    padding-bottom: 48px;

    @media (min-width: 800px) {
        font-size: 32px;
        line-height: 40px;
        padding-bottom: 64px;
    }
`

const BoxContainer = styled.div``

const BoxInnerContainer = styled.div`
    display: flex;
    border: 1px solid ${gray.dark};
    gap: 20px;
    margin: 10px 10px 0;
    min-width: 400px;
    max-width: 900px;
    align-items: center;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12),
        0px 1px 5px rgba(0, 0, 0, 0.2);

    @media (min-width: 800px) {
    }

    &:hover {
        border: 1px solid ${gray.darkest};
        .arrow {
            filter: brightness(0.7);
        }
    }
`

const BoxMainTitle = styled.h1`
    font-weight: 800;
    font-size: 16px;
    line-height: 24px;
    color: ${gray.darkest};

    @media (min-width: 800px) {
        font-size: 20px;
        line-height: 24px;
    }
`

const BoxSubtitle = styled.p`
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: ${gray.darker};

    @media (min-width: 800px) {
        font-size: 16px;
        line-height: 24px;
    }
`

const BoxMainContainer = styled.div`
    padding-right: 0px;

    @media (min-width: 800px) {
        padding-right: 70px;
    }
`

const Arrow = styled.img`
    margin: 0 20px 0 0px;
    margin-left: auto;

    @media (min-width: 800px) {
        margin: 0 80px;
    }
`

const BoxDropContainer = styled.div`
    max-width: 900px;
    margin: 0 10px 10px;
    border: 1px solid black;
    display: block;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12),
        0px 1px 5px rgba(0, 0, 0, 0.2);

    @media (min-width: 800px) {
        display: flex;
    }
`

const ContentGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 48px;
    grid-gap: 40px;
`

const GridTop = styled.div`
    grid-column: 1/-1;
`

const GridBottomLeft = styled.div`
    grid-column: 1/2;
    grid-row: 2/4;
`

const GridRightTop = styled.div`
    grid-column: 2/-1;
    grid-row: 2/3;
`

const GridRightBottom = styled.div`
    grid-column: 2/-1;
    grid-row: 3/4;
`

const GridTitle = styled.p`
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.5px;
    color: ${gray.darkest};
`

const GridDescription = styled.div`
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    color: ${gray.darker};

    & > p {
        font-weight: normal;
        font-size: 14px;
        line-height: 18px;
        color: ${gray.darker};
    }
`

const ImageContainer = styled.div`
    padding: 48px;

    & > button {
        width: 300px;
        margin-top: 20px;
    }

    @media (min-width: 800px) {
    }
`

const StyledButton = styled(Button)`
    filter: ${props => props.type === "UX / UI Design" && "brightness(1.8)"};
    font-size: 14px;
`

const Career = props => {
    const [open, setOpen] = useState(false)

    const data = useStaticQuery(graphql`
        {
            prismicPrecourseCommunitiesPage {
                data {
                    career_title {
                        text
                    }
                    career_box {
                        career_box_topics_title {
                            text
                        }
                        career_box_topics {
                            html
                        }
                        career_box_title {
                            text
                        }
                        career_box_subtitle {
                            text
                        }
                        career_box_logo {
                            alt
                            url
                        }
                        career_box_len_title {
                            text
                        }
                        career_box_len_sub {
                            text
                        }
                        career_box_image {
                            url
                            alt
                        }
                        career_box_diff_title {
                            text
                        }
                        career_box_diff_sub {
                            text
                        }
                        career_box_desc_title {
                            text
                        }
                        career_box_desc_sub {
                            text
                        }
                        career_box_button_text {
                            text
                        }
                    }
                    career_down_arrow {
                        alt
                        url
                    }
                    career_up_arrow {
                        alt
                        url
                    }
                }
            }
        }
    `)

    const {
        career_title: { text: careerTitle },
        career_box,
        career_down_arrow: { alt: downAlt, url: downUrl },
        career_up_arrow: { alt: upAlt, url: upUrl },
    } = data.prismicPrecourseCommunitiesPage.data

    const mappedBoxes = career_box.map(
        ({
            career_box_topics_title: { text: BoxTopicsTitle },
            career_box_topics: { html: BoxTopics },
            career_box_title: { text: BoxTitle },
            career_box_subtitle: { text: BoxSub },
            career_box_logo: { alt: logoAlt, url: logoUrl },
            career_box_len_title: { text: BoxLenTitle },
            career_box_len_sub: { text: BoxLenSub },
            career_box_image: { alt: imgAlt, url: imgUrl },
            career_box_diff_title: { text: BoxDiffTitle },
            career_box_diff_sub: { text: BoxDiffSub },
            career_box_desc_title: { text: BoxDescTitle },
            career_box_desc_sub: { text: BoxDescSub },
            career_box_button_text: { text: BoxButtonText },
        }) => (
            <>
                <BoxInnerContainer
                    onClick={() =>
                        setOpen(prev => (prev === BoxTitle ? false : BoxTitle))
                    }
                    style={{
                        marginBottom: open === BoxTitle ? 0 : 24,
                        boxShadow: open === BoxTitle && "none",
                    }}
                >
                    <img src={logoUrl} alt={logoAlt} />
                    <BoxMainContainer>
                        <BoxMainTitle>{BoxTitle}</BoxMainTitle>
                        <BoxSubtitle>{BoxSub}</BoxSubtitle>
                    </BoxMainContainer>
                    <Arrow
                        className="arrow"
                        src={open === BoxTitle ? upUrl : downUrl}
                        alt={open === BoxTitle ? upAlt : downAlt}
                    />
                </BoxInnerContainer>
                <BoxDropContainer
                    style={{
                        display: open !== BoxTitle && "none",
                        marginBottom: open === BoxTitle ? 24 : 0,
                    }}
                >
                    <ContentGrid>
                        <GridTop>
                            <GridTitle>{BoxDescTitle}</GridTitle>
                            <GridDescription>{BoxDescSub}</GridDescription>
                        </GridTop>
                        <GridBottomLeft>
                            <GridTitle>{BoxTopicsTitle}</GridTitle>
                            <GridDescription
                                dangerouslySetInnerHTML={{ __html: BoxTopics }}
                            ></GridDescription>
                        </GridBottomLeft>
                        <GridRightTop>
                            <GridTitle>{BoxLenTitle}</GridTitle>
                            <GridDescription>{BoxLenSub}</GridDescription>
                        </GridRightTop>
                        <GridRightBottom>
                            <GridTitle>{BoxDiffTitle}</GridTitle>
                            <GridDescription>{BoxDiffSub}</GridDescription>
                        </GridRightBottom>
                    </ContentGrid>
                    <ImageContainer>
                        <img src={imgUrl} alt={imgAlt} />
                        <StyledButton
                            onClick={props.submit}
                            type={BoxTitle}
                            disabled={BoxTitle === "UX / UI Design"}
                        >
                            {BoxTitle === "UX / UI Design"
                                ? "Coming Soon"
                                : BoxButtonText}
                        </StyledButton>
                    </ImageContainer>
                </BoxDropContainer>
            </>
        )
    )
    return (
        <Container>
            <Title>{careerTitle}</Title>
            <BoxContainer>{mappedBoxes}</BoxContainer>
        </Container>
    )
}

export default Career
