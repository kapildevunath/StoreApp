import React from "react";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Store Manager</h1>

      <AddProduct />
      <ProductList />
    </div>
  );
}

export default App;
