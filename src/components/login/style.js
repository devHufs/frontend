import styled from 'styled-components';
import '../../App.css';

export const Background = styled.div`
    font-family: "SUITE-Regular";


`

export const Container = styled.div`
    width: 300px;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .googlebtn {
        width: 270px;
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
    }
    .title {
        height: 50px;
        padding-top: 20px;
    }
    .googlelogo {
        width: 20px;
        margin-right: 10px;
    }
`
