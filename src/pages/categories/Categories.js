import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Grid from '../../components/Grid/Grid';
import CategoryItem from '../../components/CategoryItem/CategoryItem'; // Category bileşenini import edin
import "./Categories.css";
import { useParams, useHistory } from 'react-router-dom';


const Categories = (props) => {
  // Örnek kategori verileri, gerçekte bir API'dan alınabilir
  const { categoryId } = useParams();
  const history = useHistory();

  return (
    <>
      <Navbar setSearched={props.setSearched} setKeyword={props.setKeyword} />
      <div className="categoriesContainer">
        <Sidebar />
        <Grid> {/* Grid bileşenini kullanarak container oluşturun */}
          <CategoryItem categoryId="1" name="Kategori 1" />
          <CategoryItem categoryId="2" name="Kategori 2" />
          <CategoryItem categoryId="3" name="Kategori 3" />
          <CategoryItem categoryId="4" name="Kategori 4" />
          <CategoryItem categoryId="5" name="Kategori 5" />
          <CategoryItem categoryId="6" name="Kategori 6" />
          <CategoryItem categoryId="7" name="Kategori 7" />
          <CategoryItem categoryId="8" name="Kategori 8" />
          <CategoryItem categoryId="9" name="Kategori 9" />
          {/* Daha fazla CategoryItem ekleyebilirsiniz */}
        </Grid>
      </div>
    </>
  );
};

export default Categories;