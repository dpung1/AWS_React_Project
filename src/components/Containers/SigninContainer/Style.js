import { css } from "@emotion/react";

export const SLayout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const SNaverLogoBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 14px;
    margin-bottom: 11px;
`;

export const SImgLogo = css`
    height: 30px;
    width: 155px;
    cursor: pointer;
`;

export const SMainContainer = css`
    margin: auto;
`;

export const SKeyContainer = css`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 500px;
    margin-top: 40px;
    padding-bottom: 16px;
`; 

export const SKeyBox = css`
    display: flex;
    align-items: center;
    cursor: pointer;

    & button {
        padding: 0px;
        margin-right: 4px;
        border: none;
        background-color: transparent;
        font-size: 12px;
        color: rgba(146, 146, 148, 0.8);
        cursor: pointer;
    }
    `; 

export const SKeyIcon = css`
    width: 14px;
    height: 14px;
    color: rgba(146, 146, 148, 0.8);
`; 

export const SLoginContainer = css`
    flex-direction: column;
    border: 1px solid rgb(230, 230, 234);
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 8px 0px;
`;

export const SIdContainer = css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
`;

export const SIdactive = css`
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    border: 1px solid rgb(3, 199, 90);
`;

export const SIdBox = css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 15px 35px 15px 50px;

    & input {
        padding: 0px;
        border: none;
        outline: none;
        width: 413px;
        height: 22px;
        color: rgb(48, 48, 56);
        font-weight: 600;
        font-size: 16px;
    }

    & input::placeholder {
        opacity: 0.25;
    }
`;

export const SIdIcon = css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
    top: 11px;
    left: 12px;
    height: 30px;
    width: 30px;
    opacity: 0.25;
`;

export const SPwContainer = css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    border-top: 1px solid rgb(245, 245, 245);
`;

export const SPwactive = css`
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
    border: 1px solid rgb(3, 199, 90);
`;

export const SPwBox = css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 15px 35px 15px 50px;

    & input {
        padding: 0px;
        border: none;
        outline: none;
        width: 413px;
        height: 22px;
        color: rgb(48, 48, 56);
        font-weight: 600;
        font-size: 16px;
    }

    & input::placeholder {
        opacity: 0.25;
    }
`;

export const SPwIcon = css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
    top: 11px;
    left: 12px;
    height: 30px;
    width: 30px;
    opacity: 0.25;
`;

export const SLoginButton = css`
    margin-top: 14px;
    padding: 14px 0px 13px 0px;
    width: 515px;
    background-color: rgb(3, 199, 90);
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 6px;
    color: white;
    font-size: 18px;
    font-weight: 800;
    cursor: pointer;
`;

export const SStateBox = css`
    display: flex;
    align-items: center;
    position: relative;
    padding-top: 20px;

    & input[type="checkbox"] {
        margin: 0px;
        width: 20px;
        height: 20px;
        appearance: none;
        background-image: url(https://ssl.pstatic.net/static/nid/login/m_sp_01_login_c3d5d102.png);
        background-size: 238px 196px;
        background-position: -149px -70px;
        background-repeat: no-repeat;
        cursor: pointer;
    }
    
    & input[type="checkbox"]:checked {
        border-color: transparent;
        background-image: url(https://ssl.pstatic.net/static/nid/login/m_sp_01_login_c3d5d102.png);
        background-size: 238px 196px;
        background-position: -192px -146px;
        background-repeat: no-repeat;
    }

    & p {
        padding-left: 6px;
        color: rgb(48, 48, 56);
        font-size: 16px;
        font-weight: 600;
        letter-spacing: -0.6px;
        text-align: center;
    }
`;

export const SImgBox = css`
    position: relative;
    padding-top: 40px;
    cursor: pointer;
`;

export const SImg = css`
    width: 513px;
    height: 230px;
`;

export const STag = css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 8px;
    right: 8px;
    height: 18px;
    width: 26px;
    color: white;
    background-color: rgb(0, 0, 0, 0.3);
    font-size: 12px;
    font-weight: 900;
    border-radius: 4px;
`;

export const SBottom = css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 60px;
    margin-bottom: -20px;
    * {
        cursor: pointer;
    }
`;

export const SFText = css`
    font-size: 14px;
    color: rgb(146, 146, 148);
    padding-right: 10px;
    letter-spacing: -0.5px;
    font-weight: 600;
`;

export const STText = css`
    font-size: 14px;
    color: rgb(146, 146, 148);
    padding: 0px 10px;
    border-left: 1px solid rgb(218, 218, 218);
    border-radius: 0.5px;
    letter-spacing: -0.5px;
    font-weight: 600;
`;

export const SLast = css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 54px 0px 30px 0px;
    * {
        cursor: pointer;
    }
`;

export const SNaverImg = css`
    width: 56px;
    height: 11px;
    
    margin-right: 10px;
    background-image: url(https://ssl.pstatic.net/static/nid/login/m_sp_00_common_2c6b6c08.png);
    background-size: 115px 98px;
    background-position: -42px -16px;
`;

export const SText = css`
    font-size: 13px;
    color: rgb(146, 146, 148);
    border-left: 1px solid rgb(218, 218, 218);
    border-radius: 0.5px;
    padding: 0px 10px;
    letter-spacing: -0.5px;
    font-weight: 600;
`;