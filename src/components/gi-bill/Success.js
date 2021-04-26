import React from 'react'
import styled from 'styled-components'

import { blue, gray } from '@vschool/lotus'

const SuccessContainer = styled.div`
    // margin-top: 112px;
    padding-top: 112px;
    padding-bottom: 112px;
    display: grid;
    grid-template-columns: [left-margin] 64px [left-margin-end col1-start] 1fr [col1-end col2-start] 1fr [col2-end col3-start] 1fr [col3-end col4-start] 1fr [col4-end col5-start] 1fr [col5-end col6-start] 1fr [col6-end col7-start] 1fr [col7-end col8-start] 1fr [col8-end col9-start] 1fr [col9-end col10-start] 1fr [col10-end col11-start] 1fr [col11-end col2-start] 1fr [col12-end right-margin-start] 64px [right-margin];
    grid-column-gap: 24px;
    grid-template-rows: auto;
    // border: 2px dashed black;

    & > .title {
        margin-bottom: 16px;
        grid-column-start: col3-start;
        grid-column-end: span col10-end;
        grid-row-start: 1;
        text-align: center;
        // background: lightblue;
    }

    & > .description {
        // margin-bottom: 48px;
        grid-column-start: col2-start;
        grid-column-end: span col11-end;
        grid-row-start: 2;
        font-weight: normal;
        text-align: center;
        // background: lightgreen;
    }

    & > .wrapper {
        margin-top: 48px;
        grid-column-start: left-margin;
        grid-column-end: right-margin;
        grid-row-start: 3;
        display: grid;
        grid-template-columns: [margin-left] 64px [margin-left-end c1-start] 1fr [c1-end c2-start] 1fr [c2-end c3-start] 1fr [c3-end c4-start] 1fr [c4-end c5-start] 1fr [c5-end c6-start] 1fr [c6-end c7-start] 1fr [c7-end c8-start] 1fr [c8-end c9-start] 1fr [c9-end c10-start] 1fr [c10-end c11-start] 1fr [c11-end c12-start] 1fr [c12-end margin-right-start] 64px [margin-right];
        grid-column-gap: 24px;
        grid-template-rows: auto;

        & > .testimonial-block {
            position: relative;
            grid-column-start: c5-start;
            grid-column-end: c11-end;
            padding: 62px 26px 72px 72px;
            background: ${blue.lightest};
            border: 2px solid ${blue.base};


            & > .testimonial-author {
                margin-top: 32px;
                font-family: Aktiv Grotesk Ex;
                font-style: normal;
                font-weight: 800;
                font-size: 20px;
                line-height: 24px;
                color: ${blue.darkest};
            }

            & > .testimonial-body {
                font-family: Aktiv Grotesk Ex;
                font-style: normal;
                font-weight: bold;
                font-size: 24px;
                line-height: 32px;
                color: ${gray.darkest};
            }

            & > .testimonial-image {
                position: absolute;
                top: calc(50% - 244px/2);
                left: -192px;
                height: 244px;
                // border: 2px dashed darkblue;
            }
        }
    }
`

export default function Success(props) {
    const { prismicData } = props

    let successTitle = prismicData.success_title[0].text
    let successDescription = prismicData.success_description[0].text
    let successTestimonialBody = prismicData.success_testimonial_body[0].text
    let successTestimonialAuthor = prismicData.success_testimonial_author[0].text
    let successTestimonialImage = prismicData.success_testimonial_image

    return (
        <SuccessContainer>
            <h2 className={'title'}>{successTitle}</h2>
            <p className={'description'}>{successDescription}</p>
            <div className={'wrapper'}>
                <div className={'testimonial-block'}>
                    <p className={'testimonial-body'}>{successTestimonialBody}</p>
                    <p className={'testimonial-author'}>{successTestimonialAuthor}</p>
                    <img className={'testimonial-image'} src={successTestimonialImage.url} alt={'alt'} />
                </div>
            </div>
        </SuccessContainer>
    )
}
