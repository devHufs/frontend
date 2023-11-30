import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Background } from './style';
import { jwtDecode } from 'jwt-decode';

import { GoogleOAuthProvider } from '@react-oauth/google'
import { GoogleLogin, googleLogout } from '@react-oauth/google'
import { gapi } from 'gapi-script';


const GOOGLE_REST_API_KEY = '599604728211-k4rpa2hff5vv52l7d8hf0cqdjh5bf4fa.apps.googleusercontent.com'
// const 클라이언트_보안_비번 = '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'
const redirection_uri = 'http://localhost:3000'

const Main = () => {

    const navigate = useNavigate();

    const Towrite = () => {
        navigate('/write')
    }

    useEffect(() => {
        function start() {
            gapi.client.init({
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
        var accessToken = gapi.auth.getToken();
        console.log("accessToken:", accessToken);

        navigate('/');
    };

    const onFailure = (response) => {
        console.log(response);
    };


    // useEffect(() => {
    //     const script = document.createElement('script');
    //     // script.src = 'https://accounts.google.com/o/oauth2/v2/auth?';
    //     script.src = 'https://accounts.google.com/o/oauth2/v2/auth?response_type=code&scope=openid%20email&client_id=${GOOGLE_REST_API_KEY}&redirect_uri=${`/`}'
    //     // script.async = true;
    //     script.onload = () => {
    //       window.gapi.load('auth2', () => {
    //         window.gapi.auth2.init({
    //           client_id: GOOGLE_REST_API_KEY,
    //         });
    //       });
    //     };
    //     document.body.appendChild(script);

    //     return () => {
    //       document.body.removeChild(script);
    //     };
    //   }, []);

    //   const handleGoogleLogin = async () => {
    //     try {
    //       const response = await window.gapi.auth2.getAuthInstance().signIn({
    //         scope: 'profile email',
    //       });

    //       const accessToken = response.getAuthResponse().access_token;
    //       console.log(response)
    //     //   console.log('AccessToken:', accessToken);
    //     } catch (error) {
    //       console.error('Google login error:', error);
    //     }
    //   };

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
                {/* <button onClick={handleGoogleLogin}>구글로그인</button> */}
            </Container>
        </Background>
    );

}

export default Main;
