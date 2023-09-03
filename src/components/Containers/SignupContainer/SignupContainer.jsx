import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"

function SignupContainer(props) {
    const [ selectAllChecked, setSelectAllChecked ] = useState(false);
    const [ selectChecked, setSelectChecked ] = useState(false);

    const handleOnClickAllChange = () => {
        setSelectAllChecked(!selectAllChecked);
    };

    const handleOnClickChange = (e) => {
        setSelectChecked(true);
    };

    return (
        <div css={S.SLayout}>
            <div css={S.SMainContainer}>
                <div css={S.SAllConsent}>
                    <div css={S.SCheckBox}>
                        <input type="checkbox" checked={selectAllChecked} onChange={handleOnClickAllChange}/>
                        <span css={S.SAllConsentTitle}>전체 동의하기</span>
                    </div>
                    <span css={S.SAllConsentText}>실명 인증된 아이디로 가입, 위치기반서비스 이용약관(선택), 이벤트・혜택 정보 수신(선택) 동의를 포함합니다.</span>
                </div>
                <ul css={S.SConsent}>
                    <li css={S.SCheckBox}>
                        <input type="checkbox" checked={selectAllChecked} onChange={handleOnClickChange}/>
                        <span css={S.SEssential}>[필수]</span>
                        <span css={S.STitleText}>네이버 이용약관</span>
                        <span css={S.SWhole}>전체 ⟩</span>
                    </li>
                    <div css={S.SContentTextBox}>
                        <h3 css={S.SContentTextHeader}>여러분을 환영합니다.</h3>
                        <p css={S.SContentText}>
                            네이버 서비스 및 제품(이하'서비스')을 이용해주 셔서 감사합니다.
                            본 약관은 다양한 네이버 서비스의 이용과 관련하여 네이버 서비스를 제공하는 네이버 주식회사(이하'네이버')와
                            이를 이용하는 네이버 서비스 회원(이하'회원')또는 비회원과의 관계를 설명하며, 
                            아울러 여러분의 네이버 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.<br />
                        </p>
                        <p css={S.SContentText}>
                            네이버 서비스를 이용하시거나 네이버 서비스 회원으로 가입하실 경우 여러분은 본 약관 및 
                            관련 운영 정책을 확인하거나 동의하게 되므로, 잠시 시간을 내시어 주의 깊게 살펴봐 주시기 바랍니다.
                        </p>
                    </div>
                </ul>
                <ul css={S.SConsent}>
                    <li css={S.SCheckBox}>
                        <input type="checkbox" checked={selectAllChecked} onChange={handleOnClickChange}/>
                        <span css={S.SEssential}>[필수]</span>
                        <span css={S.STitleText}>개인정보 수집 및 이용</span>
                        <span css={S.SWhole}>전체 ⟩</span>
                        <div css={S.SChildrenBox}>
                            <button css={S.SChildren}>🧒🏻 어린이용 안내</button>
                        </div>
                    </li>
                    <div css={S.SContentTextBox}>
                        <p css={S.SContentTextNot}>
                        개인정보보호법에 따라 네이버에 회원가입 신청하시는 분께 수집하는 개인정보의 항목, 개인정보의 수집 및 이용목적, 
                        개인정보의 보유 및 이용기간, 동의 거부권 및 동의 거부 시 불이익에 관한 사항을 안내 드리오니 자세히 읽은 후 동의하여 주시기 바랍니다.
                        </p>
                    </div>
                </ul>
                <ul css={S.SConsent}>
                    <li css={S.SCheckBox}>
                        <input type="checkbox" checked={selectAllChecked} onChange={handleOnClickChange}/>
                        <span css={S.SSelect}>[선택]</span>
                        <span css={S.STitleText}>실명 인증된 아이디로 가입</span>
                    </li>
                    <div css={S.SContentTextNotScrollBox}>
                        <p css={S.SContentTextNot}>
                        실명 인증된 아이디로 가입하시면 본인인증이 필요한 서비스(네이버 페이, 쇼핑, 멤버십 등)를 가입 후 바로 이용하실 수 있어요.
                        </p>
                    </div>
                </ul>
                <ul css={S.SConsent}>
                    <li css={S.SCheckBox}>
                        <input type="checkbox" checked={selectAllChecked} onChange={handleOnClickChange}/>
                        <span css={S.SSelect}>[선택]</span>
                        <span css={S.STitleText}>위치기반서비스 이용약관</span>
                        <span css={S.SWhole}>전체 ⟩</span>
                    </li>
                    <div css={S.SContentTextBox}>
                        <p css={S.SContentTextNot}>
                            위치기반서비스 이용약관에 동의하시면, 위치를 활용한 광고 정보 수신 등을 포함하는 네이버 위치기반 서비스를 이용할 수 있습니다.
                        </p>
                        <h3 css={S.SContentTextHeader}>제 1 조 (목적)</h3>
                        <p css={S.SContentText}>
                        이 약관은 네이버 주식회사 (이하 “회사”)가 제공하는 위치기반서비스와 관련하여 회사와 개인위치정보주체와의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
                        </p>
                    </div>
                </ul>
                <ul css={S.SConsent}>
                    <li css={S.SCheckBox}>
                        <input type="checkbox" checked={selectAllChecked} onChange={handleOnClickChange}/>
                        <span css={S.SSelect}>[선택]</span>
                        <span css={S.STitleText}>이벤트・혜택 정보 수신</span>
                    </li>
                    <div css={S.SContentTextBox}>
                        <p css={S.SContentTextNot}>
                            네이버 서비스 및 제휴 이벤트・혜택 등의 정보를 휴대전화(네이버앱 알림 또는 문자), 이메일로 받을 수 있습니다. 
                            일부 서비스(별개의 회원 체계 운영, 네이버 가입 후 추가 가입하는 서비스 등)의 경우, 수신에 대해 별도로 안내드리며 동의를 구합니다.
                        </p>
                    </div>
                </ul>
            </div>
            <div css={S.SSpecialBox}>
                <div>
                    <span css={S.SSpecialSignup}>단체, 비즈니스 회원 가입</span>
                    <button css={S.SSpecialButton}>⟩</button>
                </div>
            </div>
        </div>
    );
}

export default SignupContainer;