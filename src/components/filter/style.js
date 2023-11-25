import styled from 'styled-components';

export const Container = styled.div`
    height: 100px;
    width: 100%;
    border-bottom: 1px solid lightgray;
    .search {
        display: flex;
        margin: 10px;
    }
    .btn{
        height: 35.2px;
        width: 60px;
        margin: 0px 10px 0px 10px;
        border: none;
        cursor: pointer;
    }
    .checkbox {
        width: 150px;
        height: 30px;
        margin: 10px;
    }
    .recent-searches-container {
        position:absolute;
        width: 407px;
        height: 180px;
        background-color: white;
        border: 1px solid gray;
        margin-top: 35px;
        z-index: 1000;
        border-radius: 3px;
    }
    .recent-searches {
        height: 25px;
        border-bottom: 1px solid lightgray;
        font-size: 15px;
        padding: 5px 5px 5px 5px;
    }
    
`

export const Inputbox = styled.input`
    width: 400px;
    height: 30px;
`