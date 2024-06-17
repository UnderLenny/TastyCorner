import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <>
            <div>
                <Link to='/'>Меню</Link>
                <Link to='/cart'>Корзина</Link>
            </div>
            Menu
        </>
    );
};

export default Menu;
