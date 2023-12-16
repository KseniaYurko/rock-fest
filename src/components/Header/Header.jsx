import { Link } from "react-router-dom";

import styles from './style.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <Link to="/">LOGO</Link>
            <Link to="/about">about</Link>
            <Link to="/lineUp">lineUp</Link>
            <Link to="/news">news</Link>
            <Link to="/rules">rules</Link>
            <Link to="/contacts">contacts</Link>
            <Link to="/FAQ">FAQ</Link>
        </header>
    )
}

export {Header};