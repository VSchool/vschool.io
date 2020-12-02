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
    /* margin-right: auto; */
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

const StyledLink = styled(Link)`
    /* margin-right: auto; */
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
                }
            }
        }
    `)

    const {
        logo: { url: logoUrl },
        mobile_logo: { url: mobileLogoUrl },
    } = data.prismicNavigationBar.data
    return (
        <Navbar>
            <BackButton to="/">vschool.io</BackButton>
            <StyledLink to="/">
                {/* TODO: use react-media package to display 
                the shortened logo (VS instead of V School) 
                on small screens */}
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
            </StyledLink>
        </Navbar>
    )
}
