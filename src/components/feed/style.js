import styled from 'styled-components';
import '../../App.css';

export const Preview = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000; 
  .modalback {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); 
    z-index: 1000;
  }
  .previewpdf {
    background: white;
    padding: 20px;
    max-width: 800px; 
    width: 100%;
    position: relative;
    z-index: 1001;
    border-radius: 10px;
  }
`

export const Container = styled.div`
    width: 85%;
    margin: 0 auto;
    font-family: "SUITE-Regular";

`

export const Top = styled.div`
    width: 100%;
    height: 140px;
    border-bottom: 1px solid lightgray;
    display: flex;
    flex-direction: row;
    .left {
        height: 100%;
        width: 80%;
        padding: 0 20px 0 20px;

    }
    .title {
        font-size: 30px;
        max-height: 50%;
        width: 100%;
        padding: 30px 0 0 10px;
    }
    .info {
        max-height: 50%;
        width: 100%;
        padding: 10px 0 0px 0;
        display: flex;

    }
    .profile {
        width: 30px;
        height: 30px;
        margin: 10px 10px;
        border-radius: 50%;
    }
    .names {
        padding: 5px 5px;
    }
    .name {
        font-size: 15px;
    }
    .job {
        font-size: 13px;
        padding-top: 3px;
    }
    .stacks {
        position: relative;
        width: 75px;
    }
    .stack {
        font-size: 13px;
        background-color: #f0f0f0;
        height: 20px;
        padding: 1px 5px 0px 5px;
        border-radius: 10px;
        position: absolute;
        bottom: 5px;
        left: 5px;
    }
    .right {
        max-height: 100%;
        width: 20%;
        padding: 30px;
        display: flex;
        flex-direction: column
    }
    .top {
        display: flex;
        justify-content: flex-end;
        height: 50%;
        width: 100%;
        align-items: center; 
    }
    .heart {
        width: 30px;
        padding: 5px;
    }
    .heartimg {
    }
    .heartnum {
        font-size: 13px;
        padding: 0 10px;
    }
    .scrap {
        width: 15px;
        padding: 5px;
    }
    .scrapimg {
    } 
    .scrapnum {
        font-size: 13px;
        padding: 0 5px;

    }
    .down {
        display: flex;
        justify-content: flex-end; 
        height: 50%;
        width: 100%;
        padding: 20px 0 0 0;

    }
    .date {
        font-size: 13px;
    }
`

export const Content = styled.div`
    width: 100%;
    height: 300px;
    border-bottom: 1px solid lightgray;
    .files {
        height: 50px;
        display: flex;
        justify-content: space-between;
        margin: 10px 20px;
    }
    .link {
        font-size: 15px;
        cursor: pointer;
    }
    .filelink {
        font-size: 15px;
        margin-right: 20px;
    }
    .file {
        display: flex;
    }
    .gotofile {
        width: 100px;
        height: 20px;
        font-size: 10px;
        border: none;
        cursor: pointer;
    }
    .content {
        margin: 40px 20px;
        max-height: 100%;

    }
`

export const Comment = styled.div`
    .number {
        max-width: 100%;
        height: 20px;
        padding: 20px 20px;
        display: flex;
    }
    .commentimg {
        width: 20px;
        margin-right: 10px;
    }
    .commentnum {
        font-size: 15px;
    }
    .input {
        max-width: 100%;
        height: 50px;
        padding: 0px 2%;
        display: flex;
        justify-content: space-between;

    }
    .inputbox {
        width: 90%;
        height: 40px;
        border: 2px solid #cccccc;
        margin-right: 1%;
        border-radius: 10px;
        font-family: "SUITE-Regular";
        padding: 0px 20px 0px 20px;
    }
    .inputbtn {
        width: 10%;
        height: 43px;
        border: none;
        background-color: #438BFF;
        color: white;
        border-radius: 10px;
        cursor: pointer;
    }
    .comments {
        max-width: 100%;
        height: 50px;
        padding: 10px 30px;
    }
    .top {
        display: flex;
        height: 30px;
    }
    .name {
        font-size: 15px;
        margin-right: 10px;
        margin: auto 0;
        padding-right: 10px;

    }
    .date {
        font-size: 12px;
        color: gray;
        margin: auto 0;
    }
    .delete {
        color: gray;
        padding: 10px 0 0 10px;
        font-size: 10px;
        cursor: pointer;
    }
    .bottom {
        height: 20px;
        display: flex;
    }
    .body {
        font-size: 15px;
    }
`