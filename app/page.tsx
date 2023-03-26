"use client"

import styles from './page.module.css'
import Link from "next/link";
import {motion} from "framer-motion";
export default function Home() {


  return (
    <div className={styles.container}>
        <h1>Herzlich Willkommen in meiner Praxis für Ernährungsberatung!</h1>
        <motion.img animate={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    transition={{ ease: "easeOut" }} src="https://jimdo-storage.freetls.fastly.net/image/291905051/b1260bbf-43c4-4dc9-a125-329cebe778df.png?quality=80,90&auto=webp&disable=upscale&width=800&height=800&trim=0,0,0,0" alt="image" />
        <section className={styles.a_sect} >
            <div className={styles.drop_container}>
                <div className={styles.drop}>
                    <div className={styles.content}>
                        <h2>01</h2>
                        <p>Ihr Arzt hat Ihnen eine Ernährungsberatung empfohlen?
                            Sie möchten sich über gesunde Ernährung informieren und Ihre Gesundheit durch eine Ernährungsumstellung positiv beeinflussen?  </p>
                        <Link className={styles.drop_link} href={'/contact'}>Kontakt</Link>
                    </div>
                </div>
                <div className={styles.drop}>
                    <div className={styles.content}>
                        <h2>02</h2>
                        <p>Ich möchte Sie gerne bei Ihren Fragen rund um das Thema "Gesunde Ernährung" begleiten und  unterstütze Sie dabei, Ihre gewohnte Ernährungsweise individuell umzustellen. </p>
                        <Link className={styles.drop_link} href={'/contact'}>Kontakt</Link>
                    </div>
                </div>
                <div className={styles.drop}>
                    <div className={styles.content}>
                        <h2>03</h2>
                        <p>Setzen Sie sich gerne telefonisch oder per Email mit mir in Verbindung!</p>
                        <Link className={styles.drop_link} href={'/contact'}>Kontakt</Link>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
