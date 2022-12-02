import Head from 'next/head'
import { useState } from 'react';
import { BsArrowLeftShort, BsSearch } from 'react-icons/bs';
import { RiDashboardFill } from 'react-icons/ri';
import Image from 'next/image'

export default function Home() {
  const [openMenuSideBar, setOpenMenuSideBar] = useState(true);
  const Menus = [
    {title: "Introdução", icon : <RiDashboardFill/>},
    {title: "Projeto", icon : <RiDashboardFill/> },
    {title: "Processo e Prazos", icon : <RiDashboardFill/>, spacing: true },
    {title: "Estudo de caso", icon : <RiDashboardFill/>},
    {title: "Seu Investimento", icon : <RiDashboardFill/> },
    {title: "Nossa Garantia", icon : <RiDashboardFill/> },
    {title: "Aprovar proposta", icon : <RiDashboardFill/> },
    {title: "Termor e Condições", icon : <RiDashboardFill/> },
  ]
  return (
    <div className='flex'>
      <Head>
        <title>Proposta</title>
        <meta name="description" content="Proposta comercial" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
      
      </div>
      <div className={`bg-dark-purple h-screen p-5 pt-8 ${openMenuSideBar ? "w-72" : "w-20"} duration-300  relative`}>
      <BsArrowLeftShort 
      className={`bg-white text-dark-purple text-3xl rounded-full  absolute -right-3 top-9 border border-dark-purple cursor-pointer duration-500 ${!openMenuSideBar && "rotate-180"} `}
      onClick={() => setOpenMenuSideBar(!openMenuSideBar)}
      />
      <Image
      src="/image/logo-white.png"
      alt="yourlogo"
      height={50}
      width={100}
    />
      <ul className='pt-2'>
          {
            Menus.map((menu, index) =>(
              <>
                <li key={index} title={menu.title} className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2">
                <span className='bg-white text-dark-purple  w-[12px] h-[12px] bg-red rounded-full flex 
 justify-center items-center'>{index+1}</span>
                  <span className={`text-base font-medium flex-1 duration-200  ${!openMenuSideBar && "hidden"}`}>{menu.title}</span>
                </li>
              </>
            ))
          }
      </ul>
      </div>
      <div className='p-7'>
        <h1 className='text-2xl font-semibold'>Home page</h1>
      </div>
    </div>
  )
}
