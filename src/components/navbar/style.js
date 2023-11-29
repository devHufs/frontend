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

export const ModalContainer = styled.div`
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    /* pointer-events: none;  */
`

export const Itsmodal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center; 
    margin-left: 9px;`

