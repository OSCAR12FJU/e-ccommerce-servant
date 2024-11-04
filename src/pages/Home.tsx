import { useEffect, useState } from "react";
import { SectionContainer } from "../components/SectionContainer";
import CarrouselProducts from "./CarrouselProducts";
import { getProducts, getProductsCategory, Product } from "../utils/API";

  // const products = [
  //   {
  //    imgUrl: 'https://http2.mlstatic.com/D_Q_NP_2X_883442-MLA79886224354_102024-V.webp',
  //    title: 'Apple Watch Series 7 GPS',
  //    price: 599,
  //    discount: 30,
  //    link: "",
  //   },
  //   {
  //    imgUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_709550-MLA42822264545_072020-F.webp',
  //    title: 'Ventilador Turbo Semi ',
  //    price: 50.990,
  //    discount: 15,
  //    link: "",
  //   },
  //   {
  //    imgUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_764244-MLA44182271826_112020-F.webp',
  //    title: 'Paragüas Corto Reforzado',
  //    price: 11.782,
  //    discount: 10,
  //    link: "",
  //   },
  //   {
  //    imgUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_651876-MLU78555227057_082024-F.webp',
  //    title: 'ATaladro Inalambrico Pektra',
  //    price: 87.637,
  //    discount: 48,
  //    link: "",
  //   },
  //  ];



const Home = () =>{
  const [productsDesc, setProductsDesc] = useState<Product[]>([]);
  const [productsElectr, setProductsElectr] = useState<Product[]>([]);
  const [productsWomen, setProductsWomen] = useState<Product[]>([]);
  
  useEffect(() =>{
    const fetchProducts =  async () =>{
      try{
        const data:Product[] = await getProducts();
        setProductsDesc(data || [])
        console.log(data);
      }catch(error){
        console.error('Error fetching products:', error)
      }
    };
    fetchProducts();
  }, [])
  useEffect(() =>{
    const fetchProducts =  async () =>{
      try{
        const data:Product[] = await getProductsCategory('electronics');
        setProductsElectr(data || [])
        console.log(data);
      }catch(error){
        console.error('Error fetching products:', error)
      }
    };
    fetchProducts();
  }, [])
  useEffect(() =>{
    const fetchProducts =  async () =>{
      try{
        const data:Product[] = await getProductsCategory("women's clothing");
        setProductsWomen(data || [])
        console.log(data);
      }catch(error){
        console.error('Error fetching products:', error)
      }
    };
    fetchProducts();
  }, [])

    
    return(
    <SectionContainer className="py-10 md:pt-10">
        <CarrouselProducts products={productsDesc} title="Productos Destacados"/>
        <CarrouselProducts products={productsElectr} title="Electronica"/>
        <CarrouselProducts products={productsWomen} title="Ropa de Mujer"/>
        {/* <SideBarCart /> */}
    </SectionContainer>

    )

}
export default Home;