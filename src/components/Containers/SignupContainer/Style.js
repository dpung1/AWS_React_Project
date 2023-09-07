import { css } from "@emotion/react";

export const SLayout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #39393c;
`;

export const SMainContainer = css`
    display: flex;
    flex-direction: column;
    
    padding-top: 30px;
    width: 500px;
`;

export const SAllConsent = css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    margin: 0px 20px;
`;

export const SCheckBox = css`
    display: flex;
    align-items: center;

    & input[type="checkbox"] {
        margin: 0px;
        width: 30px;
        height: 30px;
        appearance: none;
        background-image: url(https://ssl.pstatic.net/static/nid/join/m_sp_06_realname_cf3f88d5.png);
        background-size: 372px 326px;
        background-position: -310px -224px;
        background-repeat: no-repeat;
        cursor: pointer;
    }
    
    & input[type="checkbox"]:checked {
        border-color: transparent;
        background-image: url(https://ssl.pstatic.net/static/nid/join/m_sp_06_realname_cf3f88d5.png);
        background-size: 372px 326px;
        background-position: -310px -160px;
        background-repeat: no-repeat;
    }
    cursor: pointer;
`;

export const SAllConsentTitle = css`
    padding-left: 2px;
    font-size: 17px;
    font-weight: 700;
    letter-spacing: -1px;
`

export const SAllConsentText = css`
    margin: 9px 0px 0px 32px;
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    color: #919192;
`;

export const SConsent = css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    margin: 30px 20px 0px 20px;
`;

export const SEssential = css`
    margin-right: 4px;
    padding-left: 2px;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: -0.5px;
    color: #03c75a;
`;

export const SSelect = css`
    margin-right: 4px;
    padding-left: 2px;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: -0.5px;
    color: #919192;
`;

export const STitleText = css`
    margin-right: 5px;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: -0.8px;
`; 

export const SWhole = css`
    font-size: 12px;
    font-weight: 700;
    letter-spacing: -0.8px;
    color: #919192;
`;

export const SChildrenBox = css`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-left: 143px;
    
`;

export const SChildren = css`
    border: 1px solid #6c6c6e;
    border-radius: 16px;
    padding: 3px 8px;
    height: 28px;
    font-size: 12px;
    font-weight: 700;
    color: #bbbcbf;
    background-color: transparent;
    cursor: pointer;
`;

export const SContentTextBox = css`
    margin: 9px 0px 0px 32px;
    border: 1px solid #6c6c6e;
    border-radius: 6px;
    padding: 15px;
    height: 100px;
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    color: #919192;
    overflow: auto;

    ::-webkit-scrollbar {
        width: 20px;
    }

    ::-webkit-scrollbar-thumb {
        border: 6px solid #39393c;
        border-radius: 10px;
        height: 42px;
        background-color: #999;
    }
`;

export const SContentTextNotScrollBox = css`
    margin: 9px 0px 0px 32px;
    border: 1px solid #6c6c6e;
    border-radius: 6px;
    padding: 15px;
    height: 68px;
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    color: #919192;
`;

export const SContentTextHeader = css`
    font-size: 15.5px;
    font-weight: 700;
    letter-spacing: -0.4px;
    color: #dadde0;
`;

export const SContentText = css`
    margin-top: 5px;
    font-size: 13px;
    letter-spacing: -0.35px;
    color: #a5a5a7;
`;

export const SContentTextNot = css`
    margin-bottom: 15px;
    font-size: 13px;
    letter-spacing: -0.35px;
    color: #a5a5a7;
`;

export const SSpecialBox = css`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    margin: 40px 20px 20px 20px;
    width: 460px;
    cursor: pointer;
`;

export const SSpecialSignup = css`
    font-size: 14.5px;
    font-weight: 500;
    text-decoration: underline;
    color: #03c75a;
`;

export const SSpecialButton = css`
    border: none;
    font-size: 15px;
    color: #03c75a;
    background-color: transparent;
    cursor: pointer;
`;






