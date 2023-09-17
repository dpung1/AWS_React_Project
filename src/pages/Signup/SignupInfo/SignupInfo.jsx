import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';
import axios from 'axios';
import * as S from "./Style";
import { useNavigate } from 'react-router-dom';

function SignupInfo(props) {
    const navigate = useNavigate();

    const [ checked, setChecked ] = useState(true)
    const [ signupUser, setSignupUser ] = useState({
        username: "",
        password: "",
        email: "",
        name: "",
        birthday: "",
        cellphone: ""
    });

    const clickedOnChange  = () => {
        setChecked(!checked);
    }

    const handleInputChange = async (e) => {
        setSignupUser({
            ...signupUser,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmitClick = () => {
        
        // 회원가입 요청
        const option = {
            params: {
                username: signupUser.username,
                password: signupUser.password,
                email: signupUser.email,
                name: signupUser.name,
                birthday: signupUser.birthday,
                cellphone: signupUser.cellphone
            }
        }
        
        const signup = async () => {
            let response = await axios.get("http://localhost:8080/naver_place/auth/signup/duplicate/username", option)
            
            if(response.data) {
                alert("중복된 아이디 입니다.");
                return;
            };
            
            try{
                response = await axios.post("http://localhost:8080/naver_place/auth/signup", signupUser)

                if(!response.data) {
                    throw new Error(response)
                }

                alert("회원가입 성공!");
                navigate("/signin");

            }catch(error) {
                alert("회원가입 실패!")
                console.log(error);
            };
        };
        
        signup();
    }


    const [ isButtonFocused, setIsButtonFocused ] = useState(false);
    const [ isIdContainerActive, setIdContainerActive ] = useState(false);
    const [ isPwContainerActive, setIsPwContainerActive ] = useState(false);
    const [ isEmailContainerActive, setIsEmailContainerActive ] = useState(false);
    const [ isNameContainerActive, setIsNameContainerActive ] = useState(false);
    const [ isCellPhoneContainerActive, setIsCellPhoneContainerActive ] = useState(false);
    const [ isBirthdayContainerActive, setIsBirthdayContainerActive ] = useState(false);
    const [ isPasswordVisible, setIsPasswordVisible ] = useState(false);
    const [ isManActive, setIsManActive ] = useState(false);
    const [ isWomanActive, setIsWomanActive ] = useState(false);
    const [ isLocalActive, setIsLocalActive ] = useState(true);
    const [ isForeignerActive, setIsForeignerActive ] = useState(false);

    const handleButtonClick = () => {
        setIsButtonFocused(!isButtonFocused);
        setIsPasswordVisible(!isPasswordVisible);
    };

    const handleInputFocus = (type) => {
        switch (type) {
            case 'id':
                setIdContainerActive(true);
                break;
            case 'password':
                setIsPwContainerActive(true);
                break;
            case 'email':
                setIsEmailContainerActive(true);
                break;
            case 'name':
                setIsNameContainerActive(true);
                break;
            case 'birthday':
                setIsBirthdayContainerActive(true);
                break;
            case 'cellphone':
                setIsCellPhoneContainerActive(true);
                break;
            default:
                break;
        }
    };

    const handleInputBlur = (type) => {
        switch (type) {
            case 'id':
                setIdContainerActive(false);
                break;
            case 'password':
                setIsPwContainerActive(false);
                break;
            case 'email':
                setIsEmailContainerActive(false);
                break;
            case 'name':
                setIsNameContainerActive(false);
                break;
            case 'birthday':
                setIsBirthdayContainerActive(false);
                break;
            case 'cellphone':
                setIsCellPhoneContainerActive(false);
                break;
            default:
                break;
        }
    };

    const handleGenderClick = (gender) => {
        if(gender === '남자') {
            setIsManActive(true);
            setIsWomanActive(false);
        } else if (gender === '여자') {
            setIsWomanActive(true);
            setIsManActive(false);
        }
    };

    const handleForegignerClick = (foreigner) => {
        if(foreigner === '내국인') {
            setIsLocalActive(true);
            setIsForeignerActive(false);
        } else if (foreigner === '외국인') {
            setIsLocalActive(false);
            setIsForeignerActive(true);
        }
    };

    return (
        <div>
        <Global styles={css` body {background-color: #39393c;}`}/>
            <div css={S.SLayout}>
                <div css={S.SContainer}>
                    <div css={S.SHeaderContainer}>
                        <div css={S.SHeader}></div>
                    </div>
                    <div css={S.SStateBox}>
                        <p>실명인증된 아이디로 가입</p>
                        <input type="checkbox" checked={checked} onChange={clickedOnChange}/>
                    </div>
                    <div css={S.STopJoin}>
                        <div css={[S.SFirstBox, isIdContainerActive && S.SIdactive]}>
                            <div></div>
                            <input type="text" 
                                placeholder="아이디" 
                                name="username" 
                                onFocus={() => handleInputFocus('id')} 
                                onBlur={() => handleInputBlur('id')} 
                                onChange={handleInputChange}/>
                            <p>@naver.com</p>
                        </div>
                        <div css={[S.SSecondBox, isPwContainerActive && S.SPwactive]}>
                            <div></div>
                            <input type={isPasswordVisible ? 'text' : 'password'}
                                placeholder="비밀번호"
                                name="password"
                                onFocus={() => handleInputFocus('password')} 
                                onBlur={() => handleInputBlur('password')} 
                                onChange={handleInputChange}/>
                            <button
                                css={isButtonFocused ? S.SButtonFocus : S.SButton}
                                onClick={handleButtonClick}>
                            </button>
                        </div>
                        <div css={[S.SThirdBox, isEmailContainerActive && S.SEmailactive]}>
                            <div></div>
                            <input type="text" 
                                name="email"
                                placeholder='[선택] 비밀번호 분실 시 확인용 이메일' 
                                onFocus={() => handleInputFocus('email')} 
                                onBlur={() => handleInputBlur('email')}
                                onChange={handleInputChange}/>
                        </div>
                    </div>
                    <div css={S.SBottomContainer}>
                        <div css={[S.SBottomFirstBox, isNameContainerActive && S.SNameactive]}>
                            <div></div>
                            <input type="text" 
                                placeholder="이름" 
                                name="name"
                                onFocus={() => handleInputFocus('name')} 
                                onBlur={() => handleInputBlur('name')} 
                                onChange={handleInputChange}/>
                        </div>
                        <div css={[S.SBottomSecondBox, isBirthdayContainerActive && S.SBirthdayactive]}>
                            <div></div>
                            <input type="text" 
                            placeholder='생년월일 8자리' 
                            name="birthday"
                            onFocus={() => handleInputFocus('birthday')} 
                            onBlur={() => handleInputBlur('birthday')} 
                            onChange={handleInputChange}/>
                        </div>
                        <div css={S.SBottomThirdBox}>
                            <div css={S.SGender}>
                                <button css={[S.SLeftButton, isManActive && S.SManactive]} onClick={() => handleGenderClick('남자')}>남자</button>
                                <button css={[S.SRightButton, isWomanActive && S.SWomanactive]} onClick={() => handleGenderClick('여자')}>여자</button>
                            </div>
                            <div css={S.SForeigner}>
                                <button css={[S.SLeftButton, isLocalActive && S.SLocalactive]} onClick={() => handleForegignerClick('내국인')}>내국인</button>
                                <button css={[S.SRightButton, isForeignerActive && S.SForeigneractive]} onClick={() => handleForegignerClick('외국인')}>외국인</button>
                            </div>
                        </div>
                        <div css={[S.SBottomFourthBox, isCellPhoneContainerActive && S.SCellPhoneactive]}>
                            <div></div>
                            <input type="text" 
                            placeholder='휴대전화번호'
                            name="cellphone"
                            onFocus={() => handleInputFocus('cellphone')} 
                            onBlur={() => handleInputBlur('cellphone')} 
                            onChange={handleInputChange}/>
                        </div>
                    </div>
                </div>
            </div>
            <div css={S.SButtonLayout}>
                <button css={S.SNextButton} onClick={handleSubmitClick}>인증요청</button>
            </div>
        </div>
    );
}

export default SignupInfo;