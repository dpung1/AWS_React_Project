import React from 'react';
import SigninContainer from '../../components/Containers/SigninContainer/SigninContainer';
import SigninHeaderLayout from '../../components/Layouts/SigninHeaderLayout/SigninHeaderLayout';

function Signin(props) {
    return (
        <>
            <SigninHeaderLayout />
            <SigninContainer />
        </>
    );
}

export default Signin;