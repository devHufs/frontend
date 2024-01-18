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
    const [img, setImg] = useState("")
    const [name, setName] = useState("")
    const [stacks, setStacks] = useState([])
    const [formattedDate, setFormattedDate] = useState("")
    const [likeusers, setLikeusers] = useState([])
    const [scrapusers, setScrapusers] = useState([])

    const getfeed = async () => {

        try {
            const response = await axios.get(`http://13.209.7.109/home/${id}/`);
            setFeed(response.data)
            setImg(response.data.user_profile.pic.replace('/media/https%3A', 'https:/'))
            setName(response.data.user_profile.name)
            setStacks(response.data.stack)
            // console.log("개별 글", response.data);

            const dateObject = new Date(response.data.date);
            const year = dateObject.getFullYear();
            const month = dateObject.getMonth() + 1; // Months are zero-based, so we add 1
            const day = dateObject.getDate();

            setLikeusers(response.data.like_users)
            setScrapusers(response.data.scrap_users)

            setFormattedDate(`${year}년 ${month}월 ${day}일 작성`)

        } catch (error) {
            console.log(error);
        }
    };

    const useremail = localStorage.getItem('email')
    const userid = localStorage.getItem('userid')


    const putheart = async () => {

        try {
            const response = await axios.post(`http://13.209.7.109/home/${id}/like/${userid}/`);
            console.log(response);
            setIsHeart(!isHeart);

        } catch (error) {
            console.log(error);
        }
    }

    const putscrap = async () => {

        try {
            const response = await axios.post(`http://13.209.7.109/home/${id}/scrap/${userid}/`);
            console.log(response);
            setIsSrcap(!isScrap);

        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        getfeed();
        getComment();
        // if (likeusers.includes(userid)) {
        //     setIsHeart(true);
        // } else {
        //     setIsHeart(false);
        // }

        // if (scrapusers.includes(userid)) {
        //     setIsSrcap(true);
        // } else {
        //     setIsSrcap(false);
        // }
    })

    const handlePreviewClick = () => {
        setPdfSrc(TestPdf);
        setShowPreview(true);
    };

    const handleClosePreview = () => {
        setPdfSrc('');
        setShowPreview(false);
    };


    const [comment, setComment] = useState([])
    const [commentUser, setCommentUser] = useState(0)
    const getComment = async () => {

        try {
            const response = await axios.get(`http://13.209.7.109/home/${id}/comment/`);
            // console.log('댓글', response.data);

            setComment(response.data)
            setCommentUser(response.data.comment_user)
            // console.log(response.data.comment_user)

        } catch (error) {
            console.log('댓글', error);
        }
    }

    const [text, setText] = useState("");

    const onChangeText = (e) => {
        setText(e.target.value)
    }

    const postfeed = async () => {
        const postData = {
            'body': text
        };

        try {
            const response = await axios.post(`http://13.209.7.109/home/${id}/comment/create/${userid}/`, postData, {

            });
            console.log(response.data);

        } catch (error) {
            if (error.response) {
                console.log('Response data:', error.response.data);
                console.log('Response status:', error.response.status);
                console.log('Response headers:', error.response.headers);
            } else if (error.request) {
                console.log('No response received:', error.request);
            } else {
                console.log('Error during request setup:', error.message);
            }
        }

    };

    const deleteComment = async (comment_id) => {

        try {
            const response = await axios.delete(`http://13.209.7.109/home/${id}/comment/${comment_id}/`);
            console.log('댓글삭제', response);

        } catch (error) {
            console.log('댓글삭제에러', error);
        }
    }


    const formatDate = (inputDate) => {
        const dateObject = new Date(inputDate);

        const year = dateObject.getFullYear();
        const month = dateObject.getMonth() + 1; // Months are zero-based, so we add 1
        const day = dateObject.getDate();
        const hours = dateObject.getHours();
        const minutes = dateObject.getMinutes();

        const monthString = `${month}월`;
        const dayString = `${day}일`;
        const period = hours >= 12 ? '오후' : '오전';
        const hours12 = hours % 12 || 12;
        const formattedDate = `${monthString} ${dayString} ${period} ${hours12}시 ${minutes}분`;

        return formattedDate;
    };




    return (
        <Container>
            <Top>
                <div className='left'>
                    <div className='title'>
                        {feed.title}
                    </div>
                    <div className='info'>
                        <img className='profile' src={img} />
                        <div className='names'>
                            <div className='name'>{name.split('[')[0].trim()}</div>
                            <div className='job'>{feed.job}</div>
                        </div>
                        {stacks.map((stack, index) => (
                            <div className='stacks' key={index}>
                                <div className='stack'>{stack}</div>
                            </div>
                        ))}

                    </div>
                </div>
                <div className='right'>
                    <div className='top'>
                        {isHeart ? (
                            <div className='heart'>
                                <img className='heartimg' src={FullHeart} onClick={putheart} />
                                <div className='heartnum'>{feed.like_cnt}</div>
                            </div>) : (
                            <div className='heart'>
                                <img className='heartimg' src={EmptyHeart} onClick={putheart} />
                                <div className='heartnum'>{feed.like_cnt}</div>
                            </div>

                        )}
                        {isScrap ? (
                            <div className='scrap'>
                                <img className='scrapimg' src={FullScrap} onClick={putscrap} />
                                <div className='scrapnum'>{feed.scrap_cnt}</div>
                            </div>) : (
                            <div className='scrap'>
                                <img className='scrapimg' src={EmptyScrap} onClick={putscrap} />
                                <div className='scrapnum'>{feed.scrap_cnt}</div>
                            </div>
                        )}
                    </div>
                    <div className='down'>
                        <div className='date'>
                            {formattedDate}
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
                        onChange={onChangeText}
                        className='inputbox'
                        placeholder='댓글을 입력하세요.'
                        value={text}
                    />
                    <button className='inputbtn' onClick={postfeed}>작성</button>
                </div>
                {comment.map((item) => (
                    <div className='comments'>
                        <div className='top'>
                            <div className='name'>{item.user_profile.name}</div>
                            <div className='date'>{formatDate(item.date)}</div>
                            {/* {userid === item.comment_user && ( */}
                                <div className='delete' onClick={() => deleteComment(item.id)}>삭제</div>
                            {/* )} */}
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