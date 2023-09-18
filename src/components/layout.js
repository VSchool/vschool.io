import React, { useState, useEffect } from "react";
import PropTypes from "prop-types"
import styled, {css} from "styled-components"
import Link from "./shared/QueryLink"
import { useLocation } from "@reach/router"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "@vschool/lotus/dist/index.css"
import "./layout.scss"
import { gray, blue } from "@vschool/lotus"
import useScroll from '../components/shared/UseScroll'

// These styles make the Footer stick to the bottom of any page, no matter the page height
const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

const ContentContainer = styled.div`
    flex-grow: 1;

    & > main {
        background-color: ${gray.lighter};
        padding-top: ${({ $showBanner }) => ($showBanner ? `128px` : `80px`)};

        @media (min-width: 600px) {
            background-color: ${gray.lighter};
            padding-top: ${({ $showBanner }) =>
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
    &:active {
        color: white;
    }
    &:visited {
        color: white;
    }
`

const NavToggle = styled.div`
  /* visibility: ${props => props.status ? 'visible' : 'hidden'}; */
  /* opacity: ${props => props.status ? 1 : 0}; */
  position: absolute;
  top: ${props => props.status ? 0 : '-200px'};
  transition: all .5s linear;

  & > nav {
      top: ${props => {
        if(props.$showBanner){
            return props.status ? '30px' : '-200px'
        }else {
            return props.status ? 0 : '-200px'
        }
      }};
      transition: all .5s linear;

      @media(min-width: 800px){
          top: ${props => {
            if(props.$showBanner){
                return props.status ? '34px' : '-200px'
            }else {
                return props.status ? 0 : '-200px'
            }
          }};
      }
  }

`

const Layout = ({ children }) => {
    const {scrollDirection, scrollY, setScrollY} = useScroll()
    const [showing, setShowing] = useState(true)
    const location = useLocation()
    const showBanner = location.pathname !== "/scholarships"
    
    useEffect(()=> {
        setShowing(true)
        if (scrollY > 116){
            scrollDirection === 'down' ? setShowing(false) : setShowing(true)
        }
    })

    useEffect(() => {
        if(!localStorage.getItem('lastLocation')){
            localStorage.setItem('lastLocation', location.pathname)
        }else {
            if(localStorage.getItem('lastLocation') !== location.pathname){
                setTimeout(() => {
                    setScrollY(0)
                    localStorage.setItem('lastLocation', location.pathname)
                }, 1)
            }
        }
    }, [location])

    return (
        <MainContainer>
            <ContentContainer $showBanner={showBanner}>
                <NavToggle status={showing} $showBanner={showBanner}>
                    {showBanner && (
                        <Banner>
                            <BannerText>
                                <span style={{ fontWeight: 700 }}>
                                Apply for the Meta and IMPACT Scholarship
                                </span>{" "}
                                - Full and partial scholarships available.{" "}
                                <StyledLink to="https://meta.scholarship.vschool.io">
                                    Learn More
                                </StyledLink>
                            </BannerText>
                        </Banner>
                    )}
                    <Navbar bannerAdded={showBanner} />
                </NavToggle>

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

