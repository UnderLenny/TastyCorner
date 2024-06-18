import { Link, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import Button from '../../components/Button/Button';

const Layout = () => {
    return (
        <div className={styles['layout']}>
            <div className={styles['sidebar']}>
                <div className={styles['user']}>
                    <img
                        className={styles['avatar']}
                        src='/avatar.png'
                        alt='User avatar'
                    />
                    <div className={styles['name']}>Leonid Gevorgyan</div>
                    <div className={styles['email']}>lenny@dev.ru</div>
                </div>
                <div className={styles['menu']}>
                    <Link to='/' className={styles['link']}>
                        <img src='/menu-icon.svg' alt='Menu icon' />
                        Меню
                    </Link>
                    <Link to='/cart' className={styles['link']}>
                        <img src='/cart-icon.svg' alt='Cart icon' />
                        Корзина
                    </Link>
                </div>
                <Button className={styles['exit']}>
                    <img src='/exit-icon.svg' alt='Exit icon'></img>
                    Выход
                </Button>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
