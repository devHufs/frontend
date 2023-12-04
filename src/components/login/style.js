import styled from 'styled-components';
import '../../App.css';

export const Background = styled.div`
    font-family: "SUITE-Regular";


`

export const Container = styled.div`
    width: 280px;
    height: 220px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    .googlebtn {
        width: 280px;
        height: 50px;
        background-color: #438BFF;
        border: none;
        border-radius: 5px;
        font-family: "SUITE-Regular";
        color: white;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
    }
    .title {
        height: 50px;
        font-weight: bold;
    }
    .agree {
        display: flex;
        flex-direction: row;
    }
    .words {
        font-size: 13px;
        margin-bottom: 10px;
        width: 270px;
    }
    .checkbox {
        width: 12px;
    }
    .googlelogo {
        width: 20px;
        margin-right: 10px;
    }
`
