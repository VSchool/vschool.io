import React from 'react';
import styled from "styled-components"
import { blue, gray } from "@vschool/lotus"

const Container = styled.section`
    background-color: ${gray.lighter};
    padding-top: 0;
    padding-bottom: 74px;

    & > h1 {
        max-width: 630px;
        font-size: 32px;
        line-height: 40px;
        text-align: center;
        color: ${gray.darkest};
    }

    & > p {
        max-width: 600px;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        color: ${gray.darker};
        margin-top: 20px;
    }

    & > ul {
        max-width: 500px;
        padding: 48px 0;

        & > li:last-child {
            border-bottom: 2px solid #859EEC;
        }
    }

    @media (min-width: 800px) {
        padding-top: 0;

        & > h1 {
            margin-top: 100px;
            font-size: 44px;
            line-height: 48px;
        }
    }
`

const OptionContainer = styled.li`
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
    color: ${gray.darkest};
    list-style-type: none;
    padding: 24px 20px;
    border-top: 2px solid #859EEC;

    & > img {
        width: 22px;
        display: inline;
        margin: 0px 10px;
        position: relative;
        top: 3px;
    }

    @media (min-width: 800px){
        font-size: 20px;
    }
`

const Payments = (props) => {
    const {
        payments_checkmark: {
            alt: checkAlt,
            url: checkUrl
        },
        payments_options,
        payments_subtitle: {
            text: paySub
        },
        payments_title: {
            text: payTitle
        }
    } = props;

    const mappedOptions = payments_options.map(
        ({payment_type: {text}}) => 
        <OptionContainer>
            <img src={checkUrl} alt={checkAlt} />{text}
        </OptionContainer>)


    return (
        <Container>
            <h1>{payTitle}</h1>
            <p>{paySub}</p>
            <ul>{mappedOptions}</ul>
        </Container>
    );
};

export default Payments;