import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Background } from './style';
import { jwtDecode } from 'jwt-decode';


import { GoogleOAuthProvider } from '@react-oauth/google'
import { GoogleLogin } from '@react-oauth/google'
import { gapi } from 'gapi-script';


const GOOGLE_REST_API_KEY = '599604728211-k4rpa2hff5vv52l7d8hf0cqdjh5bf4fa.apps.googleusercontent.com'
// const 클라이언트_보안_비번 = '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'
const redirection_uri = 'http://localhost:3000'

const Main = () => {



    // const getUser = async () => {
    //     try {
    //         const response = await axios.get('', {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 "X-AUTH-TOKEN": token
    //             },
    //             withCredentials: true,
    //             'ngrok-skip-browser-warning': true,
    //         });
    //         console.log("성공");
    //         console.log(response.data);
    //     } catch (error) {
    //         console.log('유저 정보 가져오기 실패');
    //         console.error(error);
    //     }
    // };

    const navigate = useNavigate();

    useEffect(() => {
        function start() {
            gapi.auth2.init({
                client_id: GOOGLE_REST_API_KEY,
                scope: 'email'
            });
        }

        gapi.load('client:auth2', start);
    }, []);



    const onSuccess = (response) => {
        console.log(response);
        // console.log(response.credential)
        console.log(jwtDecode(response.credential));

        navigate('/');
    };

    const onFailure = (response) => {
        console.log(response);
    };

    return (
        <Background>
            <Container>
                <GoogleOAuthProvider clientId={`${GOOGLE_REST_API_KEY}`}>
                    <GoogleLogin
                        clientId={GOOGLE_REST_API_KEY}
                        text='구글아이디로 로그인하기'
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                    />
                </GoogleOAuthProvider>
            </Container>
        </Background>
    );

}

export default Main;

