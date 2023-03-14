import Head from 'next/head'
import Image from 'next/image'



export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <section className="hero">
          <div className='hero-content'>
            <h1>Web Service</h1>
            <p> We are the web solution company that will make your ideas reach everyone in the world </p>
            <div className="buttons">
              <button>Learn More</button>
              <button>Contact us</button>
            </div>
            <div className="image-container">
              <img className='hero-image' src="/undraw_web_devices_re_m8sc (1).svg" />
            </div>

          </div>
        </section>
      </body>
    </>
  )
}