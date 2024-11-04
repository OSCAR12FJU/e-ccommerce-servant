import React, { createContext , ReactNode, useEffect, useState } from 'react';
import { CardProps } from '../components/CardProduct';

interface MyContextType {
  allProduct: CardProps[];
  handleProduct: (event:React.MouseEvent<HTMLAnchorElement>, product: CardProps) => void;
  showNotification: boolean;
  lastProduct: CardProps | null;
  setShowNotification: React.Dispatch<React.SetStateAction<boolean>>;

}

// Crea el contexto con un valor predeterminado
export const MyContext = createContext<MyContextType | undefined>(undefined);


export const MyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [allProduct, setAllProduct] = useState<CardProps[]>([]);
    // console.log(setAllProduct);

    const [prevLength, setPrevLength] = useState(allProduct.length);
    const [showNotification, setShowNotification] = useState(false);
    const [lastProduct, setLastProduct] = useState<CardProps | null>(null);

    useEffect(() =>{
      if (allProduct.length > prevLength){
        const newProduct = allProduct[allProduct.length - 1];
        if (newProduct){
          setLastProduct(newProduct)
          setShowNotification(true)

          setTimeout(() => setShowNotification(false), 60000);
        }
    
      }
      setPrevLength(allProduct.length);
    },[allProduct, prevLength]);


    const handleProduct = (event:React.MouseEvent<HTMLAnchorElement>, product: CardProps) =>{
        event.preventDefault();
        setAllProduct(prevProducts => [...prevProducts, product]);
        console.log(allProduct)
     }


  
    return (
      <MyContext.Provider value={{allProduct, handleProduct, showNotification, lastProduct, setShowNotification }}>
        {children}
      </MyContext.Provider>
    );
  };