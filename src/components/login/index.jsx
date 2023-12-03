import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Background } from './style';
import { jwtDecode } from 'jwt-decode';
import googleLogo from '../../images/google.png'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { GoogleLogin } from '@react-oauth/google'
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
                scope: 'email',
                // redirection_uri: 'http://localhost:3000/',
            });
        }

        gapi.load('client:auth2', start);
    }, []);


    const onSuccess = async (response) => {
        console.log("credential", response);
        localStorage.clear();


        try {
            const auth2 = gapi.auth2.getAuthInstance();
            const userinfo = await auth2.signIn();

            console.log('User signed in:', userinfo.xc);

            // const accessToken = gapi.auth.getToken();
            const accessToken = userinfo.xc.access_token;
            console.log("accessToken:", accessToken);
            console.log(jwtDecode(userinfo.xc.id_token))


            const axiosResponse = await axios.get(
                'https://port-0-backend-1gksli2alpp0ksdw.sel4.cloudtype.app/api/accounts/google/login/get_id_token/',
                {
                    headers: {
                        Authorization: accessToken,
                    },
                }
            );

            console.log("이거", axiosResponse.data);
            localStorage.setItem('accToken', accessToken);
            navigate('/');
            alert('로그인되었습니다.');

        } catch (error) {
            alert('로그인에 실패했습니다.');
            console.error(error);
        }
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
                {/* <GoogleLogin
                        clientId={GOOGLE_REST_API_KEY}
                        text='구글아이디로 로그인하기'
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                    /> */}
                <div className='title'>로그인</div>
                <button className='googlebtn' onClick={onSuccess}>
                    <img className='googlelogo' src={googleLogo} />
                    구글로 시작하기
                </button>
            </Container>
        </Background>
    )
}

export default Main;
