import styled from 'styled-components';
import '../../App.css';

export const Container = styled.div`
    height: 100%;
    max-width: 1280px;
    margin: auto; 
    display: flex;
    font-family: "SUITE-Regular";
    justify-items: center;
    flex-wrap: wrap;
`

export const Posts = styled.div`

   .boxes {
        display: flex;
    }
    .post {
        height: 140px;
        width: 190px;
        border: 1px solid lightgray;
        border-radius: 10px;
        margin: 20px 10px 10px 10px;
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