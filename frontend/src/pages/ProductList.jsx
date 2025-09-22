import { useEffect, useState } from "react";
import { getProducts, addProduct } from "../services/productService";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: "", price: "" });

  // Load products on component mount
  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const response = await getProducts();
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleAddProduct = async () => {
    if (!newProduct.name || !newProduct.price) return;
    try {
      await addProduct(newProduct);
      setNewProduct({ name: "", price: "" });
      loadProducts(); // refresh list
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Products</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - ₹{p.price}
          </li>
        ))}
      </ul>

      <h3>Add New Product</h3>
      <input
        type="text"
        placeholder="Name"
        value={newProduct.name}
        onChange={(e) =>
          setNewProduct({ ...newProduct, name: e.target.value })
        }
      />
      <input
        type="number"
        placeholder="Price"
        value={newProduct.price}
        onChange={(e) =>
          setNewProduct({ ...newProduct, price: e.target.value })
        }
      />
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
}
