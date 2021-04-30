import React from 'react'
import styled from 'styled-components'
import ButtonV2 from '../ButtonV2'
import { gray } from '@vschool/lotus'
import { navigate } from '@reach/router'

const CalloutContainer = styled.div`
    width: 100%;
    padding: 40px 88px 40px 40px;
    background: ${gray.light};
    // border: 2px dashed orange;

    & > .title {
        margin-bottom: 16px;
        font-style: normal;
        font-weight: 900;
        font-size: 32px;
        line-height: 40px;
        color: ${gray.darkest};
        // border: 1px dashed orange;
    }

    & > .description {
        margin-bottom: 32px;
        font-weight: normal;
        font-size: 20px;
        line-height: 32px;
        display: flex;
        align-items: center;
        color: ${gray.darkest};
        // border: 1px dashed orange;
    }

    & > .callout-button {
        
        &:hover {
            box-shadow: none;
        }

        &:active {
            border: 2px solid ${gray.dark};
        }
    }
`

export default function Callout(props) {
    const { 
        className,
        calloutTitle,
        calloutDescription,
        calloutButtonText
    } = props

    return (
        <CalloutContainer className={className}>
            <h3 className={'title'}>{calloutTitle}</h3>
            <p className={'description'}>{calloutDescription}</p>
            <ButtonV2
                buttonText={calloutButtonText} 
                className={'callout-button'} 
                buttonType={'primary'}
                onClick={() => navigate(props.to)}
            />
        </CalloutContainer>
    )
}
