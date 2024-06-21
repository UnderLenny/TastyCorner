import ProductCart from '../../../components/ProductCart/ProductCart';
import { MenuListProps } from './MenuList.props';

export function MenuList({ products }: MenuListProps) {
  return products.map((product) => (
    <ProductCart
      key={product.id}
      id={product.id}
      name={product.name}
      description={product.ingredients.join(', ')}
      rating={product.rating}
      price={product.price}
      image={product.image}
    />
  ));
}
