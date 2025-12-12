import { useState } from "react";

function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
    status: ""
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5199/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product)
    });

    if (response.ok) {
      alert("Product added successfully");
      setProduct({
        name: "",
        description: "",
        price: "",
        quantity: "",
        status: ""
      });
    } else {
      alert("Failed to add product");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "30px" }}>
      <div>
        <label>Name</label>
        <br />
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Description</label>
        <br />
        <input
          type="text"
          name="description"
          value={product.description}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Price</label>
        <br />
        <input
          type="number"
          step="0.01"
          name="price"
          value={product.price}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Quantity</label>
        <br />
        <input
          type="number"
          name="quantity"
          value={product.quantity}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Status</label>
        <br />
        <input
          type="text"
          name="status"
          value={product.status}
          onChange={handleChange}
          required
        />
      </div>

      <br />
      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddProduct;