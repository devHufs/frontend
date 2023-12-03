import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BasicProfile from '../../images/BasicProfile.png';
import { Container, Left, Right, Info, Scrap, Posts } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faBookmark } from '@fortawesome/free-solid-svg-icons';



const Main = () => {

    const navigate = useNavigate();

    const Towrite = () => {
        navigate('/write')
    };


    return (
        <Container>
            <Left>
            <div> </div>

            </Left>
            <Right>
                <Info>
                    {/* <img className="profile" src={BasicProfile} /> */}
                </Info>
                <Scrap>
                    <div className='title'>스크랩글</div>
                    <div className='post'>
                        <div className='up'>
                            <div className='name'>이력서 제목</div>
                            <div className='date'>2023-12-01</div>
                        </div>
                        <div className='infos'>
                            <FontAwesomeIcon className='heart' icon={faHeart} />
                            <div>2</div>
                            <FontAwesomeIcon className='comment' icon={faComment} />
                            <div>3</div>
                            <FontAwesomeIcon className='scrap' icon={faBookmark} />
                            <div>1</div>
                        </div>
                    </div>
                </Scrap>
                <Posts>
                    <div className='title'>내 이력서</div>
                    <div className='boxes'>
                        <div className='post'>
                            <div className='up'>
                                <div className='name'>이력서 제목</div>
                                <div className='date'>2023-12-01</div>
                            </div>
                            <div className='infos'>
                                <FontAwesomeIcon className='heart' icon={faHeart} />
                                <div>2</div>
                                <FontAwesomeIcon className='comment' icon={faComment} />
                                <div>3</div>
                                <FontAwesomeIcon className='scrap' icon={faBookmark} />
                                <div>1</div>
                            </div>
                        </div>
                        <div className='post' onClick={Towrite}>
                            <div className='up'>
                                <div className='name'>이력서 작성하기</div>
                            </div>
                        </div>
                    </div>
                </Posts>
            </Right>
        </Container>
    );

}

export default Main;