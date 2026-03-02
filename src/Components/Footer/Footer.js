import styles from './Footer.module.scss';

function Footer()
{
    return (
        <footer>
            <div className={styles.container}>
                <div className={styles.link}>
                    <a href='https://www.linkedin.com/in/rapangilinan12/' target='_blank' rel='noreferrer' className={styles.linkedIn}>LinkedIn</a>
                    <a href='https://github.com/RPangil' target='_blank' rel='noreferrer' className={styles.github}>Github</a>
                </div>
                <p>Designed &amp; Built by Robert Pangilinan &copy;2026</p>
            </div>
        </footer>
    );
}

export default Footer;