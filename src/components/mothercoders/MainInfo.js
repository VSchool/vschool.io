import React from "react"
import styled from "styled-components"

const Img = styled.img`
    width: 100%;
`

export default function MainInfo() {
    return (
        <div>
            <Img
                src="https://images.prismic.io/vschool/fe16e231-d958-4fa9-b172-c1ab1d3603f1_Hero+Img.png?auto=format%2Ccompress&fit=max&q=50"
                alt=""
            />
            <h2>
                Bootcamp Primer Will Prepare You With the Basics of Web
                Development
            </h2>
        </div>
    )
}
