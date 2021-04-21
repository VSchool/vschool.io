import React from 'react'
import styled from 'styled-components'

const InfoContainer = styled.div`
    // width: 180px;
    // border: 1px solid blue;

    & > .image-container {
        margin: 0px 0px 32px 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        // border: 1px solid green;

        & > img {
            width: 128px;
            height: 128px;
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
        color: #000000;
        // border: 1px dotted orange;
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
        color: #000000;
        // border: 1px dotted orange;
    }
`

const TeamLogo = styled.div`
    min-width:100%;
    min-height: 66px;
    background-position: center;
    background-repeat: no-repeat;
    height: 58px;
    width: 100px;
    margin: 16px 0px 0px 0px;
    // border: 1px dotted orange;
`

        

export default function MemberInfo(props) {
    const { 
        teamName,
        teamRole,
        teamImage,
        logo
    } = props
    console.log(logo)

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
