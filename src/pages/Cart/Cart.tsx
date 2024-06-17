import { Link } from 'react-router-dom';

const Card = () => {
    return (
        <>
            <div>
                <Link to='/'>Меню</Link>
                <Link to='/cart'>Корзина</Link>
            </div>
            Cart
        </>
    );
};

export default Card;
