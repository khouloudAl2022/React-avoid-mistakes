import { useState } from "react";

const Product = () => {
  const [products, setProducts] = useState([
    { id: 1, title: "blue tshirt", quantity: 1 },
    { id: 2, title: "black bag", quantity: 1 },
    { id: 3, title: "red dress", quantity: 1 },
  ]);

  const [selectedId, setselectedId] = useState(null);
  // const [selectedProduct,setSelectedProduct]=useState({})
  const selectedProduct = products.find((prod) => prod.id === selectedId);

  const increment = (id) => {
    setProducts((prev) => {
      return prev.map((product) => {
        if (id === product.id) {
          return { ...product, quantity: product.quantity + 1 };
        } else {
          return product;
        }
      });
    });
  };
  const handleChoose = (id) => {
    setselectedId(id);
  };

  // const handleChoose = (id) => {
  //   const product=products.find(prod=>prod.id===id)
  //   setSelectedProduct(product)
  // };

  return (
    <div>
      <h1>All products</h1>
      {products.map((product) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
          key={product.id}
        >
          <span style={{ display: "flex", alignItems: "center" }}>
            <h3>{product.title}</h3>
            <button onClick={() => handleChoose(product.id)}>choose</button>
          </span>

          <div>
            <button onClick={() => increment(product.id)}> + </button>
            <span>{product.quantity}</span>
            <button>-</button>
          </div>
        </div>
      ))}
      <h2 style={{ color: "blue" }}>Select Product</h2>
      <div>select Product</div>
      <div>{selectedProduct?.title}</div>
      {/*without ?  but the ? operator If selectedProduct is null or undefined, instead of causing an error, it will gracefully return undefined. This helps prevent "Cannot read property 'quantity' of null" or "Cannot read property 'quantity' of undefined" errors. */}
      <div>{selectedProduct?.quantity}</div>
    </div>
  );
};

export default Product;
