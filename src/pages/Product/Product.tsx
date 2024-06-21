import { useLoaderData, useParams } from 'react-router-dom';
import { Product } from '../../interfaces/product.interface';

const Product = () => {
  const data = useLoaderData() as Product;

  return <>Product - {data.name}</>;
};

export default Product;
