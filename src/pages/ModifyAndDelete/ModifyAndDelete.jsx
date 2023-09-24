import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import { GoChevronLeft } from "react-icons/go"
import { FaCamera } from "react-icons/fa"
import profile from "../../assets/profile/profile.png"
import axios from 'axios';

function ModifyAndDelete(props) {
    const [ profileSetting, setProfileSetting ] = useState({
        username: "",
        password: "",
        email: "",
        name: "",
        birthday: "",
        cellphone: ""
    })

    useEffect(() => {
        const getProfileData = async() => {
            try {
                const response = await axios.get(`http:/localhost:8080/naver_place/profilesetting/profileSetting`,{
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

    return (
        <>
            <div css={S.SLayout}>
                <div css={S.SHeaderBox}>
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
                        css={S.SNameInput}/>
                </div>
                <div css={S.SInputBox}>
                    <span css={S.SInfoTitles}>비밀번호</span> 
                    <input type="password" 
                        name='password' 
                        placeholder=''
                        value={profileSetting?.password}
                        css={S.SNameInput}/>
                </div>
                <div css={S.SInputBox}>
                    <span css={S.SInfoTitles}>이메일</span> 
                    <input type="text" 
                        name='email' 
                        placeholder=''
                        value={profileSetting?.email}
                        css={S.SNameInput}/>
                </div>
                <div css={S.SInputBox}>
                    <span css={S.SInfoTitles}>이름</span> 
                    <input type="text" 
                        name='name' 
                        placeholder=''
                        value={profileSetting?.name}
                        css={S.SNameInput}/>
                </div>
                <div css={S.SInputBox}>
                    <span css={S.SInfoTitles}>생년월일</span> 
                    <input type="text" 
                        name='birthday' 
                        placeholder=''
                        value={profileSetting?.birthday}
                        css={S.SNameInput}/>
                </div>
                <div css={S.SInputBox}>
                    <span css={S.SInfoTitles}>전화번호</span> 
                    <input type="text" 
                        name='cellphone' 
                        placeholder=''
                        value={profileSetting?.cellphone}
                        css={S.SNameInput}/>
                </div>
                <div css={S.SDeleteBox}>
                    <GoChevronLeft css={S.SDeleteIcon}/>
                    <button css={S.SDeleteButton}>회원탈퇴</button>
                </div>
            </div>
            <div css={S.SButtonLayout}>
                <button css={S.SNextButton}>수정하기</button>
            </div>
        </>
    );
}

export default ModifyAndDelete;