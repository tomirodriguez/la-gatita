import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Todes por la gatita</title>
        <meta name="description" content="Platita para la gatita plz" />
      </Head>

      <main className='flex flex-col items-center'>
        <h1 className="font-bold my-5 text-4xl">LA GATITA QUIERE PLATITA</h1>
        <Image className="rounded-full" src={'/imgs/gatita.jpeg'} width={300} height={300} alt='La gatita'/>
      </main>
    </div>
  )
}

export default Home
