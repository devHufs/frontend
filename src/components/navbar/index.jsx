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

    const Tomypage = () => {
        navigate('/mypage')
    };


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

    const email = localStorage.getItem('email');


    const handleLoginButtonClick = () => {
        if (isLoggedin) {
            // 로그아웃 처리
            const auth2 = gapi.auth2.getAuthInstance();
            auth2.signOut().then(() => {
                console.log('User signed out.');
            });

            localStorage.removeItem('accToken');
            localStorage.removeItem('email');
            // googleLogout();
            setIsloggedin(false);
            alert('로그아웃되었습니다.');

        } else {
            // 로그인 처리
            navigate("/login");
        }
    };

    const [user, setUser] = useState([]);
    const [img, setImg] = useState("")

    const getUser = async () => {
        try {
            const response = await axios.get(`http://13.209.7.109/api/accounts/user/${email}/`)
            setUser(response.data)
            setImg(response.data.pic.replace('/media/https%3A', 'https:/'))
            // console.log(user)
            localStorage.setItem('userid', user.user_id);


        } catch (error) {
            console.error('유저 정보', error)
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
        getUser();

    })

    useEffect(() => {
        function start() {
            gapi.client.init({
                client_id: GOOGLE_REST_API_KEY,
                scope: 'email',
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
                {isLoggedin ?
                    <div className='left'>
                        <Link to="/mypage">
                            {/* <img className="profile" src={user.pic.replace('/media/https%3A', 'https:/')}/> */}
                            <img className="profile" src={img} />
                        </Link>
                        <div className='nickname' onClick={Tomypage}>{user.name}</div>
                        <Button className="btn" onClick={handleLoginButtonClick}>로그아웃</Button>
                    </div> :
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