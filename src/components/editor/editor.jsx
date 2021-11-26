import React from 'react';
import CardEditorFrom from '../card_editor_from/card_editor_from';
import styles from './editor.module.css';
const Editor = ({ cards }) => {
    console.log(cards)
    return (
        <section className={styles.editor}>
            <h2 className={styles.title}>
                Card Maker
            </h2>
            {
                cards.map(card => {
                    return <CardEditorFrom card={card} />
                })
            }
        </section>
    )
}

export default Editor;