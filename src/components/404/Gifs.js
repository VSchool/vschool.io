import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { gray } from "@vschool/lotus"

const Container = styled.div`
    width: 100vw;
    padding: 0 24px;
    background-position: center;
    background-color: ${gray.light};
    padding-bottom: 64px;

    @media (min-width: 320px) and (max-width: 414px) {
        padding-left: 16px;
        padding-right: 16px;
    }

    @media (min-width: 600px) {
        padding: 0 32px;
        padding-bottom: 88px;
    }

    @media (min-width: 840px) {
        padding: 0 88px;
        padding-bottom: 176px;
    }

    @media (min-width: 1000px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media (min-width: 1200px) {
        padding: 0 176px;
        padding-bottom: 234px;
    }
`

const GifsContainer = styled.div`
    background-image: url(${props => props.bg});
    background-size: cover;

    max-width: 848px;
    width: 100%;
    max-height: 530px;

    @media (min-width: 700px) {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
`

const GifRow1 = styled.div`
    display: flex;
    align-items: center;

    @media (min-width: 700px) {
        justify-content: space-between;
        align-items: center;
    }
`

const GifRow2 = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (min-width: 700px) {
        justify-content: space-around;
        align-items: center;
    }
`

const Gif = styled.img`
    width: 100%;
    margin: 16px;
    max-width: 220px;
    min-width: 20px;
`

export default function Gifs(props) {
    const data = useStaticQuery(graphql`
        {
            prismic404Page {
                data {
                    gifs {
                        gif {
                            url
                        }
                    }
                    gifs_background {
                        url
                    }
                }
            }
        }
    `)
    const {
        gifs,
        gifs_background: { url: gifsBackground },
    } = data.prismic404Page.data
    return (
        <Container>
            <GifsContainer bg={gifsBackground}>
                <GifRow1>
                    {gifs.slice(0, 3).map(gif => (
                        <Gif key={gif.gif.url} src={gif.gif.url} />
                    ))}
                </GifRow1>
                <GifRow2>
                    {gifs.slice(3).map(gif => (
                        <Gif key={gif.gif.url} src={gif.gif.url} />
                    ))}
                </GifRow2>
            </GifsContainer>
        </Container>
    )
}
