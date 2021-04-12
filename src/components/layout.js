import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Link from "./shared/QueryLink"
import { useLocation } from "@reach/router"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "@vschool/lotus/dist/index.css"
import "./layout.scss"
import { black, gray, blue } from "@vschool/lotus"

// These styles make the Footer stick to the bottom of any page, no matter the page height
const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

const ContentContainer = styled.div`
    flex-grow: 1;

    & > main {
        margin-top: ${({ $showBanner }) => ($showBanner ? `128px` : `80px`)};

        @media (min-width: 600px) {
            margin-top: ${({ $showBanner }) =>
                $showBanner ? `114px` : `80px`};
        }
    }
`

/* TO REMOVE THE BANNER:
1. Comment out the Banner Element and everything inside below
2. Comment out the Banner styled components below (avoid warnings)
3. Comment out the `top` CSS property on the Navbar component
4. Change
*/

const Banner = styled.div`
    background-color: ${blue.base};
    width: 100%;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 9999;
    padding: 8px 24px;
    @media (min-width: 600px) {
        height: 34px;
    }
`

const BannerText = styled.p`
    color: ${gray.lighter};
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    text-align: center;

    @media (min-width: 600px) {
        font-size: 14px;
        line-height: 18px;
    }
`

const StyledLink = styled(Link)`
    color: white;
    &:hover {
        color: white;
    }
    &:active{
        color: white;
    }
`

const Layout = ({ children }) => {
    const location = useLocation()
    const showBanner = location.pathname !== "/scholarships"
    return (
        <MainContainer>
            <ContentContainer $showBanner={showBanner}>
                {showBanner && (
                    <Banner>
                        <BannerText>
                            <span style={{fontWeight: 700}}>Apply for a Scholarship</span> - Full and partial scholarships available.{" "}
                            <StyledLink to="/scholarships">
                                Learn More
                            </StyledLink>
                        </BannerText>
                    </Banner>
                )}
                <Navbar bannerAdded={showBanner} />

                <main>{children}</main>
            </ContentContainer>
            <Footer />
        </MainContainer>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
