"use client"
import styles from './page.module.css'
import QCard from "@/components/QCard";
export default function SkillsPage () {
    return (
        <div className={styles.container}>
            <h1>Ich berate sie in Sachen Ernährung bei:</h1>
            <QCard title={'Übergewicht'} content={''} first={true} />
            <QCard title={'herzgesunde Ernährung'} content={''} first={false} />
            <QCard title={'Osteoporose'} content={''} first={false} />
            <QCard title={'Nahrungsmittelunverträglichkeiten'} content={'Lactoseintoleranz, Fructosemalabsorption'} first={false} />
            <QCard title={'Ernährung in der Schwangerschaft'} content={''} first={false} />
            <QCard title={'Ernährung im Kindesalter'} content={''} first={false} />
            <img src="https://jimdo-storage.freetls.fastly.net/image/282954841/51c70625-9b95-40f0-81e9-18e23893aee7.png?quality=80,90&auto=webp&disable=upscale&width=1024&height=345&trim=0,0,0,0" alt="skill img" />
        </div>
    )
}