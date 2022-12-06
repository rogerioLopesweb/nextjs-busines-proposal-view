import { useState } from 'react';
import { BsArrowLeftShort, BsSearch } from 'react-icons/bs';
import { RiDashboardFill } from 'react-icons/ri';
import Image from 'next/image'


const  NavMenuLateral = () =>{
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
    <div className={`bg-dark-purple h-screen p-5 pt-8 ${openMenuSideBar ? "w-72" : "w-20"} duration-300   relative  hidden md:block`}>
      <BsArrowLeftShort 
      className={`bg-white text-dark-purple text-3xl rounded-full  absolute -right-3 top-9 border border-dark-purple cursor-pointer duration-500 ${!openMenuSideBar && "rotate-180"} `}
      onClick={() => setOpenMenuSideBar(!openMenuSideBar)}
      />
      <div className="flex items-center justify-center">
          <Image
          src="/image/logo-white.png"
          alt="yourlogo"
          height={50}
          width={100}
        />
      </div>
        <ul className='pt-2'>
            {
              Menus.map((menu, index) =>(
                <>
                  <li key={index} title={menu.title} className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2">
                  <span className='bg-white text-dark-purple  w-[12px] h-[12px] bg-red rounded-full flex 
  justify-center items-center p-2'>{index+1}</span>
                    <span className={`text-base font-medium flex-1 duration-200  ${!openMenuSideBar && "hidden"}`}>{menu.title}</span>
                  </li>
                </>
              ))
            }
        </ul>
    </div>
      )
} 

export default NavMenuLateral