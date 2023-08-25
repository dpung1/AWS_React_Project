import { css } from "@emotion/react"

export const SLayout = css`
    padding: 0px 20px 0px 20px;
    background-color: #06b495;
`;

export const SContainer = css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 0px auto;
    width: 375px;
    height: 51px;
`;

export const SFeed = (pathname) => css`
    padding: 18px 5px 12px 5px;
    font-size: 17px;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.7);
    height: 100%;

    border-bottom: ${pathname === '/feed' ? '3px solid #ffffff' : 'none'};
    font-weight: ${pathname === '/feed' ? '900' : '400'};
    color: ${pathname === '/feed' ? '#ffffff' : 'rgba(255, 255, 255, 0.7)'};
    `;

export const STimeLine = (pathname) => css`
    padding: 18px 5px 12px 5px;
    font-size: 17px;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.7);
    height: 100%;

    border-bottom: ${pathname === '/timeline' ? '3px solid #ffffff' : 'none'};
    font-weight: ${pathname === '/timeline' ? '900' : '400'};
    color: ${pathname === '/timeline' ? '#ffffff' : 'rgba(255, 255, 255, 0.7)'};
    `;

export const SReview = (pathname) => css`
    padding: 18px 5px 12px 5px;
    font-size: 17px;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.7);
    height: 100%;

    border-bottom: ${pathname === '/review' ? '3px solid #ffffff' : 'none'};
    font-weight: ${pathname === '/review' ? '900' : '400'};
    color: ${pathname === '/review' ? '#ffffff' : 'rgba(255, 255, 255, 0.7)'};
    `;

export const SOrder = (pathname) => css`
    padding: 18px 5px 12px 5px;
    font-size: 17px;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.7);
    height: 100%;

    border-bottom: ${pathname === '/order' ? '3px solid #ffffff' : 'none'};
    font-weight: ${pathname === '/order' ? '900' : '400'};
    color: ${pathname === '/order' ? '#ffffff' : 'rgba(255, 255, 255, 0.7)'};
    `;

export const SSave = (pathname) => css`
    padding: 18px 5px 12px 5px;
    font-size: 17px;
    text-decoration: none;
    height: 100%;

    border-bottom: ${pathname === '/save' ? '3px solid #ffffff' : 'none'};
    font-weight: ${pathname === '/save' ? '900' : '400'};
    color: ${pathname === '/save' ? '#ffffff' : 'rgba(255, 255, 255, 0.7)'};
`;


