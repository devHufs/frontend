import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {
    Container, Title, Word, Content, PostButton, Titleinput,
    Info, Filearea, Maininput, Job, Stacks, DropDownBox, DropDownItem,
    Jobinput, Stackinput, MaxLengthText, MainTextarea, Stack
} from "./style";

const Main = () => {


    const wholeJobsArray = [
        '프론트엔드',
        '백엔드',
        '풀스택',
        '데브옵스엔지니어',
        '데이터분석가',
        '클라우드엔지니어',
        '앱 개발자',
    ]

    const wholeStacksArray = [
        'react',
        'django',
        'javascript',
        'typescript',
        'python',
        'java',
        'spring',
    ]

    const fileInput = React.createRef();
    const formRef = React.createRef();
    const navigate = useNavigate();

    const handleButtonClick = () => {
        fileInput.current.click();
    };

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [job, setJob] = useState("")
    const [stack, setStack] = useState("")
    const [file, setFile] = useState("");
    const [filename, setFilename] = useState(null)

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
    }

    const clickDropDownStack = clickedItem => {
        setStack("")
        setIsHaveInputStack(false)
        setChosenStack([...chosenStack, clickedItem]);
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

    const onChangeFile = (e) => {

        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        setFilename(selectedFile.name)
        console.log("선택된 파일", selectedFile);
    }

    console.log(filename)

    const postfeed = async () => {
        const formData = new FormData();
        // const formTitle = new FormData();
        // const formContent = new FormData();
        // const formFile = new FormData();

        // formTitle.append('title', title);
        // formContent.append('body', content);
        // formFile.append('attached', file);

        formData.append('title', title);
        formData.append('body', content);
        formData.append('attached', file);

        // for (const [name, value] of formFile.entries()) {
        //     console.log(`${name}: ${value}`);
        // }

        try {
            const response = await axios.post('https://port-0-backend-1gksli2alpp0ksdw.sel4.cloudtype.app/home/create/', {
                // formTitle,
                // formContent,
                // formFile
                formData,
            }, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    // 'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>',
                    // 'Content-Length' : '<calculated when request is sent>',
                    // 'Host' : '<calculated when request is sent>',
                    // 'User-Agent' : 'PostmanRuntime/7.35.0',
                    // 'Accept' : '*/*',
                    // 'Accept-Encoding' : 'gzip, deflate, br',
                    // 'Connection' : 'keep-alive'
                }
            });
            console.log(response.data);
            alert('게시되었습니다.');
            navigate('/mypage');


        } catch (error) {
            alert('업로드에 실패했습니다.')
            console.error(error)
            // Optionally, check if the error has a response
            if (error.response) {
                // The request was made, but the server responded with a status code
                // that falls out of the range of 2xx
                console.log('Response data:', error.response.data);
                console.log('Response status:', error.response.status);
                console.log('Response headers:', error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                console.log('No response received:', error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error during request setup:', error.message);
            }
        }

    };


    return (
        <Container>
            <Title>
                <Word>이력서 등록</Word>
                <PostButton onClick={postfeed}>등록하기</PostButton>
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
                            />
                        </div>
                    </Filearea>
                </Info>
            </Content>
        </Container>
    )
}

export default Main;