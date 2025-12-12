import { useState } from "react";

function EditProduct({ product, onCancel, onSave }) {
  const [formData, setFormData] = useState({
    productId: product.productId,
    name: product.name,
    description: product.description,
    price: product.price,
    quantity: product.quantity,
    status: product.status
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      `http://localhost:5199/api/products/${formData.productId}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      }
    );

    if (response.ok) {
      alert("Product updated successfully");
      onSave();
    } else {
      alert("Failed to update product");
    }
  };

  return (
    <div style={{ border: "1px solid black", padding: "15px", marginBottom: "20px" }}>
      <h3>Edit Product (ID: {formData.productId})</h3>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <br />
          <input
            type="text"
            name="name"
            value={formData.name}
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
            value={formData.description}
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
            value={formData.price}
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
            value={formData.quantity}
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
            value={formData.status}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <button type="submit">Save Changes</button>
        <button type="button" onClick={onCancel} style={{ marginLeft: "10px" }}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default EditProduct;
