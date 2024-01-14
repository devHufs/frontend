import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Top, Content, Comment, Preview } from './style';
import EmptyHeart from '../../images/EmptyHeart.svg';
import EmptyScrap from '../../images/EmptyScrap.svg';
import BasicProfile from '../../images/BasicProfile.png';
import CommentImg from '../../images/Comment.png';
import TestPdf from '../../images/test용.pdf';



const PreviewModal = ({ src, onClose }) => {

    return (
        <Preview>
            <div className='modalback' onClick={onClose}></div>
            <div className='previewpdf'>
                {/* <button className='pdfbtn' onClick={onClose}>PDF 닫기</button> */}
                <iframe src={src} title='Preview' width='100%' height='500px' />
            </div>
        </Preview>
    );
};

const Main = () => {

    const { state } = useLocation();
    const { id } = state;

    const [showPreview, setShowPreview] = useState(false);
    const [pdfSrc, setPdfSrc] = useState('');

    const getfeed = async () => {

        try {
            const response = await axios.get(`http://3.34.98.88:8000/home/${id}/`);
            console.log(response.data);

        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        getfeed();
    }, [])

    const handlePreviewClick = () => {
        setPdfSrc(TestPdf);
        setShowPreview(true);
    };

    const handleClosePreview = () => {
        setPdfSrc('');
        setShowPreview(false);
    };

    return (
        <Container>
            <Top>
                <div className='left'>
                    <div className='title'>
                        웹 개발자 윤서희의 포트폴리오
                    </div>
                    <div className='info'>
                        <img className='profile' src={BasicProfile} />
                    </div>
                </div>
                <div className='right'>
                    <div className='top'>
                        <div className='heart'>
                            <img className='heartimg' src={EmptyHeart} />
                            <div className='heartnum'>34</div>
                        </div>
                        <div className='scrap'>
                            <img className='scrapimg' src={EmptyScrap} />
                            <div className='scrapnum'>7</div>
                        </div>
                    </div>
                    <div className='down'>
                        <div className='date'>
                            2024년 1월 8일 작성
                        </div>
                    </div>
                </div>
            </Top>
            <Content>
                <div className='files'>
                    <a href="https://www.naver.com/" className='link'>
                        링크: www.naver.com
                    </a>
                    <div className='file'>
                        <div className='filelink'>
                            {TestPdf}
                        </div>
                        <button className='gotofile' onClick={handlePreviewClick}>파일 미리보기</button>
                    </div>
                </div>
                {showPreview && <PreviewModal src={pdfSrc} onClose={handleClosePreview} />}
            </Content>
            <Comment>
                <div className='number'>
                    <img className='commentimg' src={CommentImg} />
                    <div className='commentnum'>댓글 15개</div>
                </div>
                <div className='input'>
                    <input
                        className='inputbox'
                        placeholder='댓글을 입력하세요.'
                    />
                    <button className='inputbtn'>작성</button>
                </div>
                <div className='comments'>
                    <div className='top'>
                        <div className='name'>이채영</div>
                        <div className='date'>1월 8일 오전 11시 30분</div>
                    </div>
                    <div className='bottom'>
                        정말 멋져요.
                    </div>
                </div>
                <div className='comments'>
                    <div className='top'>
                        <div className='name'>이채영</div>
                        <div className='date'>1월 8일 오전 11시 30분</div>
                    </div>
                    <div className='bottom'>
                        정말 멋져요.
                    </div>
                </div>
                <div className='comments'>
                    <div className='top'>
                        <div className='name'>이채영</div>
                        <div className='date'>1월 8일 오전 11시 30분</div>
                    </div>
                    <div className='bottom'>
                        정말 멋져요.
                    </div>
                </div>

            </Comment>
        </Container>
    )
};

export default Main;