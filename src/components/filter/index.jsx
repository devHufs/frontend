import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Inputbox } from './style';
import { Button } from '@mui/base/Button';
// import { Select } from '@mui/base/Select';
import { Option } from '@mui/base/Option';


import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';



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



    const [showRecentSearches, setShowRecentSearches] = useState(false);

    const handleToggleRecentSearches = () => {
        setShowRecentSearches(!showRecentSearches);
    };

    const handleInputboxClick = () => {
        // 여기에 클릭 시 할 작업 추가
        handleToggleRecentSearches();
    };






    return (
        <Container>
            <div className='search'>
                <Inputbox
                    placeholder='검색어를 입력해 주세요.'
                    onClick={handleInputboxClick}
                />
                <Button className="btn">검색</Button>


                {showRecentSearches && (
                    <div className='recent-searches-container'>
                        <div>
                            <div className='recent-searches'>최근 검색어 1</div>
                            <div className='recent-searches'>최근 검색어 2</div>
                            <div className='recent-searches'>최근 검색어 3</div>
                            <div className='recent-searches'>최근 검색어 4</div>
                            <div className='recent-searches'>최근 검색어 5</div>
                        
                        </div>
                    </div>
                )}
            </div>

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



        </Container>


    );

}

export default Filter;