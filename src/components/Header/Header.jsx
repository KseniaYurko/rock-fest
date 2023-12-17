import { Link } from "react-router-dom";
import logo from '../../assets/logo/OBG.svg'

import styles from './style.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container_logo}>
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            <div className={styles.container_pages}>
                <Link className={styles.container_pages_item} to="/about">о фестивале</Link>
                <Link className={styles.container_pages_item} to="/lineUp">line-Up</Link>
                <Link className={styles.container_pages_item} to="/news">новости</Link>
                <Link className={styles.container_pages_item} to="/rules">правила фестиваля</Link>
                <Link className={styles.container_pages_item} to="/contacts">контакты</Link>
                <Link className={styles.container_pages_item} to="/FAQ">FAQ</Link>
            </div>
        </header>
    )
}

export {Header};