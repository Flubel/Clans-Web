import Head from 'next/head'
import Navbar from 'contents/navbar'
import Footer from '@/contents/footer'
import Hero from '@/contents/hero'
import Charts from '@/contents/charts'

export default function Home() {

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>Clans | Create Simple Clans in Minecraft</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicnnmnfln.png" />


        <link
          rel="preload"
          href="/assets/GeistVariableVF.ttf"
          as="font"
          type="font/ttf"
          crossorigin="anonymous"
        />

        <meta name="google-site-verification" content="cFGjZz8Yz7NRtTlb--YvK4UfXhn4CqhJUXMrBxYz34M" />


        {/* Open Graph Metadata */}
        <meta property="og:title" content="FlubelMc" />
        <meta property="og:description" content="Minecraft Made Fun and Competitive" />
        <meta property="og:image" content="/assets/favicnflb1.png" />
        <meta property="og:url" content="https://web.flubelmc.xyz" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="FlubelMc" />

        {/* Twitter Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FlubelMc" />
        <meta name="twitter:description" content="Minecraft Made Fun and Competitive" />
        <meta name="twitter:image" content="/assets/socialbanner.png" />
        <meta name="twitter:site" content="@flubelofficial" />


        {/* Google Metadata */}
        <link rel="canonical" href="https://web.flubelmc.xyz" />


        <meta name="apple-mobile-web-app-title" content="FlubelMc"></meta>
        <link rel="apple-touch-icon" sizes="467x467" href="/assets/favicnflb1.png" />


        {/* JSON-LD for Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "FlubelMc",
            "description": "Minecraft Made Fun and Competitive",
            "url": "https://web.flubelmc.xyz",
            "image": "https://web.flubelmc.xyz/assets/socialbanner.png",
          })}
        </script>



        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Flubel",
            "url": "https://web.flubelmc.xyz",
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://web.flubelmc.xyz"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Flubel",
                  "item": "https://www.flubel.com"
                }
              ]
            }
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Store",
            "url": "https://web.flubelmc.xyz/store",
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://web.flubelmc.xyz/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Store",
                  "item": "https://web.flubelmc.xyz/store"
                }
              ]
            }
          })}
        </script>

      </Head>
      <main>
        <Navbar />
        <Hero />
        <Charts />
        <Footer />
      </main>
    </>
  )
}
