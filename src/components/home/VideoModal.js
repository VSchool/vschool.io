import React from "react"
import ReactModal from "react-modal"

ReactModal.setAppElement("#___gatsby")

export default function VideoModal(props) {
    const { show, toggle } = props
    return (
        <ReactModal
            isOpen={show}
            onRequestClose={toggle}
            shouldFocusAfterRender={true}
            portalClassName="portal"
            style={{
                overlay: {
                    backgroundColor: "rgba(0, 0, 0, .90)",
                    zIndex: 7,
                    overflowY: "hidden",
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: "center",
                    position: "fixed",
                    width: "100vw"
                },
                content: {
                    backgroundColor: "transparent",
                    zIndex: 8,
                    width: "100%",
                    padding: 0,
                    left: 0,
                    overflow: "auto",
                    maxWidth: 800,
                    margin: "0 auto",
                    bottom: "none",
                    top: "30%",
                    position: "static"
                },
            }}
        >
            <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                <iframe
                    src="https://player.vimeo.com/video/391329327"
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
        </ReactModal>
    )
}
