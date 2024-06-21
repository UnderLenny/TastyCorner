import ProductCart from '../../../components/ProductCart/ProductCart';
import { MenuListProps } from './MenuList.props';
import styles from './MenuList.module.css';

export function MenuList({ products }: MenuListProps) {
  return (
    <div className={styles['wrapper']}>
      {products.map((product) => (
        <ProductCart
          key={product.id}
          id={product.id}
          name={product.name}
          description={product.ingredients.join(', ')}
          rating={product.rating}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
}
