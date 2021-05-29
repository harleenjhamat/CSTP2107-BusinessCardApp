import Navbar from '../components/Navbar'
import Card from '../components/Card'
import AboutUs from '../components/AboutUs'
import Footer from '../components/Footer'
import Instructions from '../components/Instruction'
import { Fragment } from 'react'
import Head from 'next/head'

function Home () {
  return (
    <Fragment>
      <Head>
        <title>CyberCard</title>
        <meta name='description' content='Home Page' />
      </Head>
      <Navbar />
      <Card />
      <Instructions />
      <AboutUs />
      <Footer />
    </Fragment>
  )
}
export default Home
