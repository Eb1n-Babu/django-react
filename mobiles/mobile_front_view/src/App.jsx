import React, { useEffect, useState } from "react";

function ProductsTable() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/items/") // Django REST API endpoint
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div style={{ padding: "20px" }}>
            <h2>Products</h2>
            <table
                border="1"
                style={{
                    width: "90%",
                    margin: "auto",
                    borderCollapse: "collapse",
                    textAlign: "left",
                }}
            >
                <thead>
                <tr style={{ backgroundColor: "#f2f2f2" }}>
                    <th>ID</th>
                    <th>Brand</th>
                    <th>Model</th>
                    <th>Description</th>
                    <th>Price (₹)</th>
                </tr>
                </thead>
                <tbody>
                {products.map((product) => (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.brand}</td>
                        <td>{product.model}</td>
                        <td>{product.description}</td>
                        <td>{product.price}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProductsTable;