import React from 'react';
import { useHistory } from 'react-router-dom';
import './ProductItem.css'; // Stil dosyasının adının doğru olduğundan emin olun

const ProductItem = ({ productId, name, imageUrl, description }) => {
  const history = useHistory();

  // Ürün detay sayfasına yönlendirme işlevi
  const navigateToProductDetail = () => {
    history.push(`/products/${productId}`);
  };

  return (
    <div className="productItem" onClick={navigateToProductDetail}>
      {imageUrl && <img src={imageUrl} alt={name} className="productItemImage" />}
      <div className="productItemName">{name}</div>
      {/*<div className="productItemDescription">{description}</div> */}
    </div>
  );
};

export default ProductItem;