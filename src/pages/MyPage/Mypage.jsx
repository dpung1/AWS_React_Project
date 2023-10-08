import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import { GoChevronLeft } from "react-icons/go"
import { FaCamera } from "react-icons/fa"
import profileImg from "../../assets/profile/profile.png"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Mypage(props) {
    const navigate = useNavigate();

    const [ profile, setProfile ] = useState({
        username: "",
        password: "",
        email: "",
        name: "",
        birthday: "",
        cellphone: ""
    });

    const goBackOnClick = () => {
        navigate("/")
    }

    const editPageOnClick = () => {
        navigate("/mypage/edit")
    }

    useEffect(() => {
        const getProfileData = async() => {
            try {
                const response = await axios.get(`http://localhost:8080/naver_place/mypage/profile`,{
                    headers: {
                        Authorization: localStorage.getItem("token")
                    }
                });
                setProfile(response.data);
            }catch(error) {
                console.log(error)
            }
        }
        getProfileData();
    }, []);

    return (
        <>
            <div css={S.SLayout}>
                <div css={S.SHeaderBox} onClick={goBackOnClick}>
                    <GoChevronLeft css={S.SHaederIcon}/>
                    <span css={S.SHeaderText}>마이페이지</span>
                </div>
            </div>
            <div css={S.SProfileImgBox}>
                <div css={S.SProfileImgContainer}>
                    <img src={profileImg} css={S.SProfileImg}/>
                    <span css={S.SCameraIconBox}><FaCamera css={S.SCameraIcon}/></span>
                </div>
            </div>
            <div css={S.SInfoSettingBox}>
                <div css={S.SInputBox}>
                    <span css={S.SInfoTitle}>사용자명</span> 
                    <p css={S.SInfoInput}>{profile.username}</p>
                </div>
                <div css={S.SInputBox}>
                    <span css={S.SInfoTitles}>비밀번호</span> 
                    <p css={S.SInfoInput}>{profile.password}</p>
                </div>
                <div css={S.SInputBox}>
                    <span css={S.SInfoTitles}>이메일</span> 
                    <p css={S.SInfoInput}>{profile.email}</p>
                </div>
                <div css={S.SInputBox}>
                    <span css={S.SInfoTitles}>이름</span> 
                    <p css={S.SInfoInput}>{profile.name}</p>
                </div>
                <div css={S.SInputBox}>
                    <span css={S.SInfoTitles}>생년월일</span> 
                    <p css={S.SInfoInput}>{profile.birthday}</p>
                </div>
                <div css={S.SInputBox}>
                    <span css={S.SInfoTitles}>전화번호</span> 
                    <p css={S.SInfoInput}>{profile.cellphone}</p>
                </div>
            </div>
            <div css={S.SButtonLayout}>
                <button css={S.SNextButton} onClick={editPageOnClick}>정보 수정</button>
            </div>
        </>
    );
}

export default Mypage;