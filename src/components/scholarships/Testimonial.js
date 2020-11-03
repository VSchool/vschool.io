import React, { useState } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { green, gray, black, purple, white } from "@vschool/lotus"
import Modal from "react-modal"
import PlayTriangle from "../shared/PlayTriangle"

const Section = styled.section`
    margin-bottom: 96px;
    @media (min-width: 1000px) {
        flex-direction: row-reverse;
        justify-content: center;
        margin-bottom: 160px;
    }
`

const TextContainer = styled.div`
    background-color: ${green.lightest};
    border: 2px solid ${green.dark};
    padding: 48px 24px 128px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: -80px;
    max-width: 600px;

    @media (min-width: 1000px) {
        max-width: 616px;
        padding: 56px 48px;
        padding-left: 72px;
        margin-bottom: -30px;
    }
`

const Quote = styled.p`
    font-family: "aktiv-grotesk-extended";
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    color: ${black};
    margin-bottom: 32px;
    @media (min-width: 1000px) {
        margin-bottom: 68px;
    }
`

const Attribution = styled.p`
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    font-family: "aktiv-grotesk-extended";
    color: ${gray.darker};
`
const ImageContainer = styled.div`
    width: 80%;
    max-width: 400px;
    position: relative;

    @media (min-width: 1000px) {
        max-width: 270px;
        margin-right: -30px;
        margin-top: -30px;
    }
`

const Image = styled.img`
    width: 100%;
    border-bottom: 20px solid ${purple.base};
`

const ImageTextContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const WatchText = styled.p`
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: ${white};
    font-family: "aktiv-grotesk-extended";
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-top: 13px;
`

Modal.setAppElement("#___gatsby")

export default function Testimonial() {
    const [modalOpen, setModalOpen] = useState(false)
    function openModal() {
        setModalOpen(true)
    }

    function closeModal() {
        setModalOpen(false)
    }

    const data = useStaticQuery(graphql`
        {
            prismicScholarshipsIntroPage {
                data {
                    testimonial_text {
                        text
                    }
                    testimonial_attribution {
                        text
                    }
                    testimonial_image {
                        alt
                        url
                    }
                    testimonial_video_link {
                        url
                    }
                }
            }
        }
    `)

    const {
        testimonial_text: { text: quote },
        testimonial_attribution: { text: attribution },
        testimonial_image: { url: imageUrl, alt: imageAlt },
        testimonial_video_link: { url: videoUrl },
    } = data.prismicScholarshipsIntroPage.data

    return (
        <Section>
            <Modal
                isOpen={modalOpen}
                onRequestClose={closeModal}
                shouldFocusAfterRender={true}
                style={{
                    overlay: {
                        backgroundColor: "rgba(0, 0, 0, .90)",
                        zIndex: 7,
                        overflowY: "hidden",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "fixed",
                        width: "100vw",
                    },
                    content: {
                        zIndex: 8,
                        width: "100%",
                        padding: 0,
                        overflow: "auto",
                        maxWidth: 800,
                        position: "static",
                    },
                }}
            >
                <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                    <iframe
                        src={`${videoUrl}?autoplay=1`}
                        title="Alumni Testimonial"
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                        }}
                        frameBorder="0"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                    ></iframe>
                </div>
            </Modal>
            <TextContainer>
                <Quote>{quote}</Quote>
                <Attribution>{attribution}</Attribution>
            </TextContainer>
            <ImageContainer>
                <Image src={imageUrl} alt={imageAlt} />
                <ImageTextContainer onClick={openModal}>
                    <PlayTriangle />
                    <WatchText>Watch video</WatchText>
                </ImageTextContainer>
            </ImageContainer>
        </Section>
    )
}
