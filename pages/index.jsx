import Head from 'next/head'
import Image from 'next/image'



export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="web solutions" />
        <meta name="keywords" content="HTML, CSS, JavaScript,react,
                Website design and development,E-commerce development,
                Web application development,Content management systems development,
                Search engine optimization" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>WEB SERVICE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="hero">
          <div className='hero-content'>
            <div>
              <h1>Web Service</h1>
              <p> We are the web solution company that will make your ideas reach everyone in the world </p>
              <div className="buttons">
                <button>Learn More</button>
                <button>Contact us</button>
              </div>
            </div>
            <div className="image-container">
              <img className='hero-image' src="/undraw_web_devices_re_m8sc (2).svg" />
            </div>

          </div>
        </section>
      </main>
    </>
  )
}
