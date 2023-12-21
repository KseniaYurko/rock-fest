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
            <Link className={styles.container_logo} to="/">
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
                        style={{margin: '0px 18px'}}
                        src={VKIcon}
                        alt="VKIcon" 
                    /> 
                    <img 
                        style={{margin: '0px 18px'}}
                        src={YouTubeIcon}
                        alt="YouTubeIcon" 
                    /> 
                    <img 
                        style={{margin: '0px 18px'}}
                        src={TelegramIcon}
                        alt="TelegramIcon" 
                    /> 
                    <img 
                        style={{margin: '0px 18px'}}
                        src={ViberIcon}
                        alt="ViberIcon" 
                    /> 
                </div>
            </div>

        </footer>
    )
}

export { Footer };