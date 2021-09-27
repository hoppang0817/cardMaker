import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import style from './login.module.css';

const Login = ({ authService, baseName }) => {
    const history = useHistory();
    const goToHome = userId => {
        history.push({
            pathname:  baseName + '/home',
            state:{id: userId},
        })
    }
    const onLogin = (event) => {
        authService//
            .login(event.currentTarget.textContent)
            .then(data =>goToHome(data.user.uid));
    }

    //컴포넌트가 업데이트되거나 다시 마운트 될때 사용자의 상태에 따라 홈화면으로 갈지를 판단
    useEffect(() => {
        authService.onAuthChange(user => {
            user && goToHome(user.uid);
        })
    })

    return (
        <section>
            <Header/>
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