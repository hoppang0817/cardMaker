import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import style from './login.module.css';

const Login = ({ authService }) => {
    const onLogin = (event) => {
        authService//
            .login(event.currentTarget.textContent)
            .then(console.log);
    }
    return (
        <section>
            <Header />
            <section className={style.login}>
                <h1>Login</h1>
                <ul className={style.list}>
                    <li className={style.item}>
                        <button className={style.button} onClick={onLogin}>
                            Google
                        </button>
                    </li>
                    <li className={style.itme}>
                        <button className={style.button} onClick={onLogin}>
                            Github
                        </button>
                    </li>
                </ul>
            </section>
            <Footer />
        </section>
    )
}

export default Login;