import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BasicProfile from '../../images/profiletest.png';
import BasicImage from '../../images/testback.png';
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
                <div className='pictures'>
                    <img className="bigpic" src={BasicImage} />
                    <img className='profileimg' src={BasicImage} />
                </div>
                <div className='name'>윤서희</div>
                <div className='major'>재학 | ELLT학과</div>
            </Left>
            <Right>
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
                <Scrap>
                    <div className='title'>스크랩 글</div>
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
                <Info>
                    <div className='title'>댓글 단 글</div>
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
                    </div>                </Info>


            </Right>
        </Container>
    );

}

export default Main;