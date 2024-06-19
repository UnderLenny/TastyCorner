import { NavLink, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import Button from '../../components/Button/Button';
import cn from 'classnames';

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
          <div className={styles['email']}>lenny@gmail.com</div>
        </div>
        <div className={styles['menu']}>
          <NavLink
            to='/'
            className={({ isActive }) =>
              cn(styles['link'], {
                [styles.active]: isActive
              })
            }
          >
            <img src='/menu-icon.svg' alt='Menu icon' />
            Меню
          </NavLink>
          <NavLink
            to='/cart'
            className={({ isActive }) =>
              cn(styles['link'], {
                [styles.active]: isActive
              })
            }
          >
            <img src='/cart-icon.svg' alt='Cart icon' />
            Корзина
          </NavLink>
        </div>
        <Button className={styles['exit']}>
          <img src='/exit-icon.svg' alt='Exit icon'></img>
          Выход
        </Button>
      </div>
      <div className={styles['content']}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
