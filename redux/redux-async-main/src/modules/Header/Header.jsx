import { useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import styles from './header.module.css';

function Header() {
    const quantityProducts = useSelector(store => store.length);
    function getLinkActive({ isActive }) {
    return isActive ? styles.isActive : styles.link
}
    return (
        <header className={styles.header}>
            <div className="container">
                <nav className={styles.wrapper}>
                    <ul className={styles.list}>
                        <li className={styles.logo}><Link className={styles.link} to="/">Logo</Link></li>
                        <li className={styles.navmenu}><NavLink className={getLinkActive} to="/products" ><p>Products</p></NavLink></li>
                        <li className={styles.navmenu}><NavLink className={getLinkActive} to="/cart"><p>Cart <span>{quantityProducts}</span></p></NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
 }
export default Header;