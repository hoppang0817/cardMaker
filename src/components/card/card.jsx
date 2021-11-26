import React from 'react';
import styles from './card.module.css';


const DEFAULT_IMAGE = '/images/default_logo.png';
const Card = ({ card }) => {
    const {
        name,
        conpany,
        theme,
        title,
        email,
        massage,
        fileName,
        fileURL
    } = card;
    const url = fileURL || DEFAULT_IMAGE;
    return (
        <li className={`${styles.card} ${getBackgroundColor(theme)}`}>
            <img className={styles.image} src={process.env.PUBLIC_URL + url} alt='fileImage' />
            <div className={styles.info}>
                <h1 className={styles.name}>{name}</h1>
                <p className={styles.conpany}>{conpany}</p>
                <p className={styles.title}>{title}</p>
                <p className={styles.email}>{email}</p>
                <p className={styles.massage}>{massage}</p>
            </div>
      </li>
  )
}

function getBackgroundColor(theme) {
    switch (theme) {
        case 'drak':
            return styles.drak;
        case 'light':
            return styles.light;
        case 'colorful':
            return styles.colorful;
        default:
            throw new Error(`unkonw theme ${theme}`)
    }
}
export default Card;