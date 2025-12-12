import { useEffect, useState } from "react";
import EditProduct from "./EditProduct";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);

  const fetchProducts = () => {
    fetch("http://localhost:5199/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) {
      return;
    }

    const response = await fetch(`http://localhost:5199/api/products/${id}`, {
      method: "DELETE"
    });

    if (response.ok) {
      fetchProducts();
    } else {
      alert("Failed to delete product");
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      {editProduct && (
        <EditProduct
          product={editProduct}
          onCancel={() => setEditProduct(null)}
          onSave={() => {
            setEditProduct(null);
            fetchProducts();
          }}
        />
      )}

      <h2>Products</h2>

      <table border="1" cellPadding="10" width="100%">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Status</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr key={p.productId}>
              <td>{p.productId}</td>
              <td>{p.name}</td>
              <td>{p.description}</td>
              <td>{p.price}</td>
              <td>{p.quantity}</td>
              <td>{p.status}</td>
              <td>
                <button onClick={() => setEditProduct(p)}>Edit</button>
              </td>
              <td>
                <button onClick={() => handleDelete(p.productId)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
