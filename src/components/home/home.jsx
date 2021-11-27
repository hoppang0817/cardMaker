import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useHistory } from 'react-router';
import styles from './home.module.css';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Home = ({ authService, baseName }) => {
  const history = useHistory();
  const [cards, setCards] = useState([
    {
      id: 1,
      name: 'Bod',
      company: 'Uber',
      theme: 'light',
      title: 'software Engineer',
      email: 'asd123@gmail.com',
      massage: 'go for it',
      fileName: 'bod',
      fileURL: null,
    },
    {
      id: 2,
      name: 'Bod2',
      company: 'Uber',
      theme: 'drak',
      title: 'software Engineer',
      email: 'asd123@gmail.com',
      massage: 'go for it',
      fileName: 'bod',
      fileURL: null,
    },
    {
      id: 3,
      name: 'Bod3',
      company: 'Uber',
      theme: 'colorful',
      title: 'software Engineer',
      email: 'asd123@gmail.com',
      massage: 'go for it',
      fileName: 'bod',
      fileURL: null,
    },
  ]);
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push(baseName);
      }
    });
  });
  const onSubmit = (card) => {
    const newCard = [...cards, card];
    setCards(newCard);
  };
  return (
    <section className={styles.home}>
      <Header onLogout={onLogout} />
      <div className={styles.body}>
        <Editor cards={cards} onSubmit={onSubmit} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Home;
