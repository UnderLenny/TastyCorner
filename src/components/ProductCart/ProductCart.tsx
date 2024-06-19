import styles from './ProductCart.module.css';
import { ProductCardProps } from './ProductCart.props';

const ProductCart = (props: ProductCardProps) => {
  return (
    <div className={styles['card']}>
      <div className={styles['head']}></div>
      <div className={styles['footer']}></div>
    </div>
  );
};

export default ProductCart;
