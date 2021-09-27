import React, { useEffect } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useHistory } from 'react-router';
import styles from './home.module.css';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
const Home = ({ authService,baseName }) => {
    const history = useHistory();
    const onLogout = () => {
        authService.logout()
    }
    useEffect(() => {
        authService.onAuthChange(user => {
            if (!user) {
                history.push(baseName);
          }
        })
    })
    return (
        <section className={styles.home}>
            <Header onLogout={onLogout} />
            <div className={styles.body}>
                <Editor />
                <Preview/>
            </div>
            <Footer />
        </section>
    )
}

export default Home;