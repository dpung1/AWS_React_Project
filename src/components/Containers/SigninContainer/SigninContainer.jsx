import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { AiOutlineDown, AiOutlineUser, AiOutlineLock} from 'react-icons/ai';
import Img from "../../../assets/signin/signin.jpeg"
import Img2 from "../../../assets/signin/스크린샷 2023-09-02 오후 7.15.24.png"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SigninContainer(props) {
    const navigate = useNavigate();
    const [ isIdContainerActive, setIdContainerActive ] = useState(false);
    const [ isPwContainerActive, setIsPwContainerActive ] = useState(false);
    const [ signinInput, setSigninInput ] = useState({
        username: "",
        password: ""
    })

    const handleInputOnChange = (e) => {
        setSigninInput({
            ...signinInput,
            [ e.target.name ]: e.target.value
        });
    }

    const handleSigninClick = async () => {
        try {
            const response = await axios.post("http://localhost:8080/naver_place/auth/signin", signinInput);
            
            console.log(response.data);

            if(!!!response.data) {
                alert("로그인 실패");
                return;
            }
            alert("환영합니다.")
            navigate("/feed");
        }catch(error) {
            console.log(error)
        }
    }

    const handleSignupPageMoveClick = () => {
        navigate('/signup')
    }

    const handleInputFocus = (type) => {
        if (type === 'id') {
            setIdContainerActive(true);
        }else if (type === 'password') {
            setIsPwContainerActive(true);
        }
    };
    
    const handleInputBlur = (type) => {
        if (type === 'id') {
            setIdContainerActive(false);
        }else if (type === 'password') {
            setIsPwContainerActive(false);
        }
    };

    return (
        <div css={S.SLayout}>
            <div css={S.SNaverLogoBox}>
                <img css={S.SImgLogo} src="data:image/png;base64,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" alt="" />
            </div>
            <div css={S.SMainContainer}>
                <div css={S.SKeyContainer}>
                    <div css={S.SKeyBox}>
                        <button>PC 키보드 보기 </button>
                        <AiOutlineDown css={S.SKeyIcon}/>
                    </div>
                </div>
                <div css={S.SLoginContainer}>
                    <div css={[S.SIdContainer, isIdContainerActive && S.SIdactive]}>
                        <AiOutlineUser css={S.SIdIcon} />
                        <div css={S.SIdBox}>
                            <input type="text" 
                                    name="username" 
                                    placeholder="아이디" 
                                    onFocus={() => handleInputFocus('id')} 
                                    onBlur={() => handleInputBlur('id')} 
                                    onChange={handleInputOnChange}/>
                        </div>
                    </div>
                    <div css={[S.SPwContainer, isPwContainerActive && S.SPwactive]}>
                        <div css={S.SPwBox}>
                            <AiOutlineLock css={S.SPwIcon}/>
                            <input type="password" 
                                    name="password" 
                                    placeholder="비밀번호" 
                                    onFocus={() => handleInputFocus('password')} 
                                    onBlur={() => handleInputBlur('password')} 
                                    onChange={handleInputOnChange}/>
                        </div>
                    </div>
                </div>
                <button css={S.SLoginButton} onClick={handleSigninClick}>로그인</button>
                <div css={S.SStateBox}>
                    <input type="checkbox" />
                    <p>로그인 상태 유지</p>
                </div>
                <div css={S.SImgBox}>
                    <img css={S.SImg} src={Img}/>
                    <div css={S.STag}>AD</div>
                </div>
                <div css={S.SBottom}>
                    <div css={S.SFText}>아이디 찾기</div>
                    <div css={S.STText}>비밀번호 찾기</div>
                    <div css={S.STText} onClick={handleSignupPageMoveClick}>회원가입</div>
                </div>
                <div css={S.SLast}>
                    <div css={S.SNaverImg}></div>
                    <div></div>
                    <div css={S.SText}>회원정보 고객센터</div>
                </div>
            </div>
        </div>
    );
}

export default SigninContainer;