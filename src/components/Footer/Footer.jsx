import { Link } from 'react-router-dom';

import logo from '../../assets/logo/OBG.svg'
import VKIcon from '../../assets/logo/vkontakteIcon.svg'
import YouTubeIcon from '../../assets/logo/youtubeIcon.svg'
import TelegramIcon from '../../assets/logo/telegramIcon.svg'
import ViberIcon from '../../assets/logo/viberIcon.svg'

import styles from './style.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Link to="/">
                <img src={logo} alt="logo" />   
            </Link>
            <div className={styles.container_pages}>
                <Link className={styles.container_pages_item} to="/about">о фестивале</Link>
                <Link className={styles.container_pages_item} to="/lineUp">line-Up</Link>
                <Link className={styles.container_pages_item} to="/news">новости</Link>
                <Link className={styles.container_pages_item} to="/rules">правила фестиваля</Link>
                <Link className={styles.container_pages_item} to="/contacts">контакты</Link>
                <Link className={styles.container_pages_item} to="/FAQ">FAQ</Link>
            </div>
            <div className={styles.container_info}>
                <p className={styles.container_info_item}>Публичная офера</p>
                <p className={styles.container_info_item}>Оплата</p>
                <p className={styles.container_info_item}>Возврат билета</p>
                <p className={styles.container_info_item}>Сервис и поддержка</p>
                <div className={styles.container_socialmedia}>
                    <img 
                        // style={styles.socialmedia_icon}
                        src={VKIcon}
                        alt="VKIcon" 
                    /> 
                    <img 
                        // style={styles.socialmedia_icon}
                        src={YouTubeIcon}
                        alt="YouTubeIcon" 
                    /> 
                    <img 
                        // style={styles.socialmedia_icon}
                        src={TelegramIcon}
                        alt="TelegramIcon" 
                    /> 
                    <img 
                        // style={styles.socialmedia_icon}
                        src={ViberIcon}
                        alt="ViberIcon" 
                    /> 
                </div>
            </div>

        </footer>
    )
}

export { Footer };