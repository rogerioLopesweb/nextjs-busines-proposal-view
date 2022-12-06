import { useState } from 'react';
import Image from 'next/image'


const  NavMenu = () =>{
    const [openMenuSideBar, setOpenMenuSideBar] = useState(true);
    const Menus = [
        {title: "Introdução", },
        {title: "Projeto",  },
        {title: "Processo e Prazos",  },
        {title: "Estudo de caso", },
        {title: "Seu Investimento", },
        {title: "Nossa Garantia",  },
        {title: "Aprovar proposta", },
        {title: "Termor e Condições",},
      ];

      return (
        <>
          <nav className="flex items-center justify-between flex-wrap bg-blue-900 p-6 rounded-lg block md:hidden lg:hidden">
              <div className="flex items-center flex-shrink-0 text-white mr-6">
              <Image
                  src="/image/logo-white.png"
                  alt="yourlogo"
                  height={50}
                  width={100}
                />
              </div>
              <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white" onClick={() => setOpenMenuSideBar(!openMenuSideBar)}>
                  <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
              </div>
              <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto  ${!openMenuSideBar && "hidden"}`}>
                <ul className='pt-2'>
                    {
                      Menus.map((menu, index) =>(
                        <>
                          <li key={index} title={menu.title} className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2">
                          <span className='bg-white text-dark-purple  w-[12px] h-[12px] bg-red rounded-full flex 
          justify-center items-center p-2'>{index+1}</span>
                            <span className={`text-base font-medium flex-1 duration-200 `}>{menu.title}</span>
                          </li>
                        </>
                      ))
                    }
                </ul>
              </div>
          </nav>
        </>
      )
} 

export default NavMenu