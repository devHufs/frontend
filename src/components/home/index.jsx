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

    const Tofeed = () => {
        navigate('/feed')
    };

    const getAllfeed = async () => {
        try {
            const response = await axios.get('https://port-0-backend-1gksli2alpp0ksdw.sel4.cloudtype.app/home/', {

            }, {       });
            console.log('홈', response.data);

        } catch (error) {
            console.log("홈 불러오기")
            console.error(error)
        }
    };

    useEffect(() => {
        getAllfeed();
    })




    return (
        <div>
            <Filter />
            <Container>
                <Posts onClick={Tofeed}>
                    <div className='boxes'>
                        <div className='post'>
                            <div className='profile'>
                                <img className="profilepic" src={BasicProfile} />
                                <div className='name'>작성자1</div>
                            </div>

                            <div className='up'>
                                <div className='name'>이력서 제목1</div>
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
                    </div>
                </Posts>

                <Posts onClick={Tofeed}>
                    <div className='boxes'>
                        <div className='post'>
                            <div className='profile'>
                                <img className="profilepic" src={BasicProfile} />
                                <div className='name'>작성자2</div>
                            </div>

                            <div className='up'>
                                <div className='name'>이력서 제목2</div>
                                <div className='date'>2023-12-02</div>
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
                    </div>
                </Posts>
                <Posts onClick={Tofeed}>
                    <div className='boxes'>
                        <div className='post'>
                            <div className='profile'>
                                <img className="profilepic" src={BasicProfile} />
                                <div className='name'>작성자3</div>
                            </div>

                            <div className='up'>
                                <div className='name'>이력서 제목3</div>
                                <div className='date'>2023-12-03</div>
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
                    </div>
                </Posts>
                <Posts onClick={Tofeed}>
                    <div className='boxes'>
                        <div className='post'>
                            <div className='profile'>
                                <img className="profilepic" src={BasicProfile} />
                                <div className='name'>작성자4</div>
                            </div>

                            <div className='up'>
                                <div className='name'>이력서 제목4</div>
                                <div className='date'>2023-12-04</div>
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
                    </div>
                </Posts>
                <Posts onClick={Tofeed}>
                    <div className='boxes'>
                        <div className='post'>
                            <div className='profile'>
                                <img className="profilepic" src={BasicProfile} />
                                <div className='name'>작성자5</div>
                            </div>

                            <div className='up'>
                                <div className='name'>이력서 제목5</div>
                                <div className='date'>2023-12-05</div>
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
                    </div>
                </Posts>

            </Container>
        </div>
    );

}

export default Main;