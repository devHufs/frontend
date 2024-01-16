import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    //align-items: center;
    flex-direction: column;
    width: 50%;
    /* height: 100%; */
    //background-color: #fff;
    margin: 0 auto; 
    //min-height: 100vh;
    //margin: 0; /* 바깥 여백을 없애기 위해 설정 */
    //padding: 0; /* 안쪽 여백도 없애기 위해 설정 */
    /* overflow: hidden; /* 내용이 화면을 벗어나지 않도록 설정 */    
    font-family: "SUITE-Regular";
`

export const Title = styled.div`
    display: flex;
    border-bottom: solid #cccccc;
    height: 80px;
    width: 100%;
    justify-content: space-between;
    font-family: "SUITE-Regular";
    padding: 0px 20px 0px 20px;
`

export const Word = styled.div`
    font-size: 23px;
    align-self: flex-end;
    margin-bottom: 10px;
`

export const PostButton = styled.button`
    border: none;
    background-color:#438BFF;
    color: white;
    height: 40%;
    width: 140px;
    border-radius: 10px;
    justify-content: flex-end;
    align-self: flex-end;
    margin: 10px;
    font-size: 10;
    font-family: "SUITE-Regular";
`

export const Content = styled.div`
    //height: 85%;
    display: flex;
    width: 100%;
`
export const Info = styled.div`
    display: flex;
    width: 100%;
    margin: 2% 0% 0% 0%;
    flex-direction: column;
    
`

export const Titleinput = styled.input`
    border: solid 2px #cccccc;
    border-radius: 10px;
    width: 100%;
    height: 50px;
    padding: 0px 20px 0px 20px;
    margin: 1% 0% 1% 0%;
    outline: none;
    font-family: "SUITE-Regular";


`
export const Maininput = styled.textarea.attrs({ maxLength: 500 })`
    border: solid 2px #cccccc;
    border-radius: 10px;
    height: 140px; /* 높이 설정 */
    width: 100%; 
    margin: 1% 0% 1% 0%;
    padding: 20px 20px 20px 20px;
    white-space: pre-wrap; /* 줄 바꿈 관련 */
    word-wrap: break-word; 
    overflow-wrap: break-word;
    resize: none; /* 크기 조정 비활성화 */
    outline: none;
    font-family: "SUITE-Regular";

`

export const Job = styled.div`
    font-family: "SUITE-Regular";
    margin: 1% 0% 1% 0%;
`

export const Jobinput = styled.input`
    border: solid 2px #cccccc;
    border-radius: 10px;
    width: 100%;
    height: 40px;
    padding: 0px 20px 0px 20px;
    margin: 1% 0% 1% 0%;
    outline: none;
    font-family: "SUITE-Regular";
`

export const DropDownBox = styled.ul`
  display: block;
  width: 50%;
  margin: 0 0;
  padding: 8px 20px;
  background-color: white;
  border: 1px solid #cccccc;
  border-top: none;
  border-radius: 0 0 16px 16px;
  box-shadow: 0 10px 10px #cccccc;
  list-style-type: none;
  z-index: 1000;
  position: absolute;
`

export const DropDownItem = styled.li`
  padding: 3px 16px;
  cursor: pointer;

  &.selected {
    background-color: lightgray;
  }
`

export const Stacks = styled.div`
    font-family: "SUITE-Regular";
    margin: 1% 0% 1% 0%;

 
`

export const Stackinput = styled.input`
    border: solid 2px #cccccc;
    border-radius: 10px;
    width: 100%;
    height: 40px;
    padding: 0px 20px 0px 20px;
    margin: 1% 0% 1% 0%;
    outline: none;
    font-family: "SUITE-Regular";
`

export const Stack = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    flex-direction: row;
    .bubble {
    font-size: 15px;
    width: 80px;
    height: 20px;
    border: solid 2px #cccccc;
    border-radius: 20px;
    font-family: "SUITE-Regular";
    padding: 0px 5px 0px 5px;
    margin: 1% 10px 1% 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    }
    .name {
    color: gray;
    }
    .delete {
        color: gray;
    }

`

export const Placename = styled.div`
    height: 60px;
    padding-top: 20px;
    font-size: 20px;
`
export const MaxLengthText = styled.span`
    position: absolute;
    bottom: 30px;
    right: 0px;
    color: #999999;
    font-size: 12px; 
    font-family: "SUITE-Regular";

`

export const MainTextarea = styled.div`
    position: relative;
    width: 100%;
    margin: 0 auto; 

`
export const Filearea = styled.div`
    display: flex;
    width: 100%;
    height: 30px;
    align-items: center;
    font-family: "SUITE-Regular";
    margin: 1% 0% 1% 0%;
    justify-content: space-between;
    .left {
        width: 40%;
        height: 100%;
    }
    .fileupload {
        display:none;
    }
    .realbtn {
    border: 2px solid lightgray;
    background-color:lightgray;
    color: white;
    width: 80%;
    height: 100%;
    border-radius: 10px;
    font-size: 10;
    font-family: "SUITE-Regular";
    cursor: pointer;
    margin-right: 10px;
    }
    .filename {
        font-size: 12px;
        width: 50%;
        margin: 10px;

    }
    .right {
        width: 60%;
    }
    .link {
        width: 100%;
        height: 40px;
        border: solid 2px #cccccc;
        border-radius: 10px;
        outline: none;
        font-family: "SUITE-Regular";
        padding: 0px 20px 0px 20px;

    }


`