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
    width: 480px;
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
        padding-top: 30px;
        margin-left: 20px;
        font-size: 15px;
    }
    .major {
        margin-left: 20px;
        font-size: 15px;
        padding-top: 5px;
    }
`

export const Right = styled.div`
    display: flex;
    flex-direction: column;
    width: 800px;
    border-left: 1px solid lightgray;
    height: 100%;

`

export const Scrap = styled.div`
    height: 200px;
    border-top: 1px solid lightgray;
    padding: 10px 0px 20px 10px;

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
        margin-right: 10px;
    }
    .name {
        height: 10%;
        padding-bottom: 20px;
    }
    .date {
        font-size: 13px;
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
    }
    .name {
        height: 10%;
        padding-bottom: 20px;
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

`

export const Info = styled.div`
    height: 200px;
    width: 100%;
    border-top: 1px solid lightgray;
    padding: 10px 0px 20px 10px;

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
    }
    .post {
        height: 150px;
        width: 200px;
        border: 1px solid lightgray;
        border-radius: 10px;
        margin-right: 10px;
    }
    .name {
        height: 10%;
        padding-bottom: 20px;
    }
    .date {
        font-size: 13px;
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