import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <>
            <div>
                <Link to='/'>Меню</Link>
                <Link to='/cart'>Корзина</Link>
            </div>
            Error
        </>
    );
};

export default Error;
