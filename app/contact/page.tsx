"use client"

import styles from './page.module.css'
import React, { useState, useRef } from "react";


export default function ContactForm() {
    const [message, setMessage] = useState('')
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    function submitHandler(e: React.FormEvent) {
        e.preventDefault()
        setMessage("")
        setFirstName("")
        setLastName("")
        setEmail("")
        setPhoneNumber("")
    }

    return (
        <div className={styles.formContainer}>
            <form onSubmit={submitHandler}>
                <h1 className="text-4xl">Schreiben sie mir gerne!</h1>
                <div className={styles.nameContainer}>
                    <input onChange={e => setFirstName(e.target.value)}  autoComplete="off" className={styles.FirstNameInput} type="text" placeholder={'First Name'}/>
                    <input onChange={e => setLastName(e.target.value)} className={styles.LastNameInput} type="text" placeholder={'Last Name'}/>
                </div>
                <div className={styles.EmailContainer}>
                    <input onChange={e => setEmail(e.target.value)} required  className={styles.EmailInput} type="email" placeholder={'Your Email'}/>
                    <input onChange={e => setPhoneNumber(e.target.value)}  className={styles.phoneNumberInput} type="tel" placeholder={'Your Phone Number'}/>
                </div>
                <div className={styles.MessageContainer}>
                    <textarea onChange={e => setMessage(e.target.value)} className={styles.MessageInput} required placeholder={'Your Message'}/>
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.submitButton} type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}