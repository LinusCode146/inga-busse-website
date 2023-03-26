import styles from './Footer.module.css'

export default function Footer () {
    return (
        <div className={styles.container}>
            <div>Impressum</div>
            <div>Datenschutz</div>
            <div>Einstellungen</div>
        </div>
    )
}