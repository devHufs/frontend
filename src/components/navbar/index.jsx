import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Itsmodal, ModalContainer } from './style';
import Logo from '../logo.svg'
import { Button } from '@mui/base/Button';
import BasicProfile from '../BasicProfile.png';
import Login from '../login';



const Main = () => {

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
            localStorage.removeItem('token');
            setIsloggedin(false);
        } else {
            // 로그인 처리
            navigate("/login");
        }
    };


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