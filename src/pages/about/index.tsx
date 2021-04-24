import React from 'react'
import Head from 'next/head'
import Header from '../../components/Header'

import { Container, Main, Footer } from '../../styles/pages/home'

export default function About() {
    return (
		<>
			<Head>
				<title>About | My Inventory&trade;</title>
			</Head>
			<Container>
				<Header pathA="home" pathB="login" />
                <Main>
                    <h1>About</h1>
                </Main>
				<Footer>
				</Footer>
			</Container>
		</>
	)
}
