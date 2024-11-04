import AcordionProduct from "../components/AcordionProduct";
import CarrouselImg from "../components/CardImgProduct";
import { SectionContainer } from "../components/SectionContainer";
import { imgMiniature, acordionData } from "../utils/API";


const ProductPage = () =>{

    return(
  <SectionContainer>
  <div className="mx-auto md:mt-24 mt-20 px-4 py-8">
    <div className="flex flex-wrap -mx-4">
      <div className="w-full md:w-2/3 px-4 mb-8">
        <div className="flex gap-2">
          
          <div className="w-64 md:flex hidden flex-col gap-4 py-4 justify-center md:justify-start">
            {imgMiniature.map(({ imgUrl, alt }) => (
              <img 
                src={imgUrl} 
                alt={alt} 
                className="w-24 h-24 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300" 
              />
            ))}
          </div>
          <div className="flex-grow">
            <img 
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080" 
              alt="Product" 
              className="w-full h-auto rounded-lg shadow-md mb-4" 
              id="mainImage" 
            />
          </div>
          
        </div>
        <div className="md:hidden flex gap-4 py-4 justify-center">
            <CarrouselImg img={imgMiniature}/>
          </div>
 
            <div className="mt-4">
          {acordionData.map(({title, description}) =>(
          <AcordionProduct title={title} description={description}/>))}
  
            </div>
        </div>

      {/* <!-- Product Details --> */}
      <div className="w-full md:w-1/3 bg-[#F9FAFB] p-4 rounded-lg border md:pr-10 pr-20">
        <h2 className="text-3xl font-bold mb-2">Premium Wireless Headphones</h2>
        <p className="text-gray-600 mb-4">SKU: WH1000XM4</p>
        <div className="mb-4 flex justify-between">
         <div className="">
          <span className="text-4xl font-bold mr-2">$349.99</span>
          <span className="text-gray-500 line-through">$399.99</span>
          </div>
          <div className="mb-6">
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">Disponibles:</label>
          <input type="number" id="quantity" name="quantity" min="1" value="1"
                        className="w-12 text-center rounded-md border-gray-300  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </div>
        </div>
        <div className="flex justify-between mb-6">
          <button
           className="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"stroke-width="1.5" stroke="currentColor" className="size-6">
             <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
            Add to Cart
            </button>
                    
          <a className=" flex gap-2 items-center py-2 rounded-md ">
            <span className="bg-red-100 text-red-800 text-xs font-medium  px-2.5 py-0.5 rounded gap-2">Quedan solo 5</span>
          </a>
        </div>
        <hr className="text-gray-600"></hr>
      </div>
    </div>
  </div>
  </SectionContainer>

    )
}

export default ProductPage;