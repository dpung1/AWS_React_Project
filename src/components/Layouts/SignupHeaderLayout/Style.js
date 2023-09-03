import { css } from "@emotion/react";

export const SLayout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #39393c;
`;

export const HeaderContainer = css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 500px;
    height: 68px;
`;

export const SNaverLogo = css`
    margin-left: 20px;
    width: 95px;
    height: 20px;
    cursor: pointer;
`;

export const SLanguageBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    cursor: pointer;
`;

export const SLanIcon = css`
    margin: 9px 11px 3px 3px;
    font-size: 21px;
    color: #f0f0f2;
`;

export const SLanguage = css`
    padding: 8px 11px 3px 3px;
    border: none;
    font-size: 13px;
    font-weight: 600;
    background-color: transparent;
    color: #f0f0f2;
    cursor: pointer;
`;

export const SButton = css`
    border: none;
    padding-right: 2px;
    background-color: transparent;
    font-size: 10px;
    color: #919192;
    cursor: pointer;
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

export const SContentText = css`
    margin: 9px 0px 0px 32px;
    border: 1px solid #6c6c6e;
    border-radius: 6px;
    padding: 15px;
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    color: #919192;
`;

export const SLanguageList = css`
    position: absolute;
    top: 55px;
    padding: 14px;
    border: 1px solid rgb(214, 214, 216);
    border-radius: 4px;
    box-shadow: rgba(18, 28, 70, 0.08) 2px 2px 8px 0px;
    background-color: white;
    z-index: 210;
    
    & li {
        color: rgb(48, 48, 56);
        line-height: 16px;
        font-size: 14px;
        font-weight: 500;
        white-space: nowrap;
        cursor: pointer;
        :hover {
            font-weight: 700;
        }
    }
`;

export const SLanguageListLi = css`
    padding-top: 14px;
    
`;







