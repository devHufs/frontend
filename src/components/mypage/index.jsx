import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BasicProfile from '../../images/profiletest.png';
import BasicImage from '../../images/testback.png';
import { Container, Left, Right, Info, Scrap, Posts } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faBookmark } from '@fortawesome/free-solid-svg-icons';
import Upload from '../../images/Upload.png'



const Main = () => {

    const navigate = useNavigate();

    const Towrite = () => {
        navigate('/write')
    };

    const Toedit = () => {
        navigate('/edit')
    }

    const email = localStorage.getItem('email');

    const [user, setUser] = useState([]);
    const [img, setImg] = useState("")
    const [name, setName] = useState("")
    const [major, setMajor] = useState("")
    const [current, setCurrent] = useState("")

    const getUser = async () => {
        try {
            const response = await axios.get(`http://13.209.7.109:8000/api/accounts/user/${email}/`)
            setUser(response.data)
            setImg(response.data.pic.replace('/media/https%3A', 'https:/'))
            console.log(user)
            setName(user.name.split('[')[0].trim())
            setMajor(user.name.substring(user.name.indexOf('/') + 1, user.name.indexOf(']')).trim())
            setCurrent(user.name.substring(user.name.indexOf('[') + 1, user.name.indexOf('/')).trim())

        } catch (error) {
            console.error('유저 정보', error)
        }
    };

    useEffect(() => {
        getUser();
    })



    return (
        <Container>
            <Left>
                <div className='pictures'>
                    <img className="bigpic" src={BasicImage} />
                    <img className='profileimg' src={img} />
                </div>
                <div className='name'>{name}</div>
                <div className='major'>학과: {major}</div>
                <div className='major'>학적: {current}</div>
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
                                <div className='edit' onClick={Toedit}>수정</div>
                                <div className='delete'>삭제</div>
                            </div>
                        </div>
                        <div className='post' onClick={Towrite}>
                            <div className='up'>
                                <img className='upload' src={Upload} />
                                <div className='more'>이력서 작성하기</div>
                            </div>
                        </div>
                    </div>
                </Posts>
                <Scrap>
                    <div className='title'>스크랩 글</div>
                    <div className='post'>
                        <div className='up'>
                            <div className='user'>
                                <img className='img' src={img} />
                                <div className='username'>윤서희</div>
                            </div>
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
                        <div className='user'>
                                <img className='img' src={img} />
                                <div className='username'>윤서희</div>
                            </div>
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
                </Info>
            </Right>
        </Container>
    );

}

export default Main;