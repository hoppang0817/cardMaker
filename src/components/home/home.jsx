import React, { useEffect } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useHistory } from 'react-router';
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
        <section>
            <Header onLogout={onLogout} />
            <section>
                <p>바디</p>
            </section>
            <Footer />
        </section>
    )
}

export default Home;