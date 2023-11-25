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
        margin-top: 35px;
        z-index: 1000;
        border-radius: 3px;
        box-shadow: 1px 1px 10px gray;

    }
    .recent-searches {
        height: 25px;
        font-size: 15px;
        padding: 8px 5px 4px 5px;
    }
    
`

export const Inputbox = styled.input`
    width: 400px;
    height: 30px;
    z-index: 2000;
`