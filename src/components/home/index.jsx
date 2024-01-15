import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Left, Right, Info, Scrap, Posts } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faBookmark } from '@fortawesome/free-solid-svg-icons'
import Filter from '../filter';
import BasicProfile from '../../images/BasicProfile.png';



const Main = () => {

    const navigate = useNavigate();

    const Tofeed = (postId) => {
        navigate(`/feed`, {state: {id: postId}});
    };

    const [allfeed, setAllfeed] = useState([])

    const getAllfeed = async () => {
        try {
            const response = await axios.get('http://13.209.7.109:8000/home/')
            // console.log('홈', response.data);
            setAllfeed(response.data)
            console.log("전체 글", response.data)


        } catch (error) {
            console.log("홈 불러오기")
            console.error(error)
        }
    };

    useEffect(() => {
        getAllfeed();
    }, [])


    return (
        <div>
            <Filter />
            <Container>
                {allfeed.map((item) => (
                    <Posts onClick={() => Tofeed(item.id)}>
                        <div className='boxes'>
                            <div className='post'>
                                <div className='profile'>
                                    <img className="profilepic" src="https://lh3.googleusercontent.com/a/ACg8ocJkkqCnzfZ5vzWqtMT-L2cddT4Me4fgX6qTHI_N4LRr=s96-c" />
                                    <div className='name'>작성자1</div>
                                </div>

                                <div className='up'>
                                    <div className='name'>{item.title}</div>
                                    <div className='date'>{new Date(item.date).toISOString().slice(0, 10)}</div>
                                </div>
                                <div className='infos'>
                                    <FontAwesomeIcon className='heart' icon={faHeart} />
                                    <div>{item.like_cnt}</div>
                                    <FontAwesomeIcon className='comment' icon={faComment} />
                                    <div>{item.comment_cnt}</div>
                                    <FontAwesomeIcon className='scrap' icon={faBookmark} />
                                    <div>{item.scrap_cnt}</div>
                                </div>
                            </div>
                        </div>
                    </Posts>
                ))}

            </Container>
        </div>
    );

}

export default Main;