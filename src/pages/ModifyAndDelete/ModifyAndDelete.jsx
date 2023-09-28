import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import { GoChevronLeft } from "react-icons/go"
import { FaCamera } from "react-icons/fa"
import profile from "../../assets/profile/profile.png"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ModifyAndDelete(props) {
    const navigate = useNavigate();

    const [ profileSetting, setProfileSetting ] = useState({
        username: "",
        password: "",
        email: "",
        name: "",
        birthday: "",
        cellphone: ""
    });

    const goBackOnClick = () => {
        navigate("/");
    }


    useEffect(() => {
        const getProfileData = async() => {
            try {
                const response = await axios.get(`http:/localhost:8080/naver_place/mypage/profile`,{
                    headers: {
                        Authorization: localStorage.getItem("token")
                    }
                });
                setProfileSetting(response.data);
            }catch(error) {
                console.log(error)
            }
        }
        getProfileData();
    }, [])

    const handleInputChange = (e) => {
        setProfileSetting({
            ...profileSetting,
            [e.target.name]: e.target.value
        })
    }

    const handleUpdateOnClick = () => {
        const submit = async () => {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            }
            const response = await axios.put("http:/localhost:8080/naver_place/mypage/profile", profileSetting, option);
            if(response.data) {
                alert("수정완료!!")
                navigate("/mypage");
                return;
            }
        }
        submit();
    }

    return (
        <>
            <div css={S.SLayout}>
                <div css={S.SHeaderBox} onClick={goBackOnClick}>
                    <GoChevronLeft css={S.SHaederIcon}/>
                    <span css={S.SHeaderText}>프로필 설정</span>
                </div>
            </div>
            <div css={S.SProfileImgBox}>
                <div css={S.SProfileImgContainer}>
                    <img src={profile} css={S.SProfileImg}/>
                    <span css={S.SCameraIconBox}><FaCamera css={S.SCameraIcon}/></span>
                </div>
            </div>
            <div css={S.SInfoSettingBox}>
                <div css={S.SInputBox}>
                    <span css={S.SInfoTitle}>사용자명</span> 
                    <input type="text" 
                        name='username'
                        placeholder='한글,영문,숫자,공백 2~20까지 입력할수 있어요.'
                        value={profileSetting?.username}
                        onChange={handleInputChange}
                        css={S.SNameInput}/>
                </div>
                <div css={S.SInputBox}>
                    <span css={S.SInfoTitles}>비밀번호</span> 
                    <input type="password" 
                        name='password' 
                        placeholder=''
                        value={profileSetting?.password}
                        onChange={handleInputChange}
                        css={S.SNameInput}/>
                </div>
                <div css={S.SInputBox}>
                    <span css={S.SInfoTitles}>이메일</span> 
                    <input type="text" 
                        name='email' 
                        placeholder=''
                        value={profileSetting?.email}
                        onChange={handleInputChange}
                        css={S.SNameInput}/>
                </div>
                <div css={S.SInputBox}>
                    <span css={S.SInfoTitles}>이름</span> 
                    <input type="text" 
                        name='name' 
                        placeholder=''
                        value={profileSetting?.name}
                        onChange={handleInputChange}
                        css={S.SNameInput}/>
                </div>
                <div css={S.SInputBox}>
                    <span css={S.SInfoTitles}>생년월일</span> 
                    <input type="text" 
                        name='birthday' 
                        placeholder=''
                        value={profileSetting?.birthday}
                        onChange={handleInputChange}
                        css={S.SNameInput}/>
                </div>
                <div css={S.SInputBox}>
                    <span css={S.SInfoTitles}>전화번호</span> 
                    <input type="text" 
                        name='cellphone' 
                        placeholder=''
                        value={profileSetting?.cellphone}
                        onChange={handleInputChange}
                        css={S.SNameInput}/>
                </div>
                <div css={S.SDeleteBox}>
                    <GoChevronLeft css={S.SDeleteIcon}/>
                    <button css={S.SDeleteButton}>회원탈퇴</button>
                </div>
            </div>
            <div css={S.SButtonLayout}>
                <button css={S.SNextButton} onClick={handleUpdateOnClick} >수정하기</button>
            </div>
        </>
    );
}

export default ModifyAndDelete;