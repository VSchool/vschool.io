import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { gray, blue } from "@vschool/lotus"

const Container = styled.section`
    background-color: ${gray.lighter};
    padding: 20px 40px;

    @media (min-width: 800px){
        padding: 96px 80px;
    }
`

const Title = styled.h1`
    font-weight: 800;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    color: ${gray.darkest};

    @media (min-width: 800px){
        font-size: 32px;
        line-height: 40px;
    }
`

const BoxContainer = styled.div`

    @media (min-width: 800px){
     
    }

`

const BoxInnerContainer = styled.div`
    display: flex;
    border: 1px solid black;
    gap: 20px;
    margin: 10px;
    max-width: 1200px;
    align-items: center;

    @media (min-width: 800px){
     
    }
`


const BoxMainTitle = styled.h1`
    font-weight: 800;
    font-size: 16px;
    line-height: 24px;
    color: ${gray.darkest};

    @media (min-width: 800px){
        font-size: 20px;
        line-height: 24px;
    }
`

const BoxSubtitle = styled.p`
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: ${gray.darker};

    @media (min-width: 800px){
        font-size: 16px;
        line-height: 24px;
    }
`

const BoxLogo = styled.img`
   
`

const InfoContainer = styled.div`

    @media (min-width: 800px){
     
    }

`
const Paragraph = styled.p`


    @media (min-width: 800px){
       
    }

`




const ComponentName = () => {
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
        }
      }
    }
  `)

  const {
    career_title: { text: careerTitle },
    career_box
  } = data.prismicPrecourseCommunitiesPage.data

  const mappedBoxes = career_box.map(({
    career_box_topics_title: { text: BoxTopicsTitle},
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
    career_box_button_text: { text: BoxButtonText }
  }) => <BoxInnerContainer>
            <BoxLogo src={logoUrl} alt={logoAlt} />
            <div>
                <BoxMainTitle>{BoxTitle}</BoxMainTitle>
                <BoxSubtitle>{BoxSub}</BoxSubtitle>
            </div>
        </BoxInnerContainer>
  )
  return (
      <Container>
          <Title>{careerTitle}</Title>
          <BoxContainer>
            {mappedBoxes}
          </BoxContainer>
      </Container>
  )
}

export default ComponentName
