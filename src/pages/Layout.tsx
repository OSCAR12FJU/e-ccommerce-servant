import  { useState } from "react";
// import { Outlet, useLocation } from "react-router-dom";
// import { SectionContainer } from "../components/SectionContainer";
import Carrousel from "./Carrousel";
import Header from "../header/Header";
// import CarrouselProducts from "./CarrouselProducts";
import Footer from "../footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import SideBar from "../components/SideBar";
import SideBarCart from "../components/SideBarCart";
import { MyProvider } from "../utils/SectionContext";


const Layout = () =>{
  const location = useLocation();

  const notHome = location.pathname.startsWith('/product');

 const [isSidebarOpen1, setIsSidebarOpen1] = useState(false)

//  const [total, setTotal] = useState(0);

   const toggleSidebar = () =>{
      setIsSidebarOpen1(!isSidebarOpen1);
   }
    const[isSidebarOpen, setIsSideBarOpen] = useState(false)

    const toggleSidebarCart = () =>{
        setIsSideBarOpen(!isSidebarOpen);
     }


  return(
    <>
      <MyProvider>
      <Header onButtonClick = {toggleSidebar} notHome= {notHome} onClickCart={toggleSidebarCart}/>
      <SideBar onButtonClick={toggleSidebar} isSidebarOpen1={isSidebarOpen1}/>
      {!notHome && <Carrousel />}
      <SideBarCart onButtonClick={toggleSidebarCart} isSidebarOpen1={isSidebarOpen}/>

      <main className="px-4">
        <Outlet />
      </main>
      <Footer />
      </MyProvider>
    </>

  )
    

}

export default Layout;