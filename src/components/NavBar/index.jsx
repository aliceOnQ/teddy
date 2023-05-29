import { NavLink } from 'react-router-dom';
import { Drawer } from 'antd';
import styles from './navbar.module.css';
import { theme } from 'antd';

export default function NavBar({ open, onClose }) {
    const {
        token: { colorTextBase },
    } = theme.useToken();

    const NavBarContent = () => (
        <> 
            <NavLink to="/hot" style={{color: colorTextBase}}
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                Hot
            </NavLink>
            <NavLink to="/artist" style={{color: colorTextBase}}
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                Library
            </NavLink>
           
            <NavLink to="/shop" style={{color: colorTextBase}}
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                Shop
            </NavLink>
        </>
    )
    return (
        <>
        <div className={styles.navBar}>
            <NavBarContent />
        </div>
        <Drawer  
            placement="left" 
            onClose={onClose} 
            open={open} 
        >
            <div className={styles.drawer}>
                <NavBarContent />
            </div>
        </Drawer>
    </>
    );
}