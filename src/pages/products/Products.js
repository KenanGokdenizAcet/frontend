import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Grid from '../../components/Grid/Grid';
import ProductItem from '../../components/ProductItem/ProductItem';
import { useParams } from 'react-router-dom';
import "./Products.css";

// socialPlatform-main/frontend/src/pages/products/Products.js
const Products = (props) => {
  //const { categoryId, subcategoryId } = useParams();
  
  // Burada, categoryId ve subcategoryId'ye göre ürünleri almak için bir API çağrısı yapılabilir
  const products = [
    // Örnek ürün verileri
    { id: 'p1', name: 'Ürün 1', imageUrl: 'https://example.com/product1.jpg', description: 'Ürün 1 açıklaması' },
    { id: 'p2', name: 'Ürün 2', imageUrl: 'https://example.com/product2.jpg', description: 'Ürün 2 açıklaması' },
    // Daha fazla ürün...
  ];

  return (
    <>
      <Navbar setSearched={props.setSearched} setKeyword={props.setKeyword} />
      <div className="productsContainer">
        <Sidebar />
        <Grid>
          {products.map(product => (
            <ProductItem
              key={product.id}
              productId={product.id}
              name={product.name}
              imageUrl={product.imageUrl}
              description={product.description}
            />
          ))}
        </Grid>
      </div>
    </>
  );
}

export default Products;