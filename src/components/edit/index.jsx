import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {
    Container, Title, Word, Content, PostButton, Titleinput,
    Info, Filearea, Maininput, Job, Stacks, DropDownBox, DropDownItem,
    Jobinput, Stackinput, MaxLengthText, MainTextarea, Stack
} from "./style";
import {wholeJobsArray, wholeStacksArray} from '../arrays';

const Main = () => {


    const { state } = useLocation();
    const { id } = state;

    const [feed, setFeed] = useState("");


    const getfeed = async () => {

        try {
            const response = await axios.get(`http://13.209.7.109:8000/home/${id}/`);
            setFeed(response.data)
            // console.log("개별 글", response.data);

        } catch (error) {
            console.log(error);
        }
    };

    

    useEffect(() => {
        getfeed();
    }, [])

    const fileInput = React.createRef();
    const formRef = React.createRef();
    const navigate = useNavigate();

    const handleButtonClick = () => {
        fileInput.current.click();
    };

    const [title, setTitle] = useState("");
    useEffect(() => {
        setTitle(feed.title);
    }, [feed.title]);

    const [content, setContent] = useState("")
    useEffect(() => {
        setContent(feed.body);
    }, [feed.body]);

    const [job, setJob] = useState("")
    useEffect(() => {
        setJob(feed.job);
    }, [feed.job]);

    const [stack, setStack] = useState("")
    const [file, setFile] = useState("");
    useEffect(() => {
        setFile(feed.attached);
    }, [feed.attached]);

    const [filename, setFilename] = useState(null)

    const [link, setLink] = useState("");


    const [isHaveInputJob, setIsHaveInputJob] = useState(false)
    const [isHaveInputStack, setIsHaveInputStack] = useState(false)
    const [dropDownJobs, setDropDownJobs] = useState(wholeJobsArray)
    const [dropDownStacks, setDropDownStacks] = useState(wholeStacksArray)
    const [dropDownJobIndex, setDropDownJobIndex] = useState(-1)
    const [dropDownStackIndex, setDropDownStackIndex] = useState(-1)
    const [chosenJob, setChosenJob] = useState("");
    const [chosenStack, setChosenStack] = useState([]);




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
    useEffect(showDropDownStacks, [stack])


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



    const onChangeTitle = (e) => {
        setTitle(e.target.value)
    }

    const onChangeContent = (e) => {
        setContent(e.target.value)
    }

    const onChangeJob = (e) => {
        setJob(e.target.value)
    }

    const onChangeStack = (e) => {
        setStack(e.target.value)
    }

    const onChangeLink = (e) => {
        setLink(e.target.value);
    }

    const onChangeFile = (e) => {

        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        setFilename(selectedFile.name)
        console.log("선택된 파일", selectedFile);
    }

    console.log(filename)
    const userid = localStorage.getItem('userid');


    const editfeed = async () => {
        const formData = new FormData();

        formData.append('title', title);
        formData.append('body', content);
        formData.append('attached', file);
        formData.append('stack', JSON.stringify(chosenStack));
        formData.append('link', link);
        formData.append('job', chosenJob);
        // const postData = {
        //     'stack': chosenStack,
        //     'job': chosenJob
        // };

        try {
            const response = await axios.put(`http://13.209.7.109/home/${id}/update/`,  formData  , {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            });
            console.log(response.data);
            alert('게시되었습니다.');
            navigate('/mypage');


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


    return (
        <Container>
            <Title>
                <Word>이력서 등록</Word>
                <PostButton onClick={editfeed}>등록하기</PostButton>
            </Title>
            <Content>
                <Info>
                    <Titleinput
                        placeholder='제목을 입력하세요.'
                        value={title}
                        onChange={onChangeTitle}
                    />
                    <MainTextarea>
                        <Maininput
                            placeholder='내용을 입력하세요.'
                            value={content}
                            onChange={onChangeContent}
                        />
                        <MaxLengthText>최대 300자</MaxLengthText>
                    </MainTextarea>
                    <Stacks>
                        <div className='title'>직무</div>
                        <Stackinput
                            placeholder='직무를 입력하세요.'
                            value={job}
                            onChange={onChangeJob}
                        />
                        {isHaveInputJob && (
                            <DropDownBox>
                                {dropDownJobs.length === 0 && (
                                    <DropDownItem>해당하는 직무가 없습니다</DropDownItem>
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
                    </Stacks>
                    <Stacks>
                        <div className='title'>기술스택</div>
                        <Stackinput
                            placeholder='기술스택을 입력하세요.'
                            value={stack}
                            onChange={onChangeStack}
                        />
                        {isHaveInputStack && (
                            <DropDownBox>
                                {dropDownStacks.length === 0 && (
                                    <DropDownItem>해당하는 스택이 없습니다</DropDownItem>
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
                        <Stack>
                        {chosenStack.map((chosenStack) => {
                            return (
                                <div>
                                    <div className='bubble'>
                                        <div className='name'>{chosenStack}</div>
                                        <div className='delete'>x</div>
                                    </div>
                                </div>

                            )
                        })}
                        </Stack>
                    </Stacks>
                    <Filearea>
                        <div className='left'>
                            {file ?
                                <button className='realbtn' onClick={handleButtonClick}>다른 이력서 파일 선택</button>
                                :
                                <button className='realbtn' onClick={handleButtonClick}>이력서 파일 업로드</button>
                            }
                            <input className='fileupload'
                                ref={fileInput}
                                type="file"
                                id="fileUpload"
                                onChange={onChangeFile}
                            />
                            {filename ? <div className='filename'>{filename}</div> : <div className='filename'>선택된 파일이 없습니다.</div>}
                        </div>
                        <div className='right'>
                            <input
                                className='link'
                                placeholder='이력서 링크를 입력하세요. (노션, 깃허브 등)'
                                value={link}
                                onChange={onChangeLink}
                            />
                        </div>
                    </Filearea>
                </Info>
            </Content>
        </Container>
    )
}

export default Main;