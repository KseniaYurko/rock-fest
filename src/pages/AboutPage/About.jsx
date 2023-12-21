import backing from '../../assets/about_backing.jpg'
import styles from './style.module.css'

const AboutPage = () => {
    return (
        <div className={styles.about_container}>
            <div className={styles.backing}>
                <img 
                    style={{
                        height: 'auto',
                        width: '1650px'
                    }}
                    src={backing} 
                    alt="backing" 
                />
            </div>
            <section className={styles.section_main}>
                <div className={styles.container_buyYicket}>
                    <div className={styles.buyYicket_heading}>
                        OLD BUT GOLD
                    </div>
                    <button>
                        купить биилет
                    </button>
                </div>
            </section>
            <section className={styles.section_info}>
                
            </section>
        </div>
    )
}

export default AboutPage;