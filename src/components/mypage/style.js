import styled from 'styled-components';
import '../../App.css';

export const Container = styled.div`
    height: 650px;
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    font-family: "SUITE-Regular";
    .profile {
        width: 50px;
    }
`

export const Left = styled.div`
    width: 400px;
    height: 100%;
    .pictures {
        position: relative;
    }
    .bigpic {
        width: 100%;
        height: 180px;
        opacity: 0.5;
    }
    .profileimg {
        position: absolute;
        top: 100px; // adjust the positioning as needed
        left: 10px; // adjust the positioning as needed
        width: 100px; 
        height: 100px; 
        border-radius: 50%; // make it circular if needed
    }
    .name {
        padding-top: 40px;
        margin-left: 20px;
        margin-bottom: 15px;
        font-size: 15px;
        font-weight: bold;
    }
    .major {
        margin-left: 20px;
        font-size: 15px;
        padding-top: 5px;
    }

`

export const Origin = styled.div`
    height: 80px;
    margin: 10% 20px 5% 20px;
    .title {
        display: flex;
    }
    .origin-stack {
        height: 30px;
    }
    .edit {
        font-size: 12px;
        padding: 3px 0px 2px 10px;
        color:gray;
        cursor: pointer;
    }
    .job {
        font-size: 13px;
    }
`

export const Right = styled.div`
    display: flex;
    flex-direction: column;
    width: 880px;
    border-left: 1px solid lightgray;
    height: 100%;

`

export const Scrap = styled.div`
    height: 200px;
    border-top: 1px solid lightgray;
    padding: 10px 0px 20px 10px;
    overflow-x: scroll;
    overflow-y: hidden;
    .title {
        height: 30px;
        width: 100%;
        padding-top: 5px;
    }
    .container {
        display: flex;
    }
    .post {
        height: 150px;
        width: 200px;
        border: 1px solid lightgray;
        border-radius: 10px;
        margin-right: 15px;
        cursor: pointer;
    }
    .user {
        display: flex;
    }
    .img {
        width: 25px;
        border-radius: 50%;
    }
    .username {
        font-size: 13px;
        padding-left: 5px;
        padding-top: 5px;
    }
    .name {
        height: 10%;
        padding: 10px 0 20px 0;
        font-size: 15px;
    }
    .date {
        font-size: 11px;
    }
    .up {
        padding: 20px;
        height: 55%;
    }
    .infos{
        display: flex;
        flex-direction: row;
        padding: 0px 20px 0px 20px;
        font-size: 14px;
    }
    .heart {
        color: #438BFF;
        padding: 2px 3px 0px 0px;
    }
    .comment {
        color: #438BFF; 
        padding: 2px 3px 0px 8px;
    }
    .scrap {
        color: #438BFF;
        padding-right: 3px;
        padding: 2px 3px 0px 8px;
    }


`

export const Posts = styled.div`
    height: 200px;
    padding: 10px 0px 20px 10px;
    overflow-x: scroll;
    overflow-y: hidden;
    .title {
        height: 30px;
        width: 100%;
        padding-top: 5px;
    }
    .boxes {
        display: flex;
    }
    .post {
        height: 150px;
        width: 200px;
        border: 1px solid lightgray;
        border-radius: 10px;
        margin-right: 15px;
        cursor: pointer;
    }
    .name {
        height: 10%;
        padding-bottom: 20px;
        width: 200px;
    }
    .upload {
        width: 40px;
        padding: 10px;
        display: flex;
        margin: auto auto;
    }
    .more {
        padding-left: 25px;
        color: gray;
        width: 200px;
    }
    .date {
        font-size: 13px;
    }
    .up {
        padding: 20px;
        height: 55%;
        cursor: pointer;
    }
    .infos{
        display: flex;
        flex-direction: row;
        padding: 0px 20px 0px 20px;
        font-size: 14px;
    }
    .heart {
        color: #438BFF;
        padding: 2px 3px 0px 0px;
    }
    .comment {
        color: #438BFF; 
        padding: 2px 3px 0px 8px;
    }
    .scrap {
        color: #438BFF;
        padding-right: 3px;
        padding: 2px 3px 0px 8px;
    }
    .edit {
        padding: 2px 5px 5px 17px;
        border-right: solid 1px #cccccc;
        cursor: pointer;
        font-size: 10px;
    }
    .delete {
        padding: 2px 5px 5px 45px;
        cursor: pointer;
        font-size: 10px;
    }
`

export const Info = styled.div`
    height: 200px;
    width: 100%;
    border-top: 1px solid lightgray;
    padding: 10px 0px 20px 10px;
    overflow-x: scroll;
    overflow-y: hidden;
    .title {
        height: 30px;
        width: 100%;
        padding-top: 5px;
    }
    .post {
        height: 150px;
        width: 200px;
        border: 1px solid lightgray;
        border-radius: 10px;
        margin-right: 15px;
        cursor: pointer;
    }
    .container {
        display: flex;
    }
    .user {
        display: flex;
    }
    .img {
        width: 25px;
        border-radius: 50%;
    }
    .username {
        font-size: 13px;
        padding-left: 5px;
        padding-top: 5px;
    }
    .name {
        height: 10%;
        padding: 10px 0 20px 0;
        font-size: 15px;
    }
    .date {
        font-size: 11px;
    }
    .up {
        padding: 20px;
        height: 55%;
    }
    .infos{
        display: flex;
        flex-direction: row;
        padding: 0px 20px 0px 20px;
        font-size: 14px;
    }
    .heart {
        color: #438BFF;
        padding: 2px 3px 0px 0px;
    }
    .comment {
        color: #438BFF; 
        padding: 2px 3px 0px 8px;
    }
    .scrap {
        color: #438BFF;
        padding-right: 3px;
        padding: 2px 3px 0px 8px;
    }`

export const Stacks = styled.div`
    font-family: "SUITE-Regular";
    margin: 10% 20px 5% 20px;
    height: 80px;
    .top {
        display: flex;
    }
    .edit {
        font-size: 12px;
        padding: 3px 0px 2px 10px;
        color:gray;
        cursor: pointer;
    }
    .button {
        width: 15%;
        height: 43px;
        border: none;
        background-color: #cccccc;
        color: white;
        border-radius: 10px;
        cursor: pointer;
        font-size: 10px;
        margin-left: 10px;
    }


`

export const Stackinput = styled.input`
    border: solid 2px #cccccc;
    border-radius: 10px;
    width: 60%;
    height: 40px;
    padding: 0px 20px 0px 20px;
    margin: 3% 0% 3% 0%;
    outline: none;
    font-family: "SUITE-Regular";
`

export const DropDownBox = styled.ul`
display: block;
width: 10%;
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
font-size: 15px;

&.selected {
background-color: lightgray;
}
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
    .chosenstack {
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