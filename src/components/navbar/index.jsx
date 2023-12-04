import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Itsmodal, ModalContainer } from './style';
import Logo from '../../images/logo.svg'
import { Button } from '@mui/base/Button';
import BasicProfile from '../../images/BasicProfile.png';
import Login from '../login';
import { GoogleOAuthProvider } from '@react-oauth/google'
import { googleLogout } from '@react-oauth/google';


const Main = () => {

    const GOOGLE_REST_API_KEY = '599604728211-k4rpa2hff5vv52l7d8hf0cqdjh5bf4fa.apps.googleusercontent.com'

    let [modal, setModal] = useState(false);
    const openModal = () => {
        setModal(!modal);
    };
    const closeModal = () => {
        setModal(false);
    };
    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    const navigate = useNavigate();
    const [isLoggedin, setIsloggedin] = useState(false)

    const handleLoginButtonClick = () => {
        if (isLoggedin) {
            // 로그아웃 처리
            const auth2 = gapi.auth2.getAuthInstance();
            auth2.signOut().then(() => {
                console.log('User signed out.');
                // Perform any additional cleanup or actions after sign out
            });
            
            localStorage.removeItem('accToken');
            googleLogout();
            setIsloggedin(false);
            alert('로그아웃되었습니다.');

        } else {
            // 로그인 처리
            navigate("/login");
        }
    };


    const logincheck = () => {
        const loggedin = localStorage.getItem('accToken');
        if (loggedin === null) {
            setIsloggedin(false)
        }
        else {
            setIsloggedin(true)
            setModal(false);
        }
    };

    useEffect(() => {
        logincheck();
        // console.log("엥",isLoggedin);

    })

    useEffect(() => {
        function start() {
            gapi.client.init({
                client_id: GOOGLE_REST_API_KEY,
                scope: 'email',
                // redirection_uri: 'http://localhost:3000/',
            });
        }

        gapi.load('client:auth2', start);
    }, []);



    return (
        <Container>
            <Link to="/">
                <img className="logoimg" src={Logo} />
            </Link>
            <div className="left">
                <Link to="/mypage">
                    <img className="profile" src={BasicProfile} />
                </Link>
                {isLoggedin ?
                    <Button className="btn" onClick={handleLoginButtonClick}>로그아웃</Button> :
                    <Button className="btn" onClick={openModal}>로그인</Button>
                }
            </div>
            {modal &&
                <Itsmodal onClick={closeModal}>
                    <ModalContainer onClick={stopPropagation}>
                        <Login />
                    </ModalContainer>
                </Itsmodal>
            }

        </Container>
    );

}

export default Main;