import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Inputbox, Main, Posts, Search } from './style';
import { Button } from '@mui/base/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { faHeart, faComment, faBookmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {wholeJobsArray, wholeStacksArray} from '../arrays';




const Filter = () => {

    const navigate = useNavigate();

    const Tofeed = (postId) => {
        navigate(`/feed`, {state: {id: postId}});
    };

    const [job, setJob] = useState([]);
    const [stack, setStack] = useState([]);
    const [order, setOrder] = useState('');

    const handleChangeJob = (event) => {
        const {
            target: { value },
        } = event;
        setJob(
            typeof value === 'string' ? value.split(',') : value,
        );
        console.log(job)
    };




    const handleChangeStack = (event) => {
        const {
            target: { value },
        } = event;
        setStack(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const handleChangeOrder = (event) => {
        const {
            target: { value },
        } = event;
        setOrder(value);
    };

    const [inputword, setInputword] = useState("")

    const onChangeInput = (e) => {
        setInputword(e.target.value)
        console.log('dd', inputword)
    }

    const [data, setData] = useState([]);
    const [searched, setSearched] = useState([]);

    const handleClickBtn = async (selectedSearch) => {
        try {
            const response = await axios.get(`http://13.209.7.109/home/search/${inputword}/`, {
                withCredentials: 'include',
            });

            setInputword(selectedSearch);
            setSearched(response.data);
            console.log("검색", response.data);

            const storedData = JSON.parse(localStorage.getItem('recentSearches')) || [];
            setData(storedData);
            if (data.length < 5) {
                setData([...data, inputword]);
            } else {
                setData([...data.slice(1), inputword]);
            }

            localStorage.setItem('recentSearches', JSON.stringify(data));
            console.log(JSON.parse(localStorage.getItem('recentSearches')))

        } catch (error) {
            console.log("검색");
            console.error(error);
        }
    }


    const handleClick = async (selectedSearch) => {
        setInputword(selectedSearch);

        try {
            const response = await axios.get(`http://13.209.7.109/home/search/${selectedSearch}/`, {
                withCredentials: 'include',
            });

            setSearched(response.data);
            console.log("검색", response.data);
            setInputword(selectedSearch);

            const storedData = JSON.parse(localStorage.getItem('recentSearches')) || [];
            setData((data) => {
                const newData = data.length < 5 ? [...data, selectedSearch] : [...data.slice(1), selectedSearch];
                localStorage.setItem('recentSearches', JSON.stringify(newData));
                console.log(JSON.parse(localStorage.getItem('recentSearches')))
                return newData;
            });

            setShowRecentSearches(false); // Close the recent searches container
        } catch (error) {
            console.log("검색");
            console.error(error);
        }
    };

    const filter = async (selectedStack) => {

        try {
            const response = await axios.get(`http://13.209.7.109/home/filter/${selectedStack}/`, {
                withCredentials: 'include',
            });

            setSearched(response.data);
            console.log("필터링", response.data);

        } catch (error) {
            console.log("필터링");
            console.error(error);
        }
    };




    const bringRecentSearches = () => {
        const storedData = JSON.parse(localStorage.getItem('recentSearches')) || [];
        setData(storedData);
    }




    const [showRecentSearches, setShowRecentSearches] = useState(false);

    const handleInputboxClick = () => {
        setShowRecentSearches(!showRecentSearches);
    };

    const closeToggleRecentSearches = () => {
        setShowRecentSearches(false);
    }

    useEffect(() => {
        bringRecentSearches();
    }, []);

    const inputBoxRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (inputBoxRef.current && !inputBoxRef.current.contains(event.target)) {
                closeToggleRecentSearches();
            }
        };

        window.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);


    const reset = () => {
        window.location.reload();
    }





    return (
        <Main>
            <Container>
                <div className='search'>
                    <Inputbox
                        ref={inputBoxRef}
                        placeholder='검색어를 입력해 주세요.'
                        onClick={handleInputboxClick}
                        onChange={onChangeInput}
                    />
                    <Button className="btn" onClick={handleClickBtn}>검색</Button>


                    {showRecentSearches && (
                        <div className='recent-searches-container'>
                            <div>
                                {data.map((search, index) => (
                                    <div key={index} className='recent-searches' onClick={() => handleClick(search)}>
                                        {search}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                <div className='select'>
                    <Select
                        className="checkbox"
                        // multiple
                        value={job}
                        displayEmpty
                        renderValue={(v) => (v?.length ? v : '직무')}
                        onChange={handleChangeJob}
                        sx={{ fontSize: '13px', paddingTop: '2px' }}
                    // MenuProps={MenuProps}
                    >
                        <MenuItem disabled value="" sx={{ fontSize: '13px', paddingTop: '2px' }}>
                            직무
                        </MenuItem>
                        {wholeJobsArray.map((item) => (
                        <MenuItem sx={{ fontSize: '13px', paddingTop: '2px' }}
                            value={item}>{item}</MenuItem>
                        ))}

                    </Select>
                    <Select
                        className="checkbox"
                        // multiple
                        value={stack}
                        onChange={handleChangeStack}
                        displayEmpty
                        renderValue={(v) => (v?.length ? v : '기술스택')}
                        // inputProps={{ 'aria-label': 'Without label' }}
                        sx={{ fontSize: '13px', paddingTop: '2px' }}
                    // MenuProps={MenuProps}
                    >
                        <MenuItem disabled value="" sx={{ fontSize: '13px', paddingTop: '2px' }}>
                            기술스택
                        </MenuItem>
                        {wholeStacksArray.map((item) => (
                        <MenuItem onClick={() => filter(item)} sx={{ fontSize: '13px', paddingTop: '2px' }}
                            value={item}>{item}</MenuItem>
                        ))}
                    </Select>
                    <Select
                        className="checkbox"
                        value={order}
                        displayEmpty
                        renderValue={(v) => (v?.length ? v : '정렬')}
                        sx={{ fontSize: '13px', paddingTop: '2px' }}
                        onChange={handleChangeOrder}
                    // MenuProps={MenuProps}
                    >
                        <MenuItem disabled value="" sx={{ fontSize: '13px', paddingTop: '2px' }}>
                            <em>정렬</em>
                        </MenuItem>
                        <MenuItem sx={{ fontSize: '13px', paddingTop: '2px' }}
                            value="최신순">최신순</MenuItem>
                        <MenuItem sx={{ fontSize: '13px', paddingTop: '2px' }}
                            value="좋아요 많은순">좋아요 많은순</MenuItem>
                        <MenuItem sx={{ fontSize: '13px', paddingTop: '2px' }}
                            value="데이터사이언스">스크랩 많은순</MenuItem>
                    </Select>
                </div>


            </Container>
            {searched.map((item) => (
                <Search>
                    <div className='title'>
                        <div>검색 결과</div>
                        <div className='reset' onClick={reset}>검색 결과 삭제</div>
                    </div>

                    <Posts onClick={() => Tofeed(item.id)}>
                        <div className='boxes'>
                            <div className='post'>
                                <div className='profile'>
                                    <img className="profilepic" src={item.user_profile.pic.replace('/media/https%3A', 'https:/')} />
                                    <div className='name'>{item.user_profile.name.split('[')[0].trim()}</div>
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
                               

                </Search>
                 ))}
        </Main>


    );

}

export default Filter;