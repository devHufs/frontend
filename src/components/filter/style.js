import styled from 'styled-components';
import '../../App.css';

export const Main = styled.div`
    max-width: 1280px;
    height: 100%;
    margin: 0 auto;

`

export const Container = styled.div`
    align-items: center;
    height: 100px;
    max-width: 1280px;
    margin: 0 auto;
    border-bottom: 1px solid lightgray;
    font-family: "SUITE-Regular";

    @media (min-width: 1040px) {
    display: flex;
    justify-content: space-between;
    height: 70px;
    }


    .search {
        display: flex;
        margin: 10px;
        padding: 0 10px;
    }
    .select {
        display: flex;
    }
    .placeholder-job {
        position: fixed;
        right: 420px;
        top: 95px;
    }
    .placeholder-stack {
        position: fixed;
        right: 240px;
        top: 95px;
    }
    .placeholder-order {
        position: fixed;
        right: 85px;
        top: 95px;
    }
    .btn{
        height: 35.2px;
        width: 70px;
        margin: 0px 10px 0px 10px;
        border: none;
        cursor: pointer;
        font-family: "SUITE-Regular";
    }
    .checkbox {
        width: 150px;
        height: 30px;
        margin: 10px;
    }
    .menu {
        font-size: 10px;
    }
    .recent-searches-container {
        position:absolute;
        width: 407px;
        max-height: 180px;
        background-color: white;
        margin-top: 35px;
        z-index: 1000;
        border-radius: 3px;
        box-shadow: 1px 1px 10px gray;
    }
    .recent-searches {
        height: 25px;
        font-size: 15px;
        padding: 8px 5px 4px 5px;
        cursor: pointer;
    }
    .joblist {
        /* font-family: "SUITE-Regular"; */

    }
`

export const Inputbox = styled.input`
    width: 400px;
    height: 30px;
    z-index: 2000;
    border: 2px solid #cccccc;
`

export const Posts = styled.div`
    font-family: "SUITE-Regular";
    border-bottom: 1px solid #cccccc;

   .boxes {
        display: flex;
    }
    .post {
        height: 140px;
        width: 190px;
        border: 1px solid lightgray;
        border-radius: 10px;
        margin: 20px 10px 20px 10px;
        padding: 20px;
        cursor: pointer;
    }
    .profile {
        height: 30px;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;

    }
    .profilepic {
        width: 30px;
        height: 30px;
        margin-right: 5px;
        border-radius: 50%;
    }
    .name {
        width: 100%;
        height: 10%;
        padding-bottom: 20px;
    }
    .date {
        font-size: 13px;
    }
    .up {
        margin: 20px 0px 20px 0px;
        height: 40px;
    }
    .infos{
        display: flex;
        flex-direction: row;
        padding: 0px 0px 20px 0px;
        font-size: 14px;
        height: 30px;
        align-items: end;
    }
    .heart {
        color: #438BFF;
        padding: 1px 3px 1px 0px;
    }
    .comment {
        color: #438BFF; 
        padding: 1px 3px 1px 8px;
    }
    .scrap {
        color: #438BFF;
        padding: 1px 3px 1px 8px;
    }

`
export const Search = styled.div`
    .title {
        font-family: "SUITE-Regular";
        display: flex;
        justify-content: space-between;
        padding: 20px 20px 0px 20px;
        font-size: 13px;
    }
    .reset {
        cursor: pointer;
    }
`