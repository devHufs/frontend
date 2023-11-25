import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Filter from '../filter';



const Main = () => {
    return (
        <div>
            <Filter/>
            <div>
                메인ㅁ페이지
            </div>
        </div>
    );

}

export default Main;