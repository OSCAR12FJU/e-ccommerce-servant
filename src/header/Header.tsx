import { CartIcon } from "../icons/CartIcon";
import { SoportIcon } from "../icons/SoportIcon";
import SearchBar from "./searchbar/SearchBar";
import ServantLogo from "../files/servant-logo.png"
import { HamburgueIcon } from "../icons/HamburguerIcon";
import { useContext } from "react";
import { MyContext } from "../utils/SectionContext";

export interface HeaderProps{
  onButtonClick: () => void;
  // setAllProduct: () => void;
  // allProduct: number[];
  onClickCart: () => void;
  notHome: boolean;
}

const Header: React.FC<HeaderProps> = ({onButtonClick, notHome, onClickCart}) =>{
  const context = useContext(MyContext)
  if (!context) {
    throw new Error('No se hizo conexiòn');
  }



return(
<>
<nav className="bg-second fixed w-full z-20 top-0 start-0 dark:border-gray-600 z-40 ">
  <div className="max-w-6xl flex flex-wrap items-center justify-between mx-auto p-4 z-40">
  {/* Botón de menú (hamburguesa) */}
    <button onClick={onButtonClick} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden " aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <HamburgueIcon />
    </button>

  <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src={ServantLogo} className="h-8" alt="Flowbite Logo" />
      {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
  </a>
  
  
<div className="flex justify-end md:order-2 md:space-x-6 space-x-2 rtl:space-x-reverse">
  <a className="inline-flex flex-col items-center justify-center dark:hover:bg-gray-800 group dark:border-gray-900 lg:block hidden cursor-pointer">
    <SoportIcon className="h-8 w-8 mx-auto" />  {/* Ajusta el tamaño del ícono */}
    <span className="text-xs text-white font-semibold group-hover:text-white-600">Contactanos</span>
  </a>
  <a 
  className="inline-flex flex-col items-center justify-center  group dark:border-gray-600 cursor-pointer"
  onClick={onClickCart}>
    <CartIcon className="h-8 w-8 mx-auto"/>  {/* Ajusta el tamaño del ícono */}
    <span className="text-xs text-white font-semibold group-hover:text-blue-600 lg:block hidden mt-1">Mis compras</span>
  </a>
</div>

  {!notHome && <div className="items-center justify-center hidden w-full md:flex md:w-auto md:order-1 md:flex-grow">
   <SearchBar />
  </div> }
  
  </div>
</nav>
{!notHome && <div className="items-center justify-center flex max-w-6xl p-4 w-full md:hidden pt-20 bg-second">
   <SearchBar />
  </div> }
{/* <div className="items-center justify-center flex max-w-6xl p-4 w-full md:hidden pt-20 bg-second">
   <SearchBar />
</div> */}
</>
)
}
export default Header;
