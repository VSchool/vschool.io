import React, {useState} from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { gray, Button, purple } from "@vschool/lotus"
import Arrow from "../../Navbar/Arrow"


const Container = styled.section`
    background-color: ${gray.lighter};
    padding: 96px 40px;

    @media (min-width: 800px) {
        padding: 160px 80px;
    }
`

const Title = styled.h1`
    font-weight: 800;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    color: ${gray.darkest};
    padding-bottom: 16px;

    @media (min-width: 800px) {
        font-size: 32px;
        line-height: 40px;
        padding-bottom: 24px;
    }
`

const BlueSubtext = styled.p`
    font-family: "aktiv-grotesk-extended";
    font-weight: 800;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;
    text-transform: uppercase;
    color: ${purple.base};
    padding-bottom: 48px;
    text-align: center;

    @media (min-width: 800px) {
        font-size: 16px;
        line-height: 24px;
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
    /* box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12),
        0px 1px 5px rgba(0, 0, 0, 0.2); */
    padding: ${props => props.ind === 0 ? 40 : 30 }px;

    @media (min-width: 800px) {
    }

    &:hover {
        border: 1px solid ${gray.darkest};
        .arrow {
            filter: brightness(0.7);
        }
    }

    & > img {
        max-width: 111px;
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
        padding-right: 299px;
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


const StyledArrow = styled(Arrow)`
    margin: 0 0px 0 0px;
    left: ${({ ind }) => ind === 1 && '23px'};
    transform: ${({ $open }) => $open && "rotate(180deg)"};
    height: 15px;
    width: 40px;
    position: relative;
    right: 20px;
`

const BoxDropContainer = styled.div`
    max-width: 835px;
    margin: 0 10px 10px;
    border: 1px solid black;
    display: block;
    /* box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12), */
        /* 0px 1px 5px rgba(0, 0, 0, 0.2); */

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
    padding-bottom: 8px;
`

const GridDescription = styled.div`
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: ${gray.darker};

    & > p {
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        color: ${gray.darker};
    }

    & > ul {
        margin-left: 1px;
    }
`

const ImageContainer = styled.div`
    margin: 48px;

    & > button {
        width: 300px;
        margin-top: 20px;
    }

    & > img {
        max-width: 100%;
    }

    @media (min-width: 800px) {
    }
`

const StyledButton = styled(Button)`
    filter: ${props => props.type === "UX / UI Design" && "brightness(1.8)"};
    font-size: 14px;
`



const Career = ({submit}) => {
  const [open, setOpen] = useState(false)

  const data = useStaticQuery(graphql`
    {
      prismicPrecoursePartners {
        data {
          career_box {
            career_box_button_text {
              text
            }
            career_box_desc_sub {
              text
            }
            career_box_desc_title {
              text
            }
            career_box_diff_sub {
              text
            }
            career_box_diff_title {
              text
            }
            career_box_image {
              alt
              url
            }
            career_box_len_sub {
              text
            }
            career_box_len_title {
              text
            }
            career_box_logo {
              alt
              url
            }
            career_box_title {
              text
            }
            career_box_topics {
              html
            }
            career_box_topics_title {
              text
            }
          }
          career_down_arrow {
            alt
            url
          }
          career_subtitle {
            text
          }
          career_title {
            text
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
      career_box,
      career_subtitle: { text: careerSub},
      career_title: { text: careerTitle},
    } = data.prismicPrecoursePartners.data

    const mappedBoxes = career_box.map(
        ({
            career_box_topics_title: { text: BoxTopicsTitle },
            career_box_topics: { html: BoxTopics },
            career_box_title: { text: BoxTitle },
            career_box_logo: { alt: logoAlt, url: logoUrl },
            career_box_len_title: { text: BoxLenTitle },
            career_box_len_sub: { text: BoxLenSub },
            career_box_image: { alt: imgAlt, url: imgUrl },
            career_box_diff_title: { text: BoxDiffTitle },
            career_box_diff_sub: { text: BoxDiffSub },
            career_box_desc_title: { text: BoxDescTitle },
            career_box_desc_sub: { text: BoxDescSub },
            career_box_button_text: { text: BoxButtonText },
        }, i) => (
            <div key={BoxTitle}>
                <BoxInnerContainer
                    ind={i}
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
                    </BoxMainContainer>
                    <StyledArrow
                        $open={open === BoxTitle}
                        fill={open === BoxTitle ? gray.darker : gray.base}
                        location="precourse"
                        ind={i}
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
                        <StyledButton onClick={submit}
                            type={BoxTitle}
                            disabled={BoxTitle === "UX / UI Design"}>
                            {BoxTitle === "UX / UI Design"
                                ? "Coming Soon"
                                : BoxButtonText}
                        </StyledButton>
                    </ImageContainer>
                </BoxDropContainer>
            </div>
        )
        )

  return (
    <Container>
        <Title>{careerTitle}</Title>
        <BlueSubtext>{careerSub}</BlueSubtext>
        <BoxContainer>{mappedBoxes}</BoxContainer>
    </Container>
    )
}

export default Career
