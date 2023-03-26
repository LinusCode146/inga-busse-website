"use client"
import styles from './page.module.css'
import QCard from "@/components/QCard";
export default function Krankenkasse () {
    return (
        <div className={styles.container}>
            <h1>Antragstellung bei der Krankenkasse</h1>
            <br/>
            <h3>Im Folgenden erfahren Sie, wie Sie einen Antrag auf Kostenübernahme nach § 43 Abs.<br/> 2 SGB V bei der Krankenkasse stellen:</h3>
            <QCard title={''} content={'Bitte lassen Sie die ärztliche Notwendigkeitsbescheinigung (budgetneutral) von\n Ihrem Hausarzt oder Ihrer Hausärztin ausfüllen. Diese finden Sie hier auch zum\n Download.'} first={false} />
            <QCard title={''} content={'Bitte senden Sie die ausgefüllte ärztliche Notwendigkeitsbescheinigung, einen\n Antrag auf  Kostenübernahme, meinen Kostenvoranschlag sowie eine Kopie\n meines Zertifikats (VDOE) zur Krankenkasse. Die hierfür notwendigen Unterlagen\n erhalten Sie von mir.'} first={false} />
            <QCard title={''} content={'Nach Rückmeldung über eine Kostenübernahme nehmen Sie wieder mit mir\n Kontakt auf und wir vereinbaren einen Beratungstermin'} first={false} />
            <a href="Bescheinigung.pdf" download="Bescheinigung.pdf">
                <button>Download</button>
            </a>
        </div>
    )
}