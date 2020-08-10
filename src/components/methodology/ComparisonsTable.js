import React, {Fragment} from "react"
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
    border-bottom: 1px solid ${gray.darker};

    @media (min-width: 800px) {
        grid-template-columns: 75px 200px 100px 100px 100px 100px;
    }

    @media (min-width: 1200px) {
        grid-template-columns: 75px 225px 150px 150px 150px 150px;
    }
`

const TableCell = styled.div`
    width: 100%;
    max-width: 75px;
    border: 1px solid ${gray.darker};
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: ${({ right }) =>
        right ? `2px solid ${gray.darker}` : `1px solid ${gray.darker}`};
    border-top: ${({ i }) =>
        i === 0 ? `2px solid ${gray.darker}` : `1px solid ${gray.darker}`};

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
    border-left: 1px solid ${gray.darker};
`

const Type = styled.h3`
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
            {comparisons.map((item, i) => (
                <Fragment key={item.icon.url}>
                    <TableCell i={i}>
                        <Img src={item.icon.url} />
                    </TableCell>
                    <TableCellHidden i={i}>
                        <Type>{item.type.text}</Type>
                    </TableCellHidden>
                    <TableCell i={i}>
                        <Icon src={getIcon(item.skills.text)} />
                    </TableCell>
                    <TableCell i={i}>
                        <Icon src={getIcon(item.theory.text)} />
                    </TableCell>
                    <TableCell i={i}>
                        <Icon src={getIcon(item.experience.text)} />
                    </TableCell>
                    <TableCell right i={i}>
                        <Icon src={getIcon(item.job.text)} />
                    </TableCell>
                </Fragment>
            ))}
        </FlexTable>
    )
}
