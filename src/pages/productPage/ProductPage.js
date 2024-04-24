import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import RatingStars from '../../components/RatingStars/RatingStars';
import './ProductPage.css'; // Stil dosyasını eklediğinizden emin olun
import Comment from '../../components/Comment/Comment';

const ProductPage = (props) => {
  // Statik ürün verileri
  const product = {
    name: 'Test Ürünü',
    imageUrl: 'https://via.placeholder.com/200',
    description: 'Bu bir test ürünüdür. Ürün açıklaması burada yer alır.'
  };

  return (
    <>
      <Navbar setSearched={props.setSearched} setKeyword={props.setKeyword} />
      <div className="productPageContainer">
        <Sidebar />
        <div className="productDetails">
          <h1>{product.name}</h1>
          <RatingStars />
          <img src={product.imageUrl} alt={product.name} />
          <p>{product.description}</p>
          {/* <Comment /> */}
          {/* Burada diğer ürün detaylarına yer verebilirsiniz */}
        </div>
      </div>
    </>
  );
};

export default ProductPage;