import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Top, Content, Comment, Preview } from './style';
import EmptyHeart from '../../images/EmptyHeart.svg';
import FullHeart from '../../images/FullHeart.svg';
import EmptyScrap from '../../images/EmptyScrap.svg';
import FullScrap from '../../images/FullScrap.svg';
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

    const [isHeart, setIsHeart] = useState(false);
    const [isScrap, setIsSrcap] = useState(false);

    const [feed, setFeed] = useState([]);

    const getfeed = async () => {

        try {
            const response = await axios.get(`http://13.209.7.109:8000/home/${id}/`);
            setFeed(response.data)
            console.log("개별 글", response.data);

        } catch (error) {
            console.log(error);
        }
    };
    
    const useremail = localStorage.getItem('email')

    const putheart = async () => {

        try {
            const response = await axios.post(`http://13.209.7.109:8000/home/${id}/like/${useremail}/`);
            console.log(response);
            setIsHeart(!isHeart);

        } catch (error) {
            console.log(error);
        }
    }

    const putscrap = async () => {

        try {
            const response = await axios.post(`http://13.209.7.109:8000/home/${id}/scrap/${useremail}/`);
            console.log(response);
            setIsSrcap(!isScrap);

        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        getfeed();
        getComment();
    }, [])

    const handlePreviewClick = () => {
        setPdfSrc(TestPdf);
        setShowPreview(true);
    };

    const handleClosePreview = () => {
        setPdfSrc('');
        setShowPreview(false);
    };


    const [comment, setComment] = useState([])
    const getComment = async () => {

        try {
            const response = await axios.get(`http://13.209.7.109:8000/home/${id}/comment/`);
            console.log(response.data);
            setComment(response.data)

        } catch (error) {
            console.log(error);
        }
    }


    return (
        <Container>
            <Top>
                <div className='left'>
                    <div className='title'>
                        {feed.title}
                    </div>
                    <div className='info'>
                        <img className='profile' src={BasicProfile} />
                        <div className='names'>
                            <div className='name'>윤서희</div>
                            <div className='job'>{feed.job}</div>
                        </div>
                        <div className='stacks'>
                            <div className='stack'>Javascript</div>
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <div className='top'>
                        {isHeart ? (
                            <div className='heart'>
                                <img className='heartimg' src={FullHeart} onClick={putheart}/>
                                <div className='heartnum'>{feed.like_cnt}</div>
                            </div>) : (
                            <div className='heart'>
                                <img className='heartimg' src={EmptyHeart} onClick={putheart}/>
                                <div className='heartnum'>{feed.like_cnt}</div>
                            </div>

                        )}
                        {isScrap ? (
                            <div className='scrap'>
                                <img className='scrapimg' src={FullScrap} onClick={putscrap}/>
                                <div className='scrapnum'>{feed.scrap_cnt}</div>
                            </div>) : (
                            <div className='scrap'>
                                <img className='scrapimg' src={EmptyScrap} onClick={putscrap}/>
                                <div className='scrapnum'>{feed.scrap_cnt}</div>
                            </div>
                        )}
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
                    <a href={feed.link} className='link'>
                        포트폴리오 링크: {feed.link}
                    </a>
                    <div className='file'>
                        <div className='filelink'>
                            포트폴리오 PDF
                        </div>
                        <button className='gotofile' onClick={handlePreviewClick}>파일 미리보기</button>
                    </div>
                </div>
                {showPreview && <PreviewModal src={pdfSrc} onClose={handleClosePreview} />}
                <div className='content'>
                    {feed.body}
                </div>
            </Content>
            <Comment>
                <div className='number'>
                    <img className='commentimg' src={CommentImg} />
                    <div className='commentnum'>댓글 {feed.comment_cnt}개</div>
                </div>
                <div className='input'>
                    <input
                        className='inputbox'
                        placeholder='댓글을 입력하세요.'
                    />
                    <button className='inputbtn'>작성</button>
                </div>
                {comment.map((item) => (
                <div className='comments'>
                    <div className='top'>
                        <div className='name'>이채영</div>
                        <div className='date'>1월 8일 오전 11시 30분</div>
                    </div>
                    <div className='bottom'>
                        {item.body}
                    </div>
                </div>
                ))}
            </Comment>
        </Container>
    )
};

export default Main;