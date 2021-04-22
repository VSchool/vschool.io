import React from 'react'
import styled from 'styled-components'
import { gray } from '@vschool/lotus'

const InfoContainer = styled.div`
    @media (min-width: 800px) {
        width: 232px;
    }

    & > .image-container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 32px;

        & > img {
            width: 128px;
            height: 128px;

            @media (min-width: 800px) {
                height: 132px;
            }
        }
    }

    & > .team-name {
        margin-bottom: 4px;
        color: ${gray.darkest};
        font-style: normal;
        font-weight: 800;
        font-size: 16px;
        line-height: 24px;
        text-align: center;

        @media (min-width: 800px) {
            font-size: 20px;
        }
    }

    // *** team-role - Removing the font info from this class will change the font to something else
    // Need to find where the global styling is set at to find out what it is setting
    // for styling and I can work from that

    & > .team-role {
        height: 32px;
        margin: 0px;
        color: ${gray.darkest};
        font-family: 'Aktiv Grotesk Ex';
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 16px;
        text-align: center;
        letter-spacing: 0.5px;
    }
`

const TeamLogo = styled.div`
    height: 66px;
    margin: 16px 0px 0px 0px;
    background-position: center;
    background-repeat: no-repeat;
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