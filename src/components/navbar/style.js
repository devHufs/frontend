import styled from 'styled-components';

export const Container = styled.div`
    border-bottom: 1px solid lightgray;
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    .logoimg {
        padding: 10px;
        width: 120px;
    }
    .left {
        display: flex;
        padding: 10px;
    }
    .profile {
        width: 30px;
        margin: 0px 10px 0px 10px;
    }
    .btn {
        width: 80px;
        height: 30px;
        border: none;
        cursor: pointer;
    }
`

