import { Link } from 'react-router-dom';

import VKIcon from '../../../public/logo/vkontakteIcon.svg'
import YouTubeIcon from '../../../public/logo/youtubeIcon.svg'
import TelegramIcon from '../../../public/logo/telegramIcon.svg'
import ViberIcon from '../../../public/logo/viberIcon.svg'

import styles from './style.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Link to="/">LOGO</Link>
            <div className={styles.footer_container_pages}>
                <Link to="/about">about</Link>
                <Link to="/lineUp">lineUp</Link>
                <Link to="/news">news</Link>
                <Link to="/rules">rules</Link>
                <Link to="/contacts">contacts</Link>
                <Link to="/FAQ">FAQ</Link>
            </div>
            <div>
                <p>Публичная офера</p>
                <p>Оплата</p>
                <p>Возврат билета</p>
                <p>Сервис и поддержка</p>
                <div className={styles.socialmedia_icons}>
                    <img 
                        style={styles.icon}
                        src={VKIcon}
                        alt="VKIcon" 
                    /> 
                    {/* <Image 
                        style={styles.icon}
                        source={{
                            uri: 'https://reactnative.dev/img/tiny_logo.png',
                          }}
                    />
                    <Image 
                        style={styles.icon}
                        source={{
                            uri: 'https://reactnative.dev/img/tiny_logo.png',
                          }}
                    />
                    <Image 
                        style={styles.icon}
                        source={{
                            uri: 'https://reactnative.dev/img/tiny_logo.png',
                          }}
                    /> */}
                </div>
            </div>

        </footer>
    )
}

export { Footer };