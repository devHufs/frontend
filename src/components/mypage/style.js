import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    width: 100%;
    height: 670px;
    display: flex;
    justify-content: space-between;
    .profile {
        width: 50px;
    }
`

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    width: 1200px;
    height: 100%;

`

export const Right = styled.div`
    display: flex;
    width: 400px;
    border-left: 1px solid lightgray;
    height: 100%;

`

export const Info = styled.div`
    height: 260px;
    width: 100%;
    border-bottom: 1px solid lightgray;
    /* background-color: black; */
`

export const Scrap = styled.div`
    height: 200px;
    border-bottom: 1px solid lightgray;
    padding: 10px;

    .title {
        height: 50px;
        width: 100%;
    }
    .post {
        height: 140px;
        width: 200px;
        border: 1px solid lightgray;
    }

`

export const Posts = styled.div`
    height: 200px;
    padding: 10px;
    .title {
        height: 50px;
        width: 100%;
    }
    .post {
        height: 140px;
        width: 200px;
        border: 1px solid lightgray;
    }

`