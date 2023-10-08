import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import { GoChevronLeft } from "react-icons/go"
import { FaCamera } from "react-icons/fa"
import profileImg from "../../assets/profile/profile.png"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ModifyAndDelete(props) {
    const navigate = useNavigate();

    const [ profile, setProfile ] = useState();
    
    const goBackOnClick = () => {
        navigate("/mypage");
    }

    const handleInputChange = (e) => {
        setProfile({
            ...profile,
            [e.target.name]: e.target.value
        });
    }

    const handleUpdateOnClick = () => {
        const submit = async() => {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            }
            const response = await axios.put("http://localhost:8080/naver_place/mypage/profile", profile, option);
            if(response.data) {
                alert("수정 완료!!");
                navigate("/mypage");
                return;
            }
        }
        submit();
    }

    useEffect(() => {
        const getProfileData = async() => {
            try {
                const response = await axios.get("http://localhost:8080/naver_place/mypage/profile", {
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
                    <span css={S.SHeaderText}>프로필 설정</span>
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
                    <input type="text" 
                        name='username'
                        placeholder='한글,영문,숫자,공백 2~20까지 입력할수 있어요.'
                        defaultValue={profile?.username}
                        onChange={handleInputChange}
                        css={S.SNameInput}/>
                </div>
                <div css={S.SInputBox}>
                    <span css={S.SInfoTitles}>비밀번호</span> 
                    <input type="password" 
                        name='password' 
                        placeholder=''
                        defaultValue={profile?.password}
                        onChange={handleInputChange}
                        css={S.SNameInput}/>
                </div>
                <div css={S.SInputBox}>
                    <span css={S.SInfoTitles}>이메일</span> 
                    <input type="text" 
                        name='email' 
                        placeholder=''
                        defaultValue={profile?.email}
                        onChange={handleInputChange}
                        css={S.SNameInput}/>
                </div>
                <div css={S.SInputBox}>
                    <span css={S.SInfoTitles}>이름</span> 
                    <input type="text" 
                        name='name' 
                        placeholder=''
                        defaultValue={profile?.name}
                        onChange={handleInputChange}
                        css={S.SNameInput}/>
                </div>
                <div css={S.SInputBox}>
                    <span css={S.SInfoTitles}>생년월일</span> 
                    <input type="text" 
                        name='birthday' 
                        placeholder=''
                        defaultValue={profile?.birthday}
                        onChange={handleInputChange}
                        css={S.SNameInput}/>
                </div>
                <div css={S.SInputBox}>
                    <span css={S.SInfoTitles}>전화번호</span> 
                    <input type="text" 
                        name='cellphone' 
                        placeholder=''
                        value={profile?.cellphone}
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