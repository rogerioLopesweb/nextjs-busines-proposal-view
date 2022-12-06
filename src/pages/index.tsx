import Head from 'next/head'
import NavMenuLateral from '../components/navMenuLateral'
import PageContent from '../components/pageContent'
export default function Home() {
  return (
    <div className='flex'>
      <Head>
        <title>Proposta</title>
        <meta name="description" content="Proposta comercial" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavMenuLateral/>
      <PageContent/>
    </div>
  )
}
