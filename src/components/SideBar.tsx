import ServantLogo from '../files/servant-logo.png';
import NavBarSidebar from "../header/navbar/NavBarSidebar";

interface SideBarProps {
  isSidebarOpen1: boolean;
  onButtonClick: () => void;
}

const SideBar: React.FC<SideBarProps> = ({onButtonClick, isSidebarOpen1}) =>{
  console.log(isSidebarOpen1)
    return(
     <>
<div className= {`fixed bg-second top-0 left-0 h-screen w-64 px-5 z-40 transition-transform pt-6 ${isSidebarOpen1 ? 'translate-x-0' : '-translate-x-full'}`}>

    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src={ServantLogo} className="h-7 " alt="ServantLogo" />
  </a>
  
    <button
     type="button" 
     onClick={onButtonClick}
     data-drawer-hide="drawer-body-scrolling" aria-controls="drawer-body-scrolling" className="text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white mt-3" >
      <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
         <path stroke="#ffbe00" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
      </svg>
      <span className="sr-only">Close menu</span>
   </button>
  <div className="py-4 overflow-y-auto">
    <NavBarSidebar />
   </div>
</div>

     </>

        
    )

}

export default SideBar; 
