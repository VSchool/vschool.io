import React from 'react'
import styled from 'styled-components'
import devIcon from  '../../../images/icons/card-dev-icon.png'
import designIcon from  '../../../images/icons/card-design-icon.png'
import { gray, blue } from '@vschool/lotus'

const CardContainer = styled.div`
    padding: 32px 40px 32px 24px;
    width: 412px;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 4px 0px rgba(0, 0, 0, 0.14);

    & > img {
        margin-bottom: 8px;
        // border: 1px dashed orange;
    }

    & > .title {
        margin-bottom: 16px;
        font-weight: 800;
        font-size: 20px;
        line-height: 24px;
        color: ${gray.darkest};
        // border: 1px dashed orange;
    }

    & > .description {
        margin-bottom: 48px;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        color: ${gray.darker};
        // border: 1px dashed orange;
    }

    & > .link-text {
        font-family: Aktiv Grotesk Ex;
        font-style: normal;
        font-weight: 800;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 1px;
        text-transform: capitalize;
        color: ${blue.base};
    }
`

export default function Card(props) {
    const { 
        className, 
        cardType,
        title,
        description,
        buttonText
    } = props

    return (
        <CardContainer className={className}>
            {cardType === 'dev' ? <img src={devIcon} alt={'alt'} /> : <img src={designIcon} alt={'alt'} />}
            <h4 className={'title'}>{title}</h4>
            <p className={'description'}>{description}</p>
            <p className={'link-text'}>{buttonText}</p>
        </CardContainer>
    )
}
