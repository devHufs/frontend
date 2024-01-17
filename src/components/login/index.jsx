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

    useEffect(() => {
        handleCheckboxChange1(),
        handleCheckboxChange2()

    }, [])


    const onSuccess = async (response) => {
        console.log("credential", response);
        localStorage.clear();

    
        try {
            const auth2 = gapi.auth2.getAuthInstance();
            const userinfo = await auth2.signIn();

            console.log('User signed in:', userinfo.xc);

            // const accessToken = gapi.auth.getToken();
            const accessToken = userinfo.xc.access_token;
            // console.log("accessToken:", accessToken);
            // console.log("id_token", userinfo.xc.id_token)
            console.log("토큰 디코드하면", jwtDecode(userinfo.xc.id_token))
            const email = jwtDecode(userinfo.xc.id_token).email;
            console.log(email);


            const axiosResponse = await axios.get(
                'http://13.209.7.109/api/accounts/google/login/get_id_token/',
                {
                    headers: {
                        Authorization: accessToken,
                    },
                }
            );

            console.log("이거", axiosResponse);
            localStorage.setItem('accToken', accessToken);
            localStorage.setItem('email', email);
            navigate('/');
            alert('로그인되었습니다.');

        } catch (error) {
            alert('로그인에 실패했습니다.');
            console.error(error);
        }
    };

    const [isChecked1, setIsChecked1] = useState(true);
    const [isChecked2, setIsChecked2] = useState(true);
    const [btn, setBtn] = useState(true)


    const handleCheckboxChange1 = () => {
        setIsChecked1(!isChecked1);
        setBtn((isChecked2===true) || (!isChecked1===true));

    }


const handleCheckboxChange2 = () => {
    setIsChecked2(!isChecked2);
    setBtn((isChecked2===true) || (!isChecked1===true));

};



    return (
        <Background>
            <Container>
                <div className='title'>로그인</div>
                <div className='agree'>
                    <input type="checkbox" id='1' className='checkbox' checked={isChecked1}  onChange={handleCheckboxChange1}/>
                    <div className='words'>devHUFS는 한국외대 재학생 / 졸업생을 위한 플랫폼으로, hufs.ac.kr 구글 이메일 계정으로만 로그인이 가능합니다.</div>
                </div>
                <div className='agree'>
                    <input type="checkbox" id='2' className='checkbox' checked={isChecked2} onChange={handleCheckboxChange2}/>
                    <div className='words'>devHUFS에 다음 정보를 제공하는 것에 동의합니다. (이메일, 이름, 프로필사진, 학과)</div>
                </div>
                <button className='googlebtn' onClick={onSuccess} disabled={btn}>
                    <img className='googlelogo' src={googleLogo} />
                    구글로 시작하기
                </button>
            </Container>
        </Background>
    )
}

export default Main;
