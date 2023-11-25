import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Logoimg } from './style';
import Logo from '../logo.svg'
import { Button } from '@mui/base/Button';
import BasicProfile from '../BasicProfile.png';



const Main = () => {

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
                <img className="profile" src={BasicProfile} />
                {isLoggedin ?
                <Button className="btn" onClick={handleLoginButtonClick}>로그아웃</Button> :
                <Button className="btn" onClick={handleLoginButtonClick}>로그인</Button>
}
            </div>
        </Container>
    );

}

export default Main;