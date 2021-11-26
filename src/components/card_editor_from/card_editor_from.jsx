import React from 'react';
import Button from '../button/button';
import ImageFileInput from '../imge_file_input/image_file_input';
import styles from './card_editor_from.module.css';

const CardEditorFrom = ({ card }) => {
  const { name, conpany, theme, title, email, massage, fileName, fileURL } =
    card;
  const onSubmit = () => {};
  return (
    <form className={styles.form}>
      <input className={styles.input} type="text" name="name" value={name} />
      <input
        className={styles.input}
        type="text"
        name="company"
        value={conpany}
      />
      <select className={styles.select} name="theme" value={theme}>
        <option value="light">Light</option>
        <option value="drak">Drak</option>
        <option value="colorful">Colorful</option>
      </select>
      <input className={styles.input} type="text" name="title" value={title} />
      <input className={styles.input} type="email" name="email" value={email} />
      <textarea
        className={styles.textarea}
        cols="50"
        rows="5"
        value={massage}
      />
      <ImageFileInput name={name} />
      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
};
export default CardEditorFrom;
