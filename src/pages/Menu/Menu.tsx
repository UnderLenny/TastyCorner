import Heading from '../../components/Heading/Heading';
import ProductCart from '../../components/ProductCart/ProductCart';
import Search from '../../components/Search/Search';
import styles from './Menu.module.css';
import { PREFIX } from './../../helpers/API';
import { Product } from '../../interfaces/product.interface';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Menu = () => {
  const [products, setProducts] = useState<Product[]>([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getMenu = async () => {
    try {
      const { data } = await axios.get<Product[]>(`${PREFIX}/products`);
      setProducts(data);
    } catch (err) {
      return err;
    }
    // try {
    //   const res = await fetch(`${PREFIX}/products`);
    //   if (!res.ok) {
    //     return;
    //   }
    //   const data = (await res.json()) as Product[];
    //   setProducts(data);
    // } catch (err) {
    //   return err;
    // }
  };

  useEffect(() => {
    getMenu();
  }, [getMenu]);

  return (
    <>
      <div className={styles['head']}>
        <Heading>Menu</Heading>
        <Search placeholder='Введите блюдо или его состав'></Search>
      </div>
      <div>
        {products.map((product) => (
          <ProductCart
            id={product.id}
            name={product.name}
            description={product.ingredients.join(', ')}
            rating={product.rating}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </>
  );
};

export default Menu;
