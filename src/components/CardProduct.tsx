import { useContext } from "react";
import { CartCardIcon } from "../icons/CartCardIcon";
import { EyeCardIcon } from "../icons/EyeCardIcon";
import { MyContext } from "../utils/SectionContext";

export interface CardProps {
    imgUrl: string; 
    title: string; 
    price: number; 
    description?: string;
    category?: string;
  }

export const CardProduct:React.FC<CardProps> = ({imgUrl, title, price, description, category}) =>{

    const product = {imgUrl, title, price, description, category};
    const context = useContext(MyContext);
    if(!context){
        throw new Error('No se pudó leer el context.');
    }

    const { handleProduct} = context;

    return(
        <div className=" w-full max-w-sm bg-white rounded-lg flex flex-col items-center group cursor-pointer hover:border-b-0 md:px-5 px-3 hover:shadow-lg rounded">
         <img className="md:px-4 px-0 rounded-t-lg max-h-card pt-4 h-48 object-cover" src={imgUrl} alt="product image" />
        
        <div className="flex flex-col items-center pb-4">
            <h4 className="text-md font-semibold  text-gray-900 leading-tight dark:text-white mb-3">{title}</h4>
            <div className="flex justify-center items-center">   
                <span className="text-3xl font-bold text-gray-900 mb-2">${price}</span>
                <span className="md:text-1xl text-sm font-medium text-[#41BD7D] mb-2 px-2">%{Math.floor(Math.random()*(50-10 +1))+10} OFF</span>
            </div> 
        </div>
        <div className="flex justify-center md:opacity-0 group-hover:opacity-100  opacity-100 transition-opacity duration-300 rounded md:px-5 px-3 pb-2">
            <a  className="text-white bg-[#212529] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover
            :bg-blue-700 dark:focus:ring-blue-800" onClick={(e) => handleProduct(e, product)} href="#">
                <CartCardIcon className="w-3.5 h-3.5 me-2"/>
                Comprar
                </a>
                <a className="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 border border-gray-200 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center me-2 ">
                <EyeCardIcon className="w-4 h-4 me-2"/>
                Ver
                </a>
            </div>
    </div> 
    )
}
export default CardProduct;

