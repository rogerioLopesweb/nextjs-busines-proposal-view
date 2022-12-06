import { useState } from 'react';
import NavMenu from '../components/navMenu'

const  PageContent = () =>{
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
           <div className='p-7 w-full bg-slate-100'>
            <NavMenu/>
             <div className='bg-slate-50 p-5 border-slate-500 rounded-lg shadow-sm mt-5'>
               <h3 className="text-lg border-b">Introdução</h3>
               <div className='mt-5 font-serif'>
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae inventore, dolor, vel consequatur vitae ipsum vero exercitationem, possimus ex libero odit quas totam aut maiores aliquam? Illum dolores rerum consequuntur.
                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto nulla impedit, temporibus esse nesciunt consectetur tenetur cum dolorem voluptatibus deserunt ratione cupiditate facere iste excepturi porro numquam maxime. Rerum, recusandae!
                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique fuga numquam ea expedita! Blanditiis, magni consectetur enim eligendi amet officiis ipsa cupiditate error beatae facere similique, quas provident deleniti harum.
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima error dolore veniam in est similique, rem non dolorum magnam. Nulla, voluptates itaque? Rerum enim temporibus quaerat harum nulla sint minima?
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas maxime id modi necessitatibus voluptates sed beatae exercitationem blanditiis explicabo inventore sint eius velit quasi esse ipsa, officiis fuga sit quos?
               </div>
             </div>
         </div>
      )
} 

export default PageContent