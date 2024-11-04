import { useContext } from "react";
import { MyContext } from "../utils/SectionContext";
import ItemProductCart from "./ItemProductCart";
// import { Product } from "../utils/API";
import { CardProps } from "./CardProduct";
import NotificationItemCart from "./NotificationItemCart";
// import NotificationItemCart from "./NotificationItemCart";

interface SideBarProps {
    isSidebarOpen1: boolean;
    onButtonClick: () => void;
  }
  

const SideBarCart: React.FC<SideBarProps> = ({isSidebarOpen1, onButtonClick}
) => {
    const context = useContext(MyContext);
    if(!context){
        throw new Error('No se pudó leer el context.');
    }
    const {allProduct} = context;
  
  const calcularTotal = (items: CardProps[]): number =>{
    const total = items.reduce((total, product) => total + product.price, 0);
    const resultTotal = Math.round(total)
    return resultTotal
  }
  const {lastProduct, showNotification, setShowNotification} = context;
  const handleItemCart = () =>{
    setShowNotification(false)
  }

  return (
    <>

    {showNotification && lastProduct &&(
      <NotificationItemCart 
      imgUrl={lastProduct?.imgUrl}
      title={lastProduct?.title}
      price={lastProduct?.price}
      onButtonClick={handleItemCart}
      />
    )}
      <div className={`sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/3 fixed bg-second top-0 right-0 rounded-bl-lg rounded-br-lg  px-5 z-40 transition-transform py-6 max-h-screen overflow-y-auto ${isSidebarOpen1 ? 'translate-x-0' : 'translate-x-full'} `}>
        <h5 
          id="drawer-label"
          className="inline-flex items-center mb-3 text-xl font-bold text-[#ffbe00]">
          Carrito de Compras
        </h5>
        <button
          type="button"
          data-drawer-hide="drawer-form"
          onClick={onButtonClick}
          aria-controls="drawer-form"
          className="bg-[#ffbe00] hover:bg-gray-200 rounded-lg text-md w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="#212529"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>

      <div className="shadow-lg rounded-lg">
        {allProduct.map(({imgUrl, title, price}) =>(
            <ItemProductCart imgUrl={imgUrl} title={title} price={price}/>
        ))}
    </div>
    <div className="flex items-center justify-between p-4 mb-2">
      <div className="flex items-center ">
        <h3 className="text-2xl text-[#ffbe00] font-bold">Total:</h3>
       </div>
    
      <div className="mx-4 rounded-full flex w-12 gap-2 justify-center items-end">
        <div>
          <span className="text-xl text-white font-bold"> ${calcularTotal(allProduct)}.00
          </span>
        </div>
    </div> 

    </div>
    <button className="bg-[#ffbe00] text-[#212529] w-full rounded-md p-1 font-semibold">Pagar Ahora</button>
    </div>

    </>
  );
};

export default SideBarCart;
