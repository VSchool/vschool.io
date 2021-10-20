import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { gray } from '@vschool/lotus'
import Hero from './Hero'
import Footer from '../../Footer'

const PageContainer = styled.div`
  background: ${gray.lighter};
`

export default function CompletionFormIntro() {
    const [page, setPage] = useState(0)

    useEffect(()=>{
        const pageNum = localStorage.getItem('pageNum') || 0
        setPage(pageNum)
    },[])

    return (
        <PageContainer>
           <Hero page={page} setter={setPage} />
           <Footer />
        </PageContainer>
    )
}