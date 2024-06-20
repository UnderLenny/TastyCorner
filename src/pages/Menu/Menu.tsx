import Heading from '../../components/Heading/Heading';
import ProductCart from '../../components/ProductCart/ProductCart';
import Search from '../../components/Search/Search';
import styles from './Menu.module.css';

const Menu = () => {
  return (
    <>
      <div className={styles['head']}>
        <Heading>Menu</Heading>
        <Search placeholder='Введите блюдо или его состав'></Search>
      </div>
      <div>
        <ProductCart
          id={1}
          title='Наслаждение'
          description='Салями, руккола, помидоры, оливки'
          rating={4.5}
          price={300}
          image='/product-demo.png'
        />
      </div>
    </>
  );
};

export default Menu;
