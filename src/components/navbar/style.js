import styled from 'styled-components';
import '../../App.css';


export const Container = styled.div`
    border-bottom: 1px solid lightgray;
    height: 60px;
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: "SUITE-Regular";

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
        margin: 0px 0px 0px 10px;
        border-radius: 50%;
    }
    .nickname {
        font-family: "SUITE-Regular";
        margin: auto 20px auto 10px;
        font-size: 14px
    }
    .btn {
        width: 80px;
        height: 30px;
        border: none;
        cursor: pointer;
        font-family: "SUITE-Regular";
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

