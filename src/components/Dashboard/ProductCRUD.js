import { useEffect, useState } from 'react';
import { getAllProducts, createProduct, updateProduct, deleteProduct } from '../../services/productService';

const ProductCRUD = () => {
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState({ name: '', price: '' });

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const result = await getAllProducts();
        setProducts(result.data);
    };

    const handleCreate = async () => {
        await createProduct(product);
        fetchProducts();
    };

    const handleUpdate = async () => {
        await updateProduct(product);
        fetchProducts();
    };

    const handleDelete = async (id) => {
        await deleteProduct(id);
        fetchProducts();
    };

    return (
        <div>
            <input type="text" placeholder="Product Name" onChange={(e) => setProduct({ ...product, name: e.target.value })} />
            <input type="text" placeholder="Price" onChange={(e) => setProduct({ ...product, price: e.target.value })} />
            <button onClick={handleCreate}>Create</button>
            <button onClick={handleUpdate}>Update</button>
            <ul>
                {products.map((p) => (
                    <li key={p.id}>
                        {p.name} - ${p.price}
                        <button onClick={() => handleDelete(p.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductCRUD;
