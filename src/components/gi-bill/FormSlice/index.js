import React from 'react'
import styled from 'styled-components'
import Form from './Form'
import { blue, red, gray } from '@vschool/lotus'

const SliceContainer = styled.div`
    // padding: 64px 88px 112px 88px;
    display: grid;
    gap: 32px;
    // grid-template-rows: 15% 1fr;
    background: ${blue.lightest};

    & > .header-wrapper {
        display: grid;
        grid-template-colums: repeat(12, auto);
        grid-template-rows: auto auto;
        gap: 24px;
        border: 1px solid darkblue;

        & > .sub-heading {
            grid-column-start: 1;
            grid-column-end: 10;
            // grid-row-start: 1;
            color: ${red.dark};
            font-family: 'Aktiv Grotesk Ex';
            font-weight: 800;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: 0.25px;
            text-transform: uppercase;
            border: 2px solid darkblue;
        }

        & > .heading {
            // grid-column-start: 2;
            // grid-row-start: 2;

            // margin-top: 8px;
            // width: 700px;
            // grid-column-start: 2;
            // grid-row-start: 2;
            // grid-row-end: 3;
            font-family: 'Aktiv Grotesk';
            font-weight: 900;
            font-size: 56px;
            line-height: 56px;
            color: ${gray.darkest};
            border: 2px solid orange;
        } 
    }  

    & > .content-wrapper {
        // display: flex;
        // justify-content: space-between;
        // display: grid;
        // grid-template-columns: 50% 50%;
        // margin-top: 32px;
        border: 2px solid lightcoral;

        & > .image-container {
            position: relative;
            top: -16px;
            // right: -16px;
            width: 400px;
            background: ${blue.dark};

            & > img {
                position: relative;
                top: 16px;
                left: -16px;
                height: 528px;
                width: 100%;
            }
        }
    }
`

export default function index(props) {
    const {
        sliceHeader,
        formHeading,
        buttonText,
        image
    } = props

    console.log(blue)

    return (
        <SliceContainer>
            <div className={'header-wrapper'}>
                <p className={'sub-heading'}>{sliceHeader.subHeading}</p>
                {/* <p className={'heading'}>{sliceHeader.heading}</p> */}
            </div>
            <div className={'content-wrapper'}>
                <Form 
                    heading={formHeading}
                    buttonText={buttonText} 
                />
                <div className={'image-container'}>
                    <img 
                        src={image.url} 
                        alt={image.alt}
                    />
                </div>
            </div>
        </SliceContainer>
    )
}
