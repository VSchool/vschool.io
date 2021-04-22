import React from 'react'
import styled from 'styled-components'
import Form from './Form'
import { blue, red, gray } from '@vschool/lotus'

const SliceContainer = styled.div`
    padding: 64px 88px 112px 88px;
    background: ${blue.lightest};

    & > .header-wrapper {
        border: 1px solid darkblue;

        & > .sub-heading {
            color: ${red.dark};
            font-family: 'Aktiv Grotesk Ex';
            font-weight: 800;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: 0.25px;
            text-transform: uppercase;
            border: 1px dotted orange;
        }

        & > .heading {
            margin-top: 8px;
            width: 700px;
            font-family: 'Aktiv Grotesk';
            font-weight: 900;
            font-size: 56px;
            line-height: 56px;
            color: ${gray.darkest};
            border: 1px dotted orange;
        } 
    }  

    & > .content-wrapper {
        display: flex;
        justify-content: space-between;
        margin-top: 32px;
        border: 2px solid lightcoral;

        & > .image-container {
            position: relative;
            top: -16px;
            right: -16px;
            // width: 500px;
            background: ${blue.dark};

            & > img {
                position: relative;
                top: 16px;
                left: -16px;
                height: 528px;
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
                <p className={'heading'}>{sliceHeader.heading}</p>
            </div>
            <div className={'content-wrapper'}>
                <Form heading={formHeading} buttonText={buttonText} />
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
