import { CartIcon } from "../../icons/CartIcon";
import { SoportIcon } from "../../icons/SoportIcon";

const NavBarSidebar = () =>{
    return(
    <>
    <br></br>
    <ul className="space-y-2 font-medium">
         <li >
            <button type="button" className="flex items-center w-full p-2 text-md font-semibold text-white transition duration-75 group border-b border-gray-600" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                  <CartIcon className="text-[#ffbe00] w-7 h-7" />
                  <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Productos</span>
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
            </button>
            <ul id="dropdown-example" className="hidden py-2 space-y-2">
                  <li>
                     <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group dark:hover:bg-gray-700">Iphone</a>
                  </li>
            </ul>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-white border-b border-gray-600 text-md group font-semibold">
                <SoportIcon className="w-6 h-6"/>
               <span className="ms-3">Contactanos</span>
            </a>
         </li>
      </ul>
    </>
    )
}

export default NavBarSidebar;