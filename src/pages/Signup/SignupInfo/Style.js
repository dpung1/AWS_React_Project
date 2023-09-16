import { css } from '@emotion/react';

export const SLayout = css`
    background-color: #39393c;
    height: 100%;
`;

export const SContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
`;

export const SHeaderContainer = css`
    display: flex;
    justify-content: flex-start;
    padding: 25px 115px 25px 20px;
    width: 500px;
`;

export const SHeader = css`
    background-image: url(https://ssl.pstatic.net/static/nid/join/m_sp_06_realname_cf3f88d5.png);
    background-position-x: 0px;
    background-position-y: -244px;
    background-size: 372px 326px;
    width: 95px;
    height: 18px;
`;

export const SStateBox = css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: 20px;
    width: 470px;

    & input[type="checkbox"] {
        margin: 0px;
        width: 20px;
        height: 20px;
        appearance: none;
        background-image: url(https://ssl.pstatic.net/static/nid/join/m_sp_06_realname_cf3f88d5.png);
        background-size: 372px 326px;
        background-position: -342px -184px;
        background-repeat: no-repeat;
        cursor: pointer;
    }
    
    & input[type="checkbox"]:checked {
        border-color: transparent;
        background-image: url(https://ssl.pstatic.net/static/nid/join/m_sp_06_realname_cf3f88d5.png);
        background-size: 372px 326px;
        background-position: -342px -206px;
        background-repeat: no-repeat;
    }

    & p {
        padding-left: 6px;
        color: rgb(146, 146, 148);
        font-size: 13px;
        letter-spacing: -0.4px;
        text-align: right;
        margin-right: 5px;
    }
`;

export const STopJoin = css`
    margin: 10px 0px;
    border: 1px solid #6c6c6e;
    border-radius: 6px;
    & input {
        font-size: 16px;
        font-weight: 400;
    }
`;

export const SFirstBox = css`
    display: flex;
    align-items: center;
    border-bottom: 1px solid #6c6c6e;
    width: 450px;
    height: 49px;
    padding: 0px 10px;
    
    & input {
        background-color: transparent;
        border: none;
        padding-left: 10px;
        width: 322px;
        height: 22px;
        outline: none;
        caret-color: white;
        color: white;
        letter-spacing: -1px;
    }

    & div {
        background-image: url(https://ssl.pstatic.net/static/nid/join/m_sp_06_realname_dark_489ebaf8.png);
        background-size: 191px 168px;
        background-position: -32px -52px;
        background-repeat: no-repeat;
        width: 30px;
        height: 30px;
    }

    & p {
        color: #6c6c6e;
    }
`;

export const SIdactive = css`
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    border: 2px solid #09aa5c;
`;

export const SSecondBox = css`
    display: flex;
    align-items: center;
    border-bottom: 1px solid #6c6c6e;
    width: 450px;
    height: 49px;
    padding: 0px 10px;

    input[type="password"]::placeholder {
    letter-spacing: normal;
    }
    
    & input[type="password"] {
        background-color: transparent;
        border: none;
        padding-left: 10px;
        width: 381px;
        height: 22px;
        outline: none;
        caret-color: white;
        color: white;
    }

    & input[type="text"] {
        background-color: transparent;
        border: none;
        padding-left: 10px;
        width: 381px;
        height: 22px;
        outline: none;
        caret-color: white;
        color: white;
    }

    & div {
        background-image: url(https://ssl.pstatic.net/static/nid/join/m_sp_06_realname_dark_489ebaf8.png);
        background-size: 191px 168px;
        background-position: 0 -20px;
        background-repeat: no-repeat;
        width: 30px;
        height: 30px;
    }
`;

export const SPwactive = css`
    border: 2px solid #09aa5c;
`;

export const SButton = css`
    background-color: transparent;
    border: none;
    background-image: url(https://ssl.pstatic.net/static/nid/join/m_sp_06_realname_dark_489ebaf8.png);
    background-size: 191px 168px;
    background-position: -129px -32px;
    background-repeat: no-repeat;
    width: 30px;
    height: 30px;
`;

export const SButtonFocus = css`
    background-color: transparent;
    border: none;
    background-image: url(https://ssl.pstatic.net/static/nid/join/m_sp_06_realname_dark_489ebaf8.png);
    background-size: 191px 168px;
    background-position: -161px -64px;
    background-repeat: no-repeat;
    width: 30px;
    height: 30px;
`;
        
export const SThirdBox = css`
    display: flex;
    align-items: center;
    width: 450px;
    height: 49px;
    padding: 0px 10px;
    
    & input {
        background-color: transparent;
        border: none;
        padding-left: 10px;
        width: 312px;
        height: 22px;
        outline: none;
        caret-color: white;
        color: white;
    }

    & div {
        background-image: url(https://ssl.pstatic.net/static/nid/join/m_sp_06_realname_dark_489ebaf8.png);
        background-size: 191px 168px;
        background-position: -64px -52px;
        background-repeat: no-repeat;
        width: 30px;
        height: 30px;
    }
`;

export const SEmailactive = css`
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    border: 2px solid #09aa5c;
`;

export const SBottomContainer = css`
    position: relative;
    margin: 10px 0px;
    border: 1px solid #6c6c6e;
    border-radius: 6px;
    & input {
        font-size: 16px;
        font-weight: 400;
    }
`;

export const SBottomFirstBox = css`
    display: flex;
    align-items: center;
    border-bottom: 1px solid #6c6c6e;
    width: 450px;
    height: 49px;
    padding: 0px 10px;
    
    & input {
        background-color: transparent;
        border: none;
        padding-left: 10px;
        width: 322px;
        height: 22px;
        outline: none;
        caret-color: white;
        color: white;
        letter-spacing: -1px;
    }

    & div {
        background-image: url(https://ssl.pstatic.net/static/nid/join/m_sp_06_realname_dark_489ebaf8.png);
        background-size: 191px 168px;
        background-position: -32px -52px;
        background-repeat: no-repeat;
        width: 30px;
        height: 30px;
    }
`;

export const SNameactive = css`
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    border: 2px solid #09aa5c;
`;

export const SBottomSecondBox = css`
    display: flex;
    align-items: center;
    border-bottom: 1px solid #6c6c6e;
    width: 450px;
    height: 49px;
    padding: 0px 10px;
    
    & input {
        background-color: transparent;
        border: none;
        padding-left: 10px;
        width: 322px;
        height: 22px;
        outline: none;
        caret-color: white;
        color: white;
        letter-spacing: -1px;
    }

    & div {
        background-image: url(https://ssl.pstatic.net/static/nid/join/m_sp_06_realname_dark_489ebaf8.png);
        background-size: 191px 168px;
        background-position: -32px -20px;
        background-repeat: no-repeat;
        width: 30px;
        height: 30px;
    }
`;

export const SBirthdayactive = css`
    border: 2px solid #09aa5c;
`;

export const SBottomThirdBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #6c6c6e;
    width: 450px;
    height: 49px;
    padding: 0px 10px;
`;

export const SManactive = css`
    border: 2px solid #09aa5c;
    color: #09aa5c;
`;

export const SWomanactive = css`
    border: 2px solid #09aa5c;
    color: #09aa5c;
`;

export const SGender = css`
    display: flex;
`;

export const SForeigner = css`
    display: flex;
    padding-left: 10px;
`;

export const SLocalactive = css`
    border: 2px solid #09aa5c;
    color: #09aa5c;
`;

export const SForeigneractive = css`
    border: 2px solid #09aa5c;
    color: #09aa5c;
`;

export const SLeftButton = css`
    border-bottom: 1px solid #6c6c6e;
    border-top: 1px solid #6c6c6e;
    border-left: 1px solid #6c6c6e;
    border-right: 0.5px solid #6c6c6e;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    background-color: transparent;
    height: 32px;
    width: 107px;
    color: #6c6c6e;
`;

export const SRightButton = css`
    border-bottom: 1px solid #6c6c6e;
    border-top: 1px solid #6c6c6e;
    border-right: 1px solid #6c6c6e;
    border-left: 0.5px solid #6c6c6e;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    background-color: transparent;
    height: 32px;
    width: 107px;
    color: #6c6c6e;
`;

export const SBottomFourthBox = css`
    display: flex;
    align-items: center;
    width: 450px;
    height: 49px;
    padding: 0px 10px;
    
    & input {
        background-color: transparent;
        border: none;
        padding-left: 10px;
        width: 322px;
        height: 22px;
        outline: none;
        caret-color: white;
        color: white;
        letter-spacing: -1px;
    }

    & div {
        background-image: url(https://ssl.pstatic.net/static/nid/join/m_sp_06_realname_dark_489ebaf8.png);
        background-size: 191px 168px;
        background-position: -64px -116px;
        background-repeat: no-repeat;
        width: 30px;
        height: 30px;
    }
`;

export const SCellPhoneactive = css`
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
    border: 2px solid #09aa5c;
`;

export const SButtonLayout = css`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

export const SNextButton = css`
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 6px;
    width: 460px;
    height: 52px;
    font-size: 18px;
    font-weight: 700;
    color: #ffffff;
    background-color: #09aa5c;
    cursor: pointer;
`;