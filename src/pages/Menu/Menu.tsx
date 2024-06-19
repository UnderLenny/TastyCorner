import Heading from '../../components/Heading/Heading';
import Search from '../../components/Search/Search';
import styles from './Menu.module.css';

const Menu = () => {
  return (
    <>
      <div className={styles['head']}>
        <Heading>Menu</Heading>
        <Search placeholder='Введите блюдо или его состав'></Search>
      </div>
    </>
  );
};

export default Menu;
