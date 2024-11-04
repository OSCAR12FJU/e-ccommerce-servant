import React from "react";

export interface CardSideBarProps{
    imgUrl: string;
    title: string;
    price: number;

}

const ItemProductCart: React.FC<CardSideBarProps> = ({imgUrl, title, price}) =>{
    return(
     <div className="flex items-center justify-between p-4 mb-2">
        <div className="flex items-center gap-3">
            <img src={imgUrl}  alt='dl' className="h-20 w-20 rounded-lg"/>
            <div>
            <div className="rounded-full dark:bg-gray-600 w-full mb-2">
            <a className="text-base font-semibold text-white">{title}</a>
             
            </div>
            <div className="relative flex items-center max-w-[8rem]">
        <button type="button" id="decrement-button" data-input-counter-decrement="quantity-input" className="bg-gray-100 rounded-s-md p-2 h-6 focus:ring-gray-100 focus:ring-2 focus:outline-none">
            <svg className="w-3 h-3 text-[#212529] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M1 1h16"/>
            </svg>
        </button>
        <input type="text" id="quantity-input" data-input-counter data-input-counter-min="1" data-input-counter-max="50" aria-describedby="helper-text-explanation" className="bg-gray-50  border-gray-300 h-6 text-center text-[#212529] text-md font-semibold focus:ring-blue-500 focus:border-blue-500 block w-8 " placeholder="999" value="5" required />

        <button type="button" id="increment-button" data-input-counter-increment="quantity-input" className="bg-gray-100 hover:bg-gray-200  rounded-e-lg p-2 h-6 focus:ring-gray-100 focus:ring-2 focus:outline-none">
            <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="#212529" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 1v16M1 9h16"/>
            </svg>
        </button>
    </div>
            </div>
        </div>
        <div className="mx-4 rounded-full flex flex-col w-12 gap-2 justify-center items-end">
            <div>
            <svg className="icon-inline w-5 h-5 icon-w-12 icon-lg" fill='#ffbe00' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M451.64,121.9c0-26.93-21.83-48.76-48.76-48.76h-48.76v-24.38c0-26.93-21.83-48.76-48.76-48.76h-97.52c-26.93,0-48.76,21.83-48.76,48.76v24.38h-48.76c-26.93,0-48.76,21.83-48.76,48.76v97.52h24.38v243.81c0,26.93,21.83,48.76,48.76,48.76h243.81c26.93,0,48.76-21.83,48.76-48.76V219.43h24.38V121.9ZM207.83,48.76h97.52v24.38h-97.52v-24.38ZM110.3,121.9H402.87v48.76H110.3v-48.76ZM378.49,463.24H134.68V219.43h48.76v219.43h48.76V219.43h48.76v219.43h48.76V219.43h48.76v243.81Z"></path></svg>
            </div>
            <div>
                <span className="text-base text-white font-bold">
                    ${price}
                </span>
            </div>
            
        </div>
    </div> 

    )
}
export default ItemProductCart;
