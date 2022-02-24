import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Media from "react-media"
import { gray, blue } from "@vschool/lotus"
import Link from "../../shared/QueryLink"

const Navbar = styled.nav`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${gray.lighter};
    box-shadow: 0px 4px 16px rgba(33, 32, 31, 0.1);
    padding-left: 18px;
    padding-right: 18px;
    position: relative;

    @media (min-width: 800px) {
        padding-left: 88px;
        padding-right: 88px;
    }
`
const BackButton = styled(Link)`
    left: 18px;
    position: absolute;
    color: ${blue.base};

    @media (min-width: 800px) {
        left: 88px;
    }
`
const Logo = styled.img`
    height: 24px;
`

const BackArrow = styled.img`
    margin: 0px 10px;
    position: relative;
    top: 3px;
`

export default function SimpleNav() {
    const data = useStaticQuery(graphql`
        {
            prismicNavigationBar {
                data {
                    logo {
                        url
                    }
                    mobile_logo {
                        url
                    }
                    back_arrow {
                        url
                    }
                }
            }
        }
    `)

    const {
        logo: { url: logoUrl },
        mobile_logo: { url: mobileLogoUrl },
        back_arrow: { url: backArrow }
    } = data.prismicNavigationBar.data

    const clearLocal = (e) => {
        let doubleCheck = window.location.pathname === '/completion-form/' && window.confirm('Are you sure you want to leave? if you do all your progress will be lost')
        if(window.location.pathname === '/completion-form/' && doubleCheck){
            localStorage.removeItem('pageNum')
            localStorage.removeItem('step')
        }else if (window.location.pathname === '/completion-form/' && !doubleCheck){
            e.preventDefault()
        }
    }
    return (
        <Navbar>
            <BackButton to="/" onClick={clearLocal}><BackArrow src={backArrow} /> vschool.io</BackButton>
            <Link to="/">
                <Media
                    queries={{
                        mobile: "(max-width: 799px)",
                        desktop: "(min-width: 800px)",
                    }}
                >
                    {matches => (
                        <>
                            {matches.mobile && <Logo src={mobileLogoUrl} />}
                            {matches.desktop && <Logo src={logoUrl} />}
                        </>
                    )}
                </Media>
            </Link>
        </Navbar>
    )
}
