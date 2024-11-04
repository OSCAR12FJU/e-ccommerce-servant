

export interface NotificationItemCart{
    imgUrl: string;
    title: string;
    price: number;
    onButtonClick: () => void;

}

const NotificationItemCart: React.FC<NotificationItemCart> = ({title, price, imgUrl, onButtonClick}) =>{

    return(
        <>
        <div className={`fixed bg-second top-0 right-0 rounded-bl-lg rounded-br-lg px-3 z-40 transition-transform py-4 duration-500 ease-in-out`}>
        <button
          type="button"
          data-drawer-hide="drawer-form"
          onClick={onButtonClick}
          aria-controls="drawer-form"
          className="rounded-lg text-md w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="#ffbe00"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        {/* -------------------------------- */}
        <div className="flex items-center justify-center p-4">
        <div className="flex items-center gap-1">
            <img src={imgUrl}  alt='dl' className="h-20 w-20 rounded-lg"/>
        </div>
        <div className="flex justify-center items-start flex-col text-start ml-3">
          <a className="text-base font-semibold text-white">{title}</a>
          <span className="text-lg text-[#ffbe00] font-bold">
           ${price}</span>
          <span className="text-sm font-bold text-white ">Agregado correctamente al carrito!</span>
             
         </div>
         </div></div>
        </>

    )
}
export default NotificationItemCart;
