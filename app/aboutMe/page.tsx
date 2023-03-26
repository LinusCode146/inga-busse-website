"use client"

import styles from './page.module.css'
import QCard from "@/components/QCard";
import {useEffect, useRef} from "react";
import {motion} from "framer-motion";
export default function AboutMePage () {
    const btnRef = useRef<null | HTMLButtonElement>(null);

    function scrollToBottom () {
        btnRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <>
            <div className={styles.container}>
                <div className="flex items-center h-[100vh] w-full justify-evenly">
                    <motion.img animate={{ opacity: 1, scale: 1 }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                transition={{ ease: "easeOut" }} className="rounded-full w-[25rem] h-[25rem]" src="https://jimdo-storage.freetls.fastly.net/image/311862899/38e4b3da-a557-4260-98c7-76bd3ba654f6.jpg?format=pjpg&quality=80,90&auto=webp&disable=upscale&width=320&height=320&trim=38,0,132,0" alt="face" />
                    <div>
                        <h1 className="text-5xl">Dr. oec. troph. Inga Busse</h1>
                        <h2 className="text-3xl">Diplom-Oecotrophologin</h2>
                    </div>
                </div>
                <button onClick={scrollToBottom} ref={btnRef} className={styles.scrollBtn}>View</button>
                <QCard title={'Mai 2022:'} content={'Neugründung einer Praxis für Ernährungsberatung'} first={true} />
                <QCard title={'2021'} content={'Erhalt des Zertifikats "Ernährungsberaterin VDOE"'} first={false} />
                <QCard title={'2012'} content={`Promotion zum Thema:\n#\nLangfristiger Gewichtsverlauf und kardiovaskuläres Risiko bei\nTeilnehmern eines Langzeitadipositasprogramms und bei\nPatienten nach bariatrischer Operation`} first={false} />
                <QCard title={'seit 2005:'} content={'Mitarbeiterin im Adipositaszentrum des Universiätsklinikums Gießen\n#\n-> Leitung eines Langzeitadipositastherapieprogramms\n-> Nachsorge von adipositaschirurgischen Patienten'} first={false} />
                <QCard title={'2005-2015'} content={'Mitarbeiterin in der endokrinologischen Ambulanz des Universitätsklinikums Gießen\n#\n-> Tätigkeitsbereich: Osteoporose'} first={false} />
                <QCard title={'1999-2004 :'} content={'Studium der Ökotrophologie an der Justus-Liebig- Universität in Gießen'} first={false} />
                <img className={styles.qualiImg} src={"https://jimdo-storage.freetls.fastly.net/image/284442711/b2dad92b-3b9e-4c74-8a87-334f4cdb4a56.png?quality=80,90&auto=webp&disable=upscale&width=540&height=768&trim=0,0,0,0"} alt="quali img" />
            </div>
        </>
    )
}