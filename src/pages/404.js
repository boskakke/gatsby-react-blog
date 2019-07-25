import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const NotFound = () => {
    return (
        <Layout>
            <Head title="404" />
            <h1>Siden ikke fundet.</h1>
            <Link to="/">Til forsiden</Link>
        </Layout>
    )
}

export default NotFound