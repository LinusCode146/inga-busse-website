"use client"
import styles from './Header.module.css'
import {useEffect, useRef, useState} from "react";
import Link from "next/link";
export default function Header () {
    const [openDropdown, setOpenDropdown] = useState(false)

    return (

        <div className={styles.header}>
            <div className={styles.navbar}>
                <div>
                    <Link href={'/'}>
                        <img className={styles.headImg} src="https://jimdo-storage.freetls.fastly.net/image/284440727/55c1eaef-a43b-4a21-9faf-b49258d3bd50.png?quality=80,90&auto=webp&disable=upscale&width=160&height=131&trim=0,0,0,0" alt="proflie pic" />
                    </Link>
                </div>
                <ul className={styles.links}>
                    <li><Link href={'/contact'}>Kontakt</Link></li>
                    <li><Link href={'/skills'}>Meine Leistungen</Link></li>
                    <li><Link href="/aboutMe">Über Mich</Link></li>
                    <li><Link href={'/krankenkasse'}>Krankenkasse</Link></li>
                </ul>
                <button className={styles.action_btn}><Link href={'/praxisgemeinschaft'}>Praxisgemeinschaft</Link></button>
                <div onClick={() => setOpenDropdown(prev => !prev)} className={styles.toggle_btn}>
                    <i className={`${openDropdown ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}`}></i>
                </div>

                <div className={`${styles.dropdown_menu} ${openDropdown ? styles.open : null}`}>
                    <li><Link href={'/contact'}>Kontakt</Link></li>
                    <li><Link href={'/skills'}>Meine Leistungen</Link></li>
                    <li><Link href="/aboutMe">Über Mich</Link></li>
                    <li><Link href={'/krankenkasse'}>Krankenkasse</Link></li>
                    <li><Link href={'/praxisgemeinschaft'}>Praxisgemeinschaft</Link></li>
                </div>
            </div>
        </div>
    )
}