"use client"
import styles from './QCard.module.css'
import {motion} from "framer-motion";

export default function QCard ({title, content, first}: {title: string, content: string, first: boolean}) {
    const newText = content.split('\n').map(str => <p key={str}>{str}</p>);
    return (
        <motion.div animate={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    transition={{ ease: "easeOut" }}
                    className={`${styles.container} ${first ? styles.first : ""}`}>
            {title.length > 0 && <h2>{title}</h2>}
            {content.length > 0 && <span>{newText}</span>}
        </motion.div>
    )
}