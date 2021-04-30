import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import GiBillPage from '../../components/gi-bill'

export default function GiBill() {
    return (
        <Layout>
            <SEO title={'GI Bill Coding Bootcamp'} />
            <GiBillPage />
        </Layout>
    )
}
