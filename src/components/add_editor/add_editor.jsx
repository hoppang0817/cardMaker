import React, { useRef } from 'react';
import style from '../card_editor_from/card_editor_from.module.css';
import Button from '../button/button';
import ImageFileInput from '../imge_file_input/image_file_input';

const AddEditor = ({ onAdd }) => {
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const formRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault(); //안 넣어주면 계속 리렌더링
    const card = {
      id: Date.now(), //uuid
      name: nameRef.current.value || '',
      company: companyRef.current.value || '',
      theme: themeRef.current.value,
      title: titleRef.current.value || '',
      email: emailRef.current.value || '',
      message: messageRef.current.value || '',
      fileName: '',
      fileURL: null,
    };
    onAdd(card);
    formRef.current.reset();
  };

  return (
    <form ref={formRef} className={style.form}>
      <input
        className={style.input}
        placeholder="Name"
        name="name"
        ref={nameRef}
      />
      <input
        className={style.input}
        placeholder="company"
        name="company"
        ref={companyRef}
      />
      <select className={style.select} name="theme" ref={themeRef}>
        <option value="light">light</option>
        <option value="drak">drak</option>
        <option value="colorful">colorful</option>
      </select>
      <input
        className={style.input}
        placeholder="Title"
        name="title"
        ref={titleRef}
      />
      <input
        className={style.input}
        placeholder="Email"
        name="email"
        ref={emailRef}
      />
      <textarea
        className={style.textarea}
        placeholder="Message"
        name="message"
        ref={messageRef}
      />
      <ImageFileInput name="No file" />
      <Button name="Add" onClick={onSubmit} />
    </form>
  );
};

export default AddEditor;
