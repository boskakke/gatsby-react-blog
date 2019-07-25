import React from 'react'


import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Kontakt" />
            <h1>Contact.</h1>
            <p>Bo Skakke, Horsensgade 6 1.tv, 2100 København Ø.</p>
            <p>Link to <a href="https://twitter.com">Twitter</a></p>
        </Layout>
    )
}

export default ContactPage