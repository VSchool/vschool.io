import React from "react"
import HeroLayout from "../shared/HeroLayout"
import styled from "styled-components"
import { gray, Button, blue } from "@vschool/lotus"
import { useStaticQuery, graphql } from "gatsby"

const Container = styled.section`
    background-color: ${blue.lightest};
    padding: 20px 40px;

    @media (min-width: 800px){
        padding: 96px 80px;
    }
`

const HeroTitle = styled.h1`

    @media (min-width: 800px){
    
    }
`

const HeroParagraph = styled.p`
  

    @media (min-width: 800px){
        
    }
`

const BlueSubtext = styled.p`
   

    @media (min-width: 800px){
       
    }

`

const StyledButton = styled(Button)`
  
    @media (min-width: 800px){
    }
`

const Info = () => {
    const data = useStaticQuery(graphql`
    {
        prismicPrecourseCommunitiesPage {
            data {
                info_box {
                    box_logo {
                        alt
                        url
                    }
                    box_paragraph {
                        text
                    }
                    box_title {
                        text
                    }
                }
                info_subtitle {
                    text
                }
                info_title {
                    text
                }
            }
        }
    }
`)
    const {
        info_box,
        info_title: [{ 
            text: infoTitle
        }],
        info_subtitle: [{
            text: infoSub
        }],
    } = data.prismicPrecourseCommunitiesPage.data

    return (
        <Container>
            
        </Container>
    );
};

export default Info;