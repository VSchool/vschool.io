import React from 'react'
import styled from 'styled-components'
import { gray } from '@vschool/lotus'

const InfoContainer = styled.div`
    // border: 1px solid blue;

    @media (min-width: 800px) {
        width: 232px;
        // border: 1px solid green;
    }

    & > .image-container {
        margin: 0px 0px 32px 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        // border: 1px solid green;

        & > img {
            width: 128px;
            height: 128px;

            @media (min-width: 800px) {
                width: 128px;
                height: 132px;
            }
        }
    }

    & > .team-name {
        margin: 0px 0px 4px 0px;
        font-family: Aktiv Grotesk;
        font-style: normal;
        font-weight: 800;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        color: ${gray.darkest};
        // border: 1px dotted orange;

        @media (min-width: 800px) {
            // margin: 0px 16px 0px 16px;
            font-family: Aktiv Grotesk;
            font-style: normal;
            font-weight: 800;
            font-size: 20px;
            line-height: 24px;
            text-align: center;
            color: ${gray.darkest};
        }
    }

    & > .team-role {
        margin: 0px;
        height: 32px;
        font-family: Aktiv Grotesk Ex;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 16px;
        text-align: center;
        letter-spacing: 0.5px;
        color: ${gray.darkest};
        // border: 1px dotted orange;
    }
`

const TeamLogo = styled.div`
    margin: 16px 0px 0px 0px;
    min-height: 66px;
    background-position: center;
    background-repeat: no-repeat;
    height: 58px;
    // border: 1px dotted orange;
`        

export default function MemberInfo(props) {
    const { 
        teamName,
        teamRole,
        teamImage,
        logo
    } = props

    return (
        <InfoContainer>
            <div className={'image-container'}>
                <img src={teamImage.src} alt={teamImage.alt} />
            </div>
            <h5 className={'team-name'}>{teamName}</h5>
            <p className={'team-role'}>{teamRole}</p>
            {logo.url && (
                <TeamLogo
                    style={{
                        backgroundImage: `url(${logo.url})`,
                    }}
                    alt={logo.alt}
                />
            )}
        </InfoContainer>
    )
}
