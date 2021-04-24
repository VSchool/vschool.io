import React from 'react'
import styled from 'styled-components'
import { gray, red, blue } from '@vschool/lotus'

const HeroContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: [start] 88px [col1] 1fr [col2] 1fr [col3] 1fr [col4] 1fr [col5] 1fr [col6] 1fr [col7] 1fr [col8] 1fr [col9] 1fr [col10] 1fr [col11] 1fr [col12] 1fr [end] 88px;
    grid-template-rows: auto auto auto;
    // grid-template-columns: repeat(12, 1fr);
    // grid-template-rows: 1fr;
    // grid-template-columns: [one] 1fr [two] 1fr [three] 1fr [four] 1fr [five] 1fr [six] 1fr [seven] 1fr [eight] 1fr [nine] 1fr [ten] 1fr [eleven] 1fr [twelve] 1fr;
    // grid-template-rows: auto;
    // height: 400px;
    // padding: 112px 88px 112px 88px;
    background: ${blue.lightest};

    & > h1 {
        grid-column-start: col1;
        grid-column-end: col8;
        grid-row-start: 2;
        position: relative;
        font-style: normal;
        font-weight: 900;
        font-size: 56px;
        line-height: 56px;
        color: ${gray.darkest};
        background: ${gray.base};
        // border: 2px dashed orange;
    }

    & > .subtitle {
        grid-column-start: col1;
        grid-column-end: span end;
        // grid-column-start: two;
        // grid-column-end: twelve;
        // grid-row-start: 1;
        font-style: normal;
        font-weight: 800;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.25px;
        text-transform: uppercase;
        color: ${red.dark};
        background: ${gray.dark};
        // border: 2px dashed orange;
    }

    & > .content-wrapper {
        grid-column-start: col1;
        grid-column-end: end;
        grid-row-start: 3;
        // margin-top: 8px;
        // border: 2px dotted green;
        // background: ${gray.darker};


        & > .description-container {
            // border: 2px dashed orange;

            & > .description {
                font-style: normal;
                font-weight: normal;
                font-size: 20px;
                line-height: 32px;
                color: ${gray.darker};
                // border: 2px dashed orange;
            }
        }

        & > .image-container {
            height: 200px;
            width: 150px;
            // border: 2px dashed orange;
            background: ${red.darkest};

    
            & > img {
                width: 100%;
                height: 100%;
                opacity: 20%;
            }
        }
    }


`

export default function Hero(props) {
    const { prismicData } = props
    
    let heroTitle = prismicData.hero_title[0].text
    let heroSubtitle = prismicData.hero_subtitle[0].text
    let heroDescription = prismicData.hero_description[0].text
    let heroImageUrl = prismicData.hero_image.url
    let heroImageAlt = prismicData.hero_image.alt

    return (
        <HeroContainer>
            <p className={'subtitle'}>{heroSubtitle}</p>
            <h1>{heroTitle}</h1>
            <div className={'content-wrapper'}>
                <div className={'description-container'}>
                    <p className={'description'}>{heroDescription}</p> 
                </div>

                <div className={'image-container'}>
                    <img src={heroImageUrl} alt={heroImageAlt} />
                </div>
            </div>
        </HeroContainer>
    )
}
