import Head from 'next/head'
import Navbar from 'contents/navbar'
import Footer from '@/contents/footer'
import Hero from '@/contents/hero'
import Charts from '@/contents/charts'
import DownloadPage from '@/contents/download'

export default function Home() {

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>Download Clans | Create Simple Clans in Minecraft</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicnnmnfln.png" />


        <link
          rel="preload"
          href="/assets/GeistVariableVF.ttf"
          as="font"
          type="font/ttf"
          crossorigin="anonymous"
        />


      </Head>
      <main>
        <Navbar />
        <DownloadPage />
        <Footer />
      </main>
    </>
  )
}
