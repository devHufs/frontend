import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BasicProfile from '../../images/profiletest.png';
import BasicImage from '../../images/testback.png';
import {
    Container, Left, Right, Info, Scrap, Posts, Stacks, Stackinput, Stack,
    DropDownBox, DropDownItem, Origin
} from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faBookmark } from '@fortawesome/free-solid-svg-icons';
import Upload from '../../images/Upload.png'
import { wholeJobsArray, wholeStacksArray } from '../arrays';




const Main = () => {

    const navigate = useNavigate();

    const Tofeed = (postId) => {
        navigate(`/feed`, {state: {id: postId}});
    };

    const ToEdit = (postId) => {
        navigate(`/edit`, {state: {id: postId}});
    };

    const Towrite = () => {
        navigate('/write')
    };


    const email = localStorage.getItem('email');

    const [user, setUser] = useState([]);
    const [img, setImg] = useState("")
    const [name, setName] = useState("")
    const [major, setMajor] = useState("")
    const [current, setCurrent] = useState("")
    const [userstack, setUserstack] = useState([])

    const getUser = async () => {
        try {
            const response = await axios.get(`http://13.209.7.109/api/accounts/user/${email}/`)
            setUser(response.data)
            setImg(response.data.pic.replace('/media/https%3A', 'https:/'))
            // console.log(user)
            setName(user.name.split('[')[0].trim())
            setMajor(user.name.substring(user.name.indexOf('/') + 1, user.name.indexOf(']')).trim())
            setCurrent(user.name.substring(user.name.indexOf('[') + 1, user.name.indexOf('/')).trim())
            setUserstack(user.stack)

        } catch (error) {
            console.error('유저 정보', error)
        }
    };

    useEffect(() => {
        getUser();
    })

    const [stack, setStack] = useState("")
    const [isHaveInputStack, setIsHaveInputStack] = useState(false)
    const [dropDownStackIndex, setDropDownStackIndex] = useState(-1)
    const [chosenStack, setChosenStack] = useState([]);
    const [dropDownStacks, setDropDownStacks] = useState(wholeStacksArray)
    const [job, setJob] = useState("")
    const [isHaveInputJob, setIsHaveInputJob] = useState(false)
    const [dropDownJobs, setDropDownJobs] = useState(wholeJobsArray)
    const [dropDownJobIndex, setDropDownJobIndex] = useState(-1)
    const [chosenJob, setChosenJob] = useState("");



    const onChangeStack = (e) => {
        setStack(e.target.value)
    }

    const showDropDownStacks = () => {
        if (stack === '') {
            setIsHaveInputStack(false)
            setDropDownStacks([])
        } else {
            const choosenTextList = wholeStacksArray.filter(textItem =>
                textItem.includes(stack)
            )
            setIsHaveInputStack(true)
            setDropDownStacks(choosenTextList)
        }
    }

    const onChangeJob = (e) => {
        setJob(e.target.value)
    }

    const showDropDownJobs = () => {
        if (job === '') {
            setIsHaveInputJob(false)
            setDropDownJobs([])
        } else {
            const choosenTextList = wholeJobsArray.filter(textItem =>
                textItem.includes(job)
            )
            setIsHaveInputJob(true)
            setDropDownJobs(choosenTextList)
        }
    }
    useEffect(showDropDownJobs, [job])

    const clickDropDownJob = clickedItem => {
        setJob(clickedItem)
        setIsHaveInputJob(false)
        setChosenJob(clickedItem);
        setIsHaveInputStack(false)
        console.log(chosenJob)
    }

    const clickDropDownStack = clickedItem => {
        setStack("")
        setIsHaveInputStack(false)
        setChosenStack([...chosenStack, clickedItem]);
        console.log(chosenStack)
    }

    useEffect(showDropDownStacks, [stack])


    const postfeed = async () => {
        // const formData = new FormData();

        // formData.append('stack', chosenStack);
        // // formData.append('job', chosenJob);
        const postData = {
            'stack': chosenStack,
            'job': chosenJob
        };

        try {
            const response = await axios.patch(`http://13.209.7.109/api/accounts/user/${email}/`, postData, {
                // headers: {
                //     "Content-Type": "multipart/form-data",
                // }
            });
            console.log(response.data);
            alert('게시되었습니다.');
            navigate('/mypage');
            setOpenjob(false)
            setOpenstack(false)


        } catch (error) {
            alert('업로드에 실패했습니다.')
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


    const [openjob, setOpenjob] = useState(false)
    const [openstack, setOpenstack] = useState(false)

    const Openjob = () => {
        setOpenjob(!openjob);
    }

    const Openstack = () => {
        setOpenstack(!openstack);
    }


    const userid = localStorage.getItem('userid')

    const [myfeed, setMyfeed] = useState([])

    const getMyfeed = async () => {
        try {
            const response = await axios.get(`http://13.209.7.109/home/${userid}/contents/`)
            console.log('홈', response.data);
            setMyfeed(response.data)
            console.log("내 글", response.data)

        } catch (error) {
            console.log("내 글")
            console.error(error)
        }
    };

    const deleteMyfeed = async (postid) => {
        try {
            const response = await axios.delete(`http://13.209.7.109/home/${postid}/delete/`)
            console.log('홈', response.data);
            alert('삭제되었습니다')
            window.location.reload();

        } catch (error) {
            console.log("내 글")
            console.error(error)
        }
    };

    const [myscrap, setMyscrap] = useState([])

    const getMyscrap = async () => {
        try {
            const response = await axios.get(`http://13.209.7.109/home/${userid}/scraps/`)
            // console.log('홈', response.data);
            setMyscrap(response.data.contents)
            console.log("스크랩", response.data.contents)

        } catch (error) {
            console.log("내 글")
            console.error(error)
        }
    };

    const [mylike, setMylike] = useState([])

    const getMylike = async () => {
        try {
            const response = await axios.get(`http://13.209.7.109/home/${userid}/likes/`)
            // console.log('홈', response.data);
            setMylike(response.data.contents)
            console.log("좋아요", response.data.contents)

        } catch (error) {
            console.log("내 글")
            console.error(error)
        }
    };

    useEffect(() => {
        getMyfeed();
        getMyscrap();
        getMylike();
    }, [])





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
                {openjob ? (
                    <Stacks>
                        <div className='top'>
                            <div className='title'>직무</div>
                            <div className='edit' onClick={Openjob}>취소</div>
                        </div>
                        <Stackinput
                            placeholder='직무를 입력하세요.'
                            value={job}
                            onChange={onChangeJob}
                        />
                        {isHaveInputJob && (
                            <DropDownBox>
                                {dropDownJobs.length === 0 && (
                                    <DropDownItem>찾을 수 없음</DropDownItem>
                                )}
                                {dropDownJobs.map((dropDownItem, dropDownIndex) => {
                                    return (
                                        <DropDownItem
                                            key={dropDownIndex}
                                            onClick={() => clickDropDownJob(dropDownItem)}
                                            className={
                                                dropDownJobIndex === dropDownIndex ? 'selected' : ''
                                            }
                                        >
                                            {dropDownItem}
                                        </DropDownItem>
                                    )
                                })}
                            </DropDownBox>
                        )}
                        <button className='button' onClick={postfeed}>등록</button>
                    </Stacks>
                ) : (
                    <Origin>
                        <div className='title'>
                            <div className='origin-stack'>직무</div>
                            <div className='edit' onClick={Openjob}>수정</div>
                        </div>
                        <div className='job'>{user.job}</div>

                    </Origin>
                )}
                {openstack ? (
                    <Stacks>
                        <div className='top'>
                            <div className='title'>기술스택</div>
                            <div className='edit' onClick={Openstack}>취소</div>
                        </div>
                        <Stackinput
                            placeholder='기술스택을 입력하세요.'
                            value={stack}
                            onChange={onChangeStack}
                        />
                        {isHaveInputStack && (
                            <DropDownBox>
                                {dropDownStacks.length === 0 && (
                                    <DropDownItem>찾을 수 없음</DropDownItem>
                                )}
                                {dropDownStacks.map((dropDownItem, dropDownIndex) => {
                                    return (
                                        <DropDownItem
                                            key={dropDownIndex}
                                            onClick={() => clickDropDownStack(dropDownItem)}
                                            className={
                                                dropDownStackIndex === dropDownIndex ? 'selected' : ''
                                            }
                                        >
                                            {dropDownItem}
                                        </DropDownItem>
                                    )
                                })}
                            </DropDownBox>
                        )}
                        <button className='button' onClick={postfeed}>등록</button>

                        <Stack>
                            {chosenStack.map((chosenStack) => {
                                return (
                                    <div>
                                        <div className='bubble'>
                                            <div className='chosenstack'>{chosenStack}</div>
                                            <div className='delete'>x</div>
                                        </div>
                                    </div>

                                )
                            })}
                        </Stack>
                    </Stacks>) : (
                    <Origin>
                        <div className='title'>
                            <div className='origin-stack'>기술스택</div>
                            <div className='edit' onClick={Openstack}>수정</div>
                        </div>
                        {userstack.map((item) => (
                            <div className='job'>{item}</div>
                        ))}

                    </Origin>)}
            </Left>
            <Right>
                <Posts>
                    <div className='title'>내 이력서</div>
                    <div className='boxes'>
                        <div className='post' onClick={Towrite}>
                            <div className='up'>
                                <img className='upload' src={Upload} />
                                <div className='more'>이력서 작성하기</div>
                            </div>
                        </div>
                        {myfeed.map((item) => (
                            <div className='post'>
                                <div className='up' onClick={() => Tofeed(item.id)}>
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
                                    {/* <div className='edit' onClick={() => ToEdit(item.id)}>수정</div> */}
                                    <div className='delete' onClick={() => deleteMyfeed(item.id)}>삭제</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Posts>
                <Scrap>
                    <div className='title'>스크랩 글</div>
                    <div className='container'>
                        {myscrap.map((item) => (
                            <div className='post' onClick={() => Tofeed(item.id)}>
                                <div className='up'>
                                    <div className='user'>
                                        <img className='img' src={item.user_profile.pic.replace('/media/https%3A', 'https:/')} />
                                        <div className='username'>{item.user_profile.name.split('[')[0].trim()}</div>
                                    </div>
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
                        ))}
                    </div>
                </Scrap>
                <Info>
                    <div className='title'>좋아요 한 글</div>
                    <div className='container'>
                        {mylike.map((item) => (

                            <div className='post' onClick={() => Tofeed(item.id)}>
                                <div className='up'>
                                    <div className='user'>
                                        <img className='img' src={item.user_profile.pic.replace('/media/https%3A', 'https:/')} />
                                        <div className='username'>{item.user_profile.name.split('[')[0].trim()}</div>
                                    </div>
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
                            </div>))}
                    </div>
                </Info>
            </Right>
        </Container>
    );

}

export default Main;