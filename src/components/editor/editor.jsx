import React from 'react';
import AddEditor from '../add_editor/add_editor';
import CardEditorFrom from '../card_editor_from/card_editor_from';
import styles from './editor.module.css';
const Editor = ({ cards, onSubmit }) => {
  console.log(cards);

  return (
    <section className={styles.editor}>
      <h2 className={styles.title}>Card Maker</h2>
      {cards.map((card) => {
        return <CardEditorFrom key={card.id} card={card} />;
      })}
      <AddEditor onAdd={onSubmit} />
    </section>
  );
};

export default Editor;
