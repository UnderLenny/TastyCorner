import Heading from '../../components/Heading/Heading';
import ProductCart from '../../components/ProductCart/ProductCart';
import Search from '../../components/Search/Search';
import styles from './Menu.module.css';
import { PREFIX } from './../../helpers/API';
import { Product } from '../../interfaces/product.interface';
import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { MenuList } from './MenuList/MenuList';

const Menu = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getMenu = async () => {
    try {
      setIsLoading(true);
      await new Promise<void>((res) => {
        setTimeout(() => {
          res();
        }, 2000);
      });
      const { data } = await axios.get<Product[]>(`${PREFIX}/products`);
      setProducts(data);
      setIsLoading(false);
    } catch (err) {
      if (err instanceof AxiosError) {
        setError(err.message);
      }
      setIsLoading(false);
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
  }, []);

  return (
    <>
      <div className={styles['head']}>
        <Heading>Menu</Heading>
        <Search placeholder='Введите блюдо или его состав'></Search>
      </div>
      <div>
        {error && <>{error}</>}
        {!isLoading && <MenuList products={products} />}
        {isLoading && <>Загружаем продукты...</>}
      </div>
    </>
  );
};

export default Menu;
