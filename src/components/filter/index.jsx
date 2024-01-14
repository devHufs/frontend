import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Inputbox } from './style';
import { Button } from '@mui/base/Button';

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';



const Filter = () => {

    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: 200,
                width: 150,
            },
        },
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
    }

    const [data, setData] = useState([]);

    const handleClickBtn = (selectedSearch) => {
        setInputword(selectedSearch);

        const storedData = JSON.parse(localStorage.getItem('recentSearches')) || [];
        setData(storedData);
        if (data.length < 5) {
            setData([...data, inputword]);
        } else {
            setData([...data.slice(1), inputword]);
        }

        localStorage.setItem('recentSearches', JSON.stringify(data));
        console.log(JSON.parse(localStorage.getItem('recentSearches')))
    }

    const handleClick = (selectedSearch) => {
        setInputword(selectedSearch);
    
        const storedData = JSON.parse(localStorage.getItem('recentSearches')) || [];
        setData((data) => {
          const newData = data.length < 5 ? [...data, selectedSearch] : [...data.slice(1), selectedSearch];
          localStorage.setItem('recentSearches', JSON.stringify(newData));
          console.log(JSON.parse(localStorage.getItem('recentSearches')))
          return newData;
        });
    
        setShowRecentSearches(false); // Close the recent searches container
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







    return (
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
                    multiple
                    value={job}
                    onChange={handleChangeJob}
                    MenuProps={MenuProps}
                >
                    <MenuItem disabled value="">
                        <em>직무</em>
                    </MenuItem>
                    <MenuItem value="프론트엔드">프론트엔드</MenuItem>
                    <MenuItem value="백엔드">백엔드</MenuItem>
                    <MenuItem value="데이터사이언스">데이터사이언스</MenuItem>
                </Select>
                <Select
                    className="checkbox"
                    multiple
                    value={stack}
                    onChange={handleChangeStack}
                    inputProps={{ 'aria-label': 'Without label' }}
                    MenuProps={MenuProps}
                >
                    <MenuItem disabled value="">
                        기술스택
                    </MenuItem>
                    <MenuItem value="자바스크립트">자바스크립트</MenuItem>
                    <MenuItem value="파이썬">파이썬</MenuItem>
                    <MenuItem value="자바">자바</MenuItem>
                </Select>
                <Select
                    className="checkbox"
                    value={order}
                    onChange={handleChangeOrder}
                    MenuProps={MenuProps}
                >
                    <MenuItem disabled value="">
                        <em>정렬</em>
                    </MenuItem>
                    <MenuItem value="최신순">최신순</MenuItem>
                    <MenuItem value="좋아요 많은순">좋아요 많은순</MenuItem>
                    <MenuItem value="데이터사이언스">스크랩 많은순</MenuItem>
                </Select>
            </div>


        </Container>


    );

}

export default Filter;