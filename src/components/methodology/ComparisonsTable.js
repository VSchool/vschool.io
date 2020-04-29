import React from "react"
import styled from "styled-components"
import { gray } from "@vschool/lotus"
import yesIcon from "../../images/icons/yes.png"
import noIcon from "../../images/icons/no.png"
import naIcon from "../../images/icons/na.png"


const tableHeads = ["Skills", "Theory", "Experience", "Job"]

function getIcon(label) {
    switch (label) {
        case "yes":
            return yesIcon
        case "no":
            return noIcon
        case "na":
            return naIcon
        default:
            return ""
    }
}

const FlexTable = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);

    @media (min-width: 800px) {
        grid-template-columns: 75px 200px 100px 100px 100px 100px;
    }
`

const TableCell = styled.div`
    width: 100%;
    max-width: 75px;
    border: 1px solid ${gray.darker};
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 800px) {
        max-width: 100%;
    }
`

const TableCellHidden = styled(TableCell)`
    display: none;

    @media (min-width: 800px) {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
`

const HeadsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column: 2 / -1;

    @media (min-width: 800px) {
        font-size: 10px;
        grid-column: 3 / -1;
    }
`

const Head = styled.div`
    font-size: 8px;
    font-family: "aktiv-grotesk-extended";
    letter-spacing: 0.5px;
    color: ${gray.darker};
    font-weight: 800;
    text-align: center;
    margin-bottom: 8px;
    width: 100%;

    @media (min-width: 800px) {
        font-size: 10px;
    }
`

const Img = styled.img`
    width: 100%;
`

const Type = styled.h6`
    font-size: 20px;
    font-family: "aktiv-grotesk";
    text-align: right;
    color: ${gray.darker};

    @media (min-width: 800px) {
        margin-right: 8px;
    }
`

const Icon = styled.img`
    width: 100%;
    max-width: 32px;
    padding: 4px;
`

export default function ComparisonsTable(props) {
    const { comparisons } = props
    const tablehead = tableHeads.map((text, i) => (
        <Head key={i + text}>{text}</Head>
    ))
    return (
        <FlexTable>
            <HeadsContainer>{tablehead}</HeadsContainer>
            {comparisons.map(item => (
                <>
                    <TableCell>
                        <Img src={item.icon.url} />
                    </TableCell>
                    <TableCellHidden>
                        <Type>{item.type.text}</Type>
                    </TableCellHidden>
                    <TableCell>
                        <Icon src={getIcon(item.skills.text)} />
                    </TableCell>
                    <TableCell>
                        <Icon src={getIcon(item.theory.text)} />
                    </TableCell>
                    <TableCell>
                        <Icon src={getIcon(item.experience.text)} />
                    </TableCell>
                    <TableCell>
                        <Icon src={getIcon(item.job.text)} />
                    </TableCell>
                </>
            ))}
        </FlexTable>
    )
}
