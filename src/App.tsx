
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import ProductPage from "./pages/ProductPage";
import Home from "./pages/Home";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
      <Route path="product" element={<ProductPage />}/>
      </Route>
    </Routes>    
  )    
}

export default App
