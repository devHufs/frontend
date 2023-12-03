import styled from 'styled-components';
import '../../App.css';

export const Container = styled.div`
    height: 100%;
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    font-family: "SUITE-Regular";
    .profile {
        width: 50px;
    }
`

export const Posts = styled.div`
margin: 0 auto; 
   .boxes {
        display: flex;
    }
    .post {
        height: 140px;
        width: 180px;
        border: 1px solid lightgray;
        border-radius: 10px;
        margin: 20px 5px 20px 5px;
        padding: 20px;
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