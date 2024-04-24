import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Grid from '../../components/Grid/Grid';
import SubcategoryItem from '../../components/SubcategoryItem/SubcategoryItem';
import { useParams } from 'react-router-dom';
import "./Subcategories.css";

const Subcategories = (props) => {
  const { categoryId } = useParams();

  // Subcategory verilerinin olduğu yer. Gerçek dünyada bu veriler bir API'dan alınabilir.
  const subcategories = [
    // Örnek statik veriler
    { id: 'sub1', name: 'Alt Kategori 1', imageUrl: 'https://example.com/subcategory1.png' },
    { id: 'sub2', name: 'Alt Kategori 2', imageUrl: 'https://example.com/subcategory2.png' },
    { id: 'sub3', name: 'Alt Kategori 3', imageUrl: 'https://example.com/subcategory3.png' },
    // Diğer alt kategoriler...
  ];

  return (
    <>
      <Navbar setSearched={props.setSearched} setKeyword={props.setKeyword} />
      <div className="subcategoriesContainer">
        <Sidebar />
        <Grid>
          {subcategories.map(subcategory => (
            <SubcategoryItem
              key={subcategory.id}
              categoryId={categoryId}
              subcategoryId={subcategory.id}
              name={subcategory.name}
              imageUrl={subcategory.imageUrl}
            />
          ))}
        </Grid>
      </div>
    </>
  );
};

export default Subcategories;