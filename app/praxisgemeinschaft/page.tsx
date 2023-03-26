"use client"
import styles from './page.module.css'
export default function PraxisPage () {
    return (
        <div className={styles.container}>
            <h1>Praxisgemeinschaft</h1>
            <h2>Praxis für Ernährungsberatung und Gesundheitsprävention</h2>
            <h2>Barbara Schmidt, M.Sc. Ernährungswissenschaften</h2>
            <br/>
            <h4>Heinestr. 4</h4>
            <h4>35452 Heuchelheim</h4>
            <br/>
            <div>
                <h4><b>Telefon:</b>  0641 / 49815280</h4>
                <h4><b>Mobil:</b>  0176-24042349</h4>
                <h4><b>Mail:</b>   bschmidt-ernaehrungsberatung@web.de</h4>
                <h4><b>Home:</b>  https://www.bschmidt-ernährungsberatung.de/</h4>
            </div>

        </div>
    )
}