import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'


const IndexPage = () => {
    return (
        <Layout>
            <Head title="Velkommen"></Head>
            <h1>Hello.</h1>
            <h2>Dette er et Gatsby-site!</h2>
        </Layout>   
    )
}

export default IndexPage