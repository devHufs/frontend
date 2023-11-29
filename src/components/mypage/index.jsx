import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BasicProfile from '../BasicProfile.png';
import { Container, Left, Right, Info, Scrap, Posts } from './style';




const Main = () => {
    return (
        <Container>
            <Left>
                <Info>
                    <img className="profile" src={BasicProfile} />
                </Info>
                <Scrap>
                    <div className='title'>스크랩글</div>
                    <div className='post'>
                        글
                    </div>
                </Scrap>
                <Posts>
                    <div className='title'>내 이력서</div>
                    <div className='post'>
                        이력서
                    </div>
                </Posts>
            </Left>
            <Right>
                <div>hello</div>
            </Right>
        </Container>
    );

}

export default Main;