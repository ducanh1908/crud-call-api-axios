import "./App.css";
import { useEffect, useState } from "react";
import ListStudent from "./pages/students/show-list";
import { Routes, Route } from "react-router-dom";
import CreateStudents from "./pages/students/create";
import UpdateStudent from "./pages/students/update";
function App() {
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const param = {
  //       _limit: 10,
  //     };
  //     const productList = await productApi.getAll(param);

  //     console.log(productList);
  //   };
  //   fetchProducts();
  // }, []);
  // const [products, setProducts] = useState([]);

  // const getProducts = async () => {
  //   const params = {
  //     _limit: 10,
  //   };
  //   await productApi.getAll(params).then((product) => {
  //     setProducts(product);
  //     console.log(product);
  //   });
  // };

  return (
    <div className="App">
      <div>
        {/* <>
          <p>list product </p>
          <button onClick={getProducts}>get</button>
          {products.map((product) => (
            <div key={product.id}>
              {product.name}|| {product.originalPrice}
            </div>
          ))}
        </> */}
        <Routes>
          <Route path="/" element={<ListStudent />} />
          <Route path="/students" element={<CreateStudents />} />
          <Route path="/students/:id" element={<UpdateStudent />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
